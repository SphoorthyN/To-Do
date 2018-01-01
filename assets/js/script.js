//applies a click listener to the entire 'ul', only when an 'li' is clicked though
$("ul")
    .on("click", "li", function () {
        $(this).toggleClass("complete");//toggles the gray text and strike-through
})
    .on("click", "span", function (e) {
        // $(this).parent().fadeOut(500, function () {
        //     // $(this).remove();//removes the list element after fading out, 500ms
        // });
        $(this).parent().css({
            opacity: "0",
            backgroundOpacity: "0",
            height: "0"
        });

        //setTimeout doesn't take "this" very well. Hence, declare it outside and use it inside
        var object = $(this).parent();
        setTimeout(function () {
            object.css("display", "none");
        }, 1000);
        e.stopPropagation(); //stops event bubbling
});


// LEARNT A NEW THING. WE CAN CHAIN ON FUNCTIONS LIKE WHAT WE DID ABOVE ON ONE SINGLE SELECTOR. COOL

$("input[type='text']").keypress(function (e) {
    //13 is the "enter" code
    if (e.which === 13) {
        console.log($(this).val());//this gives the value of data in the input
        var toDoText = $(this).val();

        //empty input returns an empty string. If the input is EMPTY, the append does not work
        if (toDoText !== "") {

            $("<li><span><i class='fas fa-trash'></i></span>" + toDoText + "</li>").appendTo("ul");
            /*appends the first $() to the "ul", the end.
                                                                                   alternative is to use .append. ul comes first,
                                                                                   then the stuff we want to add*/
        }

        $(this).val(null); //makes the input blank after clicking enter
    }
});

//selecting the PLUS icon and using it to hide and add the input bar
var input_toggle = true;
$("#add-note").click(function () {
    // alert("clicked");
    if(input_toggle){
        $("input").css({
            opacity: "0",
            lineHeight: "0",
            fontSize: "0"
        });
        var object = $(this);
        console.log(object);
        setTimeout(function () {
            // $("input").css("display", "none");
        }, 1000);
        $("#plus").toggleClass("fa-minus", 1000, "easeinout").toggleClass("fa-plus");
    }
    else{
        $("input").css({
            height: "48px",
            opacity: "1",
            lineHeight: "3rem",
            fontSize: "14px"
        });
        $("#plus").toggleClass("fa-minus").toggleClass("fa-plus");
    }
    input_toggle = !input_toggle;
});
