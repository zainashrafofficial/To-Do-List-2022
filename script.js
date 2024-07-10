$(document).ready(function () {
    console.log("Zain Ashraf");
    $("#input").change(function () {
        let input = $(this).val();
        $("ul").append('<li>' + input + '<i class = "fas fa-check"></i> <i class = "fas fa-trash"></i></li');
        // console.log(typeof (input));
        $(this).val('');
    });

    $('ul').on('click', '.fa-trash', function () {
        $(this).parent('li').fadeOut(200);
    });

    $('ul').on('click', '.fa-check', function () {
        $(this).parent('li').toggleClass('checked');
    });
})