$(document).ready(function(){
  // $(document).ready(function() {






  $('ul.baby-step-list li').click(function(){
    var steplis = $(this).attr('steps');



    $('ul.baby-step-list li').removeClass('active');
    $('.steps').removeClass('active');



    $(this).addClass('active');
    $("#"+steplis).addClass('active');
  })

 })
// }