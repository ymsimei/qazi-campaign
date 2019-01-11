addRemoveOpaqueClass()

$(window).scroll(function () {
  addRemoveOpaqueClass()
});

function checkScroll() {
  let scrollPosition = $(this).scrollTop();
  return scrollPosition;
}

function addRemoveOpaqueClass() {
  if (checkScroll() > 20) {
   $('nav').addClass('opaque');
  }
  if (checkScroll() < 20) {
   $('nav').removeClass('opaque');
  }
}
