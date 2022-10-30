$(document).ready(function () {
    $(".container").each(function (i) {
        $(this).css( {'opacity': 0, 'bottom': '-100px' } )
    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 + i*500);
    })
})