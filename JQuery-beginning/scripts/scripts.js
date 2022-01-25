/* This script contains all kind of basic and advance tools to use JQuery */
$(document).ready(function(){

/* ---------- DOM SELECTORS -----------*/
// Targetting the next element with Dom Selectors
/* $("#contact-methods").next().css({border: "3px solid red"}); */

// Targetting the previous element with Dom Selectors
$("#social-nav").prev().css({border: "3px solid orange"});

// Targetting the parent element with Dom Selectors
//NOTE: the function parent if we add an s "parents" will target all the parents that has the element
$(".banner-title").parent().css({border: "3px dotted white"});

// Targetting the children element with Dom Selectors
$("#social-nav").children().css({border: "3px solid brown"});

// Targetting element by using find method
$("#social-nav").find(".twitter").css({border: "3px solid red"});
// Targetting element using selectors which it does the same as above
/* $("#social-nav").find(".twitter").css({border: "3px solid red"}); */

// Targetting element by using closest which it finds the nearest parent to match
//with the element we input in the function ("")
/* $("#social-nav").closest(".wrapper").css({border: "3px solid blue"}); */



/* ------------ CHAINING ----------------*/
// quick example of how to chain different elements to manipulate them but not recomendable
/* $("#contact-methods").css({border: "2px solid red"})
.next().css({border: "2px solid green"})
.closest("section").css({background: "#ededed"}); */



/* ---------- Adding content with JQuery --------------*/
var tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee'>The big fight live: Ham vs Cheese</div>"
var tweet2 = "The big fight live: Ham vs Cheese"


/*
* Now we use any of these methods to add the content to the html
*/

// $("#tweets").append(tweet):   /* add content after and inside the div */
// $("#tweets div").prepend(tweet);    /* add content before and inside the div*/
// $("#tweets p").before(tweet);    /* add content before the element but targeting P tag to keep it inside the div*/
// $("#tweets p").after(tweet);    /* add content after the element but targeting P tag to keep it inside the div*/
$("#tweets div").html(tweet);    /*replace the whole content for the div defined in the variable*/
// $("#tweets p").text(tweet2);    /*replace the whole content for the text defined in the variable 2*/


/* --------------- Wrap and Unwrap Elements ------------- */
// $("section").wrap("<div>");
// $("section").unwrap("<div>");
// $("section").wrapAll("<div class='empty'>"); // we can even add a class to style

// ------ EXAMPLE OF WRAP AND UNWRAP

var wrapper = "<div class='wrapper'>";
var button = $(".button");
var wrapped = true;

button[0].onclick = function () {
    if(wrapped) {
        $("section").unwrap();
        wrapped = false;
        button.text("Wrap");
    } else {
        $("section").wrapAll(wrapper);
        wrapped = true;
        button.text("Unwrap");
    }
};

/* --------------- Remove Content ------------- */

/* $("#contact").empty(); */  /* Empties the inner html, text or content of an element */
/* $("#social-nav").remove(); */  /* Removes the element completely */


/* --------------- Changing Attributes ------------- */

/* $("#contact img").removeAttr("alt"); */ /* Removes an attribute completely */
/* $("#contact img").attr("alt", "location"); */ /* set any attribute */
console.log($("#contact img").attr("alt")); /* read attribute */


/* --------------- ADDING AND REMOVING CLASSES ------------- */

$("header .wrapper").removeClass("wrapper");
$("header > div").addClass("wrapper");

var button = $("#lead-banner a");

button[0].onclick = function() {
    $("#points-of-sale").toggleClass("open");
    return false;
};

/* --------------- BINDING AND UNBINDING EVENTS------------- */

var myLis = $("#points-of-sale2 li");

myLis.on("click", function() {
    $(this).css({background: "#ededed"}); /* Binding */
    myLis.off("click"); /* unbinding */
})


/* --------------- Fading Animations (QUOTE CHANGING ANIMATED EXAMPLE)------------- */

var allQuotes = $("#clients blockquote");
var currentQuote = 0;

function changeQuote() {
    $(allQuotes[currentQuote]).fadeOut(800, function() {
        if(currentQuote == allQuotes.length - 1) {
            currentQuote = 0;
        } else {
            currentQuote++;
        }

        $(allQuotes[currentQuote]).fadeIn(800);
    });
}

var quoteTimer = setInterval(changeQuote, 5000);


/* --------------- SLIDING ANIMATION (CARD SHOW DESCRIPTION P TAG ANIMATED EXAMPLE)------------- */

var items = $("#points-of-sale li");

items.click(function() {
    $(this).find("p").slideToggle(500);
})

$(".rslides").responsiveSlides();

})
