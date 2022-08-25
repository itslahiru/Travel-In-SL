//creating a static cache
const statCache='statv4';
//creating a dynamic cache
const dynaCache='dynav1';

//storing static assets in array
const assets=['./','./activities.css','./activities.html','./activities.js','./android-chrome-192x192.png','./apple-touch-icon.png','./Aru gam bay beach.jpg','./background.jpg','./beaches.css','./beaches.html','./browserconfig.xml','./camping.jpg','./diving.jpg','./donate.js','./donation.jpg','./elephant.JPG','./favicon-16x16.png','./favicon-32x32.png','./favicon.ico','./Gal oya national park.webp','./Have No Fear The Sri Lankan is here Pride Proud Sri Lanka Essential T-Shirt.jpg','./heritage1.css','./heritage1.html','./heritage2.css','./heritage2.html','./hiking.jpg','./Home page.css','./Home page.html','./Horton Plains National Park.webp','./hotel contacts.css','./hotel contacts.html','./hotel.jpg','./Kandy.JPG','./Kandy2.JPG','./Kandy3.JPG','./leopard.JPG','./Life is better in Sri Lanka Classic T-Shirt.jpg','./Logo.png','./main image.JPG','./Millennium Elephant Foundation.webp','./Minneriya National Park.webp','./Mount Lavinia Beach.jpg','./mstile-150x150.png','./product1.webp','./product2.webp','./purchase and donate.css','./purchase and donate.html','./rock climbing.jpg','./safari-pinned-tab.svg','./sigiriya.JPG','./sigiriya2.JPG','./sigiriya3.JPG','./site.json','./sloth bear.jpg','./Sri Lanka flag map Essential T-Shirt.jpg','./sub image1.JPG','./sub image2.JPG','./sub image3.JPG','./The Lion Nation Premium T-Shirt.jpg','./Unawatuna beach.jpg','./wild buffalo.jpg','./wildlife.css','./wildlife.html','./yala national park.webp'];

//Installation event
self.addEventListener('install',(evt)=>{
    //console.log("Service worker installed.");
    //install event should wait until whatever inside evt.waitUntil() finishes.
    evt.waitUntil(
        //opens static cache
        caches.open(statCache)
    .then((cache)=>{
        console.log("Caching assets...");
        //adding all assets in assets array into cache
        cache.addAll(assets);
    })
    );
    
});

//The activate event
self.addEventListener('activate',(evt)=>{
    //console.log("Service worker is active!");
    evt.waitUntil(
        //accessing all versions of caches available currently
        caches.keys()
        .then((keys)=>{
            //console.log(keys);
            //going through the list pf caches, checking whether the cache name is equal to current cache version/s:static and dynamic and getting rid of any old cache versions
            return Promise.all(
                keys.filter(key=>key!==statCache && key!==dynaCache)
                .map(key=>caches.delete(key))
            );

        })
    );
});

//The fetch event handler
self.addEventListener('fetch',(evt)=>{
    //console.log("Fetch event",evt);
    //interrupt the normal request and respond with a custom response
    evt.respondWith(
        //check if the resource exists in cache
        caches.match(evt.request)
        .then((cacheRes)=>{
            //return from cache if it is there in cache. or else fetch from server
            return cacheRes || fetch(evt.request)
            //when fetching from server, add the request and response to dynamic cache to access the resource/s when offline
            .then(fetchRes=>{
                return caches.open(dynaCache)
                .then(cache=>{
                    cache.put(evt.request.url,fetchRes.clone());
                    return fetchRes;
                });
            });
            //returning the fallback page if the resource is not available in any of the caches
        }).catch(()=>{
            //check whether the request url contains .html in it
            if(evt.request.url.indexOf('.html')>-1){
                return caches.match('/fallback.html')
            }
            })
    );
})