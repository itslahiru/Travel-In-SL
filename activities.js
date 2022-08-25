let btnSubmit=document.getElementById("addorder");

let fAdults = document.getElementById("adultsf");

btnSubmit.addEventListener("click",submit);

function submit(event){

    //Foreign Tourist
    event.preventDefault();//Page won't reload

    let optActivities =document.getElementById("activitiesf");
    let activities =optActivities.options[optActivities.selectedIndex].value;
    console.log("Activities:"+activities);

    console.log("Adults:",document.getElementById("adultsf").value);
    console.log("Children:",document.getElementById("childrenf").value);

    let timef=document.querySelector("input[name='timef']:checked");
    console.log("Time Duration:"+timef);

    console.log(":Annual Pass",document.getElementById("passf").value);
    console.log(":Food Token",document.getElementById("tokenf").value); 
}

let btnSubmit1=document.getElementById("submit1");
btnSubmit.addEventListener("click",submit1);

function submit1(){

    //Local Tourist
    let optActivities1 =document.getElementById("activitiesl");
    let activities1 =optActivities1.options[optActivities1.selectedIndex].value;
    console.log("Activities:"+activitiesl);

    console.log("Adults:",document.getElementById("adultsl").value);
    console.log("Below 15:",document.getElementById("child15").value);
    console.log("Below 6:",document.getElementById("child6").value);

    let duration=document.getElementById("duration").value;
    let time;
    if (duration == "Three Hours") {
        time = document.getElementById("time1").value 
    }
    else if (duration == "Half Day") {
        time = document.getElementById("time2").value
    }
    else if (duration == "Full Day") {
        time = document.getElementById("time3").value
    }
    else if (duration == "Two Days") {
        time = document.getElementById("time4").value
    }
    console.log("Time Duration:"+ time);

    console.log(":Annual Pass",document.getElementById("passl").value);
    console.log(":Food Token",document.getElementById("tokenl").value);

    let totaltickets = parseInt(document.getElementById("adultsf").value) + parseInt(document.getElementById("childrenf").value) + parseInt(document.getElementById("adultsl").value) + parseInt(document.getElementById("child15").value) + parseInt(document.getElementById("child6").value) + parseInt(document.getElementById("passf").value) + parseInt(document.getElementById("tokenf").value) + parseInt(document.getElementById("passl").value) + parseInt(document.getElementById("tokenl").value);
    console.log(totaltickets);
    
    //foreign tourist
    document.getElementById("cost2").innerText = totaltickets;

    let totalPrice = parseInt(document.getElementById("adultsf").value * 3000) + parseInt(document.getElementById("childrenf").value * 2500) + parseInt(document.getElementById("adultsl").value * 2500) + parseInt(document.getElementById("child15").value * 1000) + parseInt(document.getElementById("child6").value * 500) + parseInt(document.getElementById("passf").value * 5000) + parseInt(document.getElementById("tokenf").value * 500) + parseInt(document.getElementById("passl").value * 5000) + parseInt(document.getElementById("tokenl").value * 500);
    console.log(totalPrice);

    document.getElementById("cost4").innerText = totalPrice;

}

    
    function myFunction1() {

        let activity1 = document.getElementById("activitiesl").value
        let activity2 = document.getElementById("activitiesf").value
        if (activity1 == "" && activity2 == "")

    
        {
            alert("Order is incomplete!!");
        }
        if (activity1 == "Diving" || activity2 == "Diving")
        {
            alert("Thank You! for your reservation");
        }
        else if (activity1 == "Hiking" || activity2 == "Hiking")
        {
            alert("Thank You! for your reservation");
        }
        else if (activity1 == "Rock Climbing" || activity2 == "Rock Climbing")
        {
             alert("Thank You! for  your reservation");
        }

    }

    function myFunction() {

        let duration=document.getElementById("duration").value;
        let time;
        if (duration == "Three Hours") {
            time = document.getElementById("time1").value 
        }
        else if (duration == "Half Day") {
            time = document.getElementById("time2").value
        }
        else if (duration == "Full Day") {
            time = document.getElementById("time3").value
        }
        else if (duration == "Two Days") {
            time = document.getElementById("time4").value
        }
        
            document.getElementById("cost1").innerText = "";
            document.getElementById("cost3").innerText = "";
        }
    
    
    let tickets = [];
    function addCurrent(){
        console.log("storage")

        let currentTickets = parseInt(document.getElementById("adultsf").value) + parseInt(document.getElementById("childrenf").value) + parseInt(document.getElementById("passf").value) + parseInt(document.getElementById("tokenf").value);
        console.log(currentTickets) + parseInt(document.getElementById("passl").value) + parseInt(document.getElementById("tokenl").value);

        //foreign
        document.getElementById("cost1").innerText = currentTickets;

        let currentPrice = parseInt(document.getElementById("adultsf").value * 3000) + parseInt(document.getElementById("childrenf").value * 2500) + parseInt(document.getElementById("passf").value * 5000) + parseInt(document.getElementById("tokenf").value * 500) + parseInt(document.getElementById("passl").value * 5000) + parseInt(document.getElementById("tokenl").value * 500);
        console.log(currentPrice);

        document.getElementById("cost3").innerText = currentPrice;
       
    }

function myFunction2() {

    let crdnumber = document.getElementById("ccnum").value
    if (crdnumber == "")
    {
        alert("Order is incomplete!!");
    }
    else{
        alert("Order placement was successful!")
    }

  }