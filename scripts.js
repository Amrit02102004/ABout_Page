var aboutContent = document.querySelector('.about-content');
var scrollPosition = window.scrollY;

window.addEventListener('scroll', function() {
  var newScrollPosition = window.scrollY;
  console.log(newScrollPosition);

  if (newScrollPosition < scrollPosition) {
    aboutContent.classList.add('slide-out');
  } else {
    aboutContent.classList.remove('slide-out');
  }

  scrollPosition = newScrollPosition;
});