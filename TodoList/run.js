$('ul').on("click", "li", function (){
    $(this).toggleClass('done');
})
$('ul').on("click", "span", function (event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();     //prevents the parent elements from being notified about this particular event
})

$('input').keypress(function (event){
    if(event.which === 13){           // if ENTER is hit
        var todotext = $(this).val();   
        $(this).val("");
        $('ul').append("<li><span><i class='fas fa-trash'></i></span> " + todotext + "</li>");
    }
})
$('#Add-toggle').click(function(){
    $('input').fadeToggle();
})