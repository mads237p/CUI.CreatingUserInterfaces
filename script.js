document.addEventListener("DOMContentLoaded", start);


let open = document.querySelector("#open");
let cancel = document.querySelector(".cancel");
let back = document.querySelector(".back");
let message = document.querySelector("#message b");
let message2 = "Which amount would you like?";
let amount = document.querySelectorAll(".grid_2 .box");
let options = document.querySelector("#me");
let splash = document.querySelector(".logo");
let ani = document.querySelector(".spin");
let newAmount = document.querySelectorAll(".box p");
let charge = "Do you want to charge ";
let yes = "yes";
let grid = document.querySelector(".grid_2");
//let landing = document.querySelector("#landingpage");
let check = window.location.href;
let index = "landing";
let str2 = "first";
let str3 = "second";
let landing = check.includes("index");
let firstP = check.includes("first");
let secondP = check.includes("second");
let firstURL = "firstPage.html";
let scndURL = "secondPage.html";

//let load = true;


function start() {
    console.log("start");

    //    open.classList.add("zoom");

    console.log("URL: " + check);

    //    landing = check + index;
    //    first = check + firstP;
    //    scd = url + secondP;



    if (landing) {
        console.log("index");
        landingPage();

    } else if (firstP) {
        console.log("firstPage");
        firstPage();

    } else if (secondP) {
        console.log("secondPage");
        secondPage();

    }

    // The page is fully loade
}

function landingPage() {

    open.addEventListener("click", () => {

        location.href = firstURL;
    });

    console.log("landingpage");
    if (window.innerWidth > 800 || check === landing) {

        console.log("vidnue stort");
        //    hide.style.display = "none";
        splash.classList.add("spin");
        console.log("spin");
        //        open.classList.remove("hide");

        //        splash.addEventListener("animationend", nextPage);

        //        mobile.classList.add("hide");
        open.addEventListener("click", () => {

            location.href = firstURL;
        });


    } else if (window.innerWidth < 800) {


        console.log("vidnue lille");
        //        open.classList.add("hide");

    }


}

function firstPage() {


    console.log("FirstPage");

    options.addEventListener("click", () => {

        location.href = scndURL;
        chanceText();
    });

}

function chanceText() {
    console.log("secondpage");


    message.innerHTML = "Which amount would you like?";

    cancel.addEventListener("click", () => {

        location.href = firstURL;


    });

}


function secondPage() {

    //    location.href = secondP;

    message.innerHTML = "Which amount would you like?";

    console.log("seconPage");

    amount.forEach(click => click.addEventListener("click", () => {

        message.innerHTML = "";

        message.innerHTML = charge + newAmount[0].innerHTML;
        back.textContent = yes;


    }));



    //    back.classListAdd(".confirm")


    cancel.addEventListener("click", () => {

        location.href = firstURL;
    });


    let confirm = back;
    confirm.addEventListener("click", () => {
        console.log("clikck");

        grid.innerHTML = "";

        message.innerHTML = "Thank you for your purchase";

        cancel.textContent = "Back";
        back.style.display = "none";



    });

    //    cancel.addEventListener("click", () => {
    //
    //        location.href = "firstPage.html";
    //
    //
    //
    //    });



}
