let navbar = $('.nav')
let extended = false
let height = $(window).scrollTop()
changeNav(height)

// Check Window Scroll Postion
$(window).scroll(function() {
  let height = $(window).scrollTop()
  changeNav(height)
})

function extendMenu() {
  if (extended) {
    document.querySelector(".nav").classList.remove("extended")
  } else {
    document.querySelector(".nav").classList.add("extended")
  }
  extended = !extended
}

function changeNav(height) {
  if (height > 10) {
    navbar.addClass('short')
  } else {
    navbar.removeClass('short')
  }
}
