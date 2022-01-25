$("document").ready(function () {

    /* creating a function to have action on an element */
    $(".text-box").on("click", whenMouseIsClicked);
    $(".text-box").on("mouseleave", whenMouseLeaves);
    
    function whenMouseIsClicked () {
        $(".text-box").html("<h1>You clicked me</h1>");
    };
    
    function whenMouseLeaves () {
        $(".text-box").html("<h1>Were are you going?</h1>");
    };

    /* function to show and hide */
    $(".show").on("click", function() {
        $(".title").show().html("<h1>Click to Hide me</h1>");
    });

    $(".hide").on("click", function() {
        $(".title").hide().html("<h1>Show me</h1>");
    });

    /* function hover on text or element */
    $(".textCopy").hover(anim);

    function anim() {
        $(this).toggleClass("text-div");
    };

    /* accordion function */
    $(".slideUp").click(function () { /* option of click 1 */
        $(".accordion").slideUp(300, "linear"); 
    });

    $(".slideDown").on("click", function () { /* option of click 2 */
        $(".accordion").slideDown();
    });

    $(".slideToggle").on("click", function () { /* option of click 2 */
        $(".accordion").slideToggle(); 
    });

    
    /* function swing toggle */
    $(".toggle").click(function() {
        $(".copyTxt").toggle(1000, "swing")
    });

    /* function animate */
    $(".grow").click(function() {
        $(".animation").animate({width:"500px"},1000)
    });

    $(".move").click(function() {
        $(".animation").animate({marginLeft:"200px"},1000)
    });

    $(".big").click(function() {
        $(".animation").animate({fontSize:"30px"},1000)
    });

    $(".many").click(function() {
        $(".animation").animate({fontSize:"30px", marginLeft:"150px", width:"800px"},2000)
    });

    /* function fade in or out */
    $(".fade-in").on("click", function (e) {
        e.preventDefault();
        $(".fading").fadeToggle(3000)
    });

    $(".fade-out").on("click", function (e) {
        e.preventDefault();
        $(".fading").fadeOut();
    });


    /* SELECTORS AND FILTERS */

    /* $(".filter-selec p:odd").css("color", "red"); */
    /* $(".filter-selec p:even").css("color", "red"); */
    /* $(".filter-selec p:first").css("color", "red"); *//* 
    $(".filter-selec p:last").css("color", "red"); */
    /* $(".filter-selec p~p").css("color", "red"); */
    /* $(".filter-selec p:contains('ADVANCE')").css({color:"red", border:"1px solid blue"}); */
    $(".filter-selec p:nth-child(2)").css("color", "red");


    /* CREATING CONTENT WITH JQUERY */
    // creating new text with normal function
    $(".create-txt").click(function(e) {
        e.preventDefault();
        $(".container p:last").text("Replacing text for what it was here before")
    })

    // creating text with variable
    $(".create-var").click(function(e) {
        e.preventDefault();
        /* var newText= $(".container p:first");  *//* to remove text or paragraphs use this option */
        var newText= "This is the new text replaced"; /* to replace text or paragraphs use this option */
        $(".container p:last").html(newText)

    })


    /* Append and preppend */
    $(".append").click(function(e) {
        e.preventDefault();
        $(".app-prep p:first").append("...appneidng some text here");
    });

    $(".prepend").click(function(e) {
        e.preventDefault();
        $(".app-prep p:first").prepend("...prepneidng some text here").css("color", "red");
    });

    /* Inserting content */
    /* $(".insert p:first").wrap("<div class='inserting'</div>"); */
    /* $(".insert p:first").empty(); */
    /* $("<div>This has been replaced with <span style='color:red'> replaceAll function</span></div>").replaceAll(".insert"); */
    $(".insert").replaceWith("<div>This has been replaced with <span style='color:red'>replaceWith function</span></div>");

    /* Modifying content and CSS */
    $(".add-class").click(function(e){
        e.preventDefault();
        $(".edit p:first").addClass("inserting")
    });

    $(".remove-class").click(function(e){
        e.preventDefault();
        $(".edit p:first").removeClass("inserting")
    });

    $(".toggle-class").click(function(e){
        e.preventDefault();
        $(".edit p:first").toggleClass("inserting")
    });
    
    $(".increase-class").click(function(e){
        e.preventDefault();
        $(".edit p:last").css("font-size", "+=1px")
    });
});
