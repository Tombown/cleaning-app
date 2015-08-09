// $('#extra-btn').on('click', function () {
//   $(this).button('complete') // button text will be "finished!"
// })

var total = 0;

$("#extras").on('click', ".extra", function() {   
  $(this).appendTo("#basket");
    
    total += parseInt($(this).children().text(), 10);
    $('.total_price').text(total);
});

$("#basket").on('click', ".extra", function() {    
  $(this).appendTo("#extras");
    total -= parseInt($(this).children().text(), 10);
    $('.total_price').text(total);
});
