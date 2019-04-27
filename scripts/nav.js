// addRemoveOpaqueClass()
//
// $(window).scroll(function () {
//   addRemoveOpaqueClass()
// });
//
// function checkScroll() {
//   let scrollPosition = $(this).scrollTop();
//   return scrollPosition;
// }
//
// function addRemoveOpaqueClass() {
//   if (checkScroll() > 20) {
//    $('nav').addClass('opaque');
//   }
//   if (checkScroll() < 20) {
//    $('nav').removeClass('opaque');
//   }
// }

let navbar = $('.nav')

// Check Window Scroll Postion
$(window).scroll(function() {
    var height = $(window).scrollTop()
    if (height > 10) {
      navbar.addClass('short')
    } else {
      navbar.removeClass('short')
    }
})

let extended = false
function extendMenu() {
  if (extended) {
    document.querySelector(".nav").classList.remove("extended")
  } else {
    document.querySelector(".nav").classList.add("extended")
  }
  extended = !extended
}
