var aboutContent1 = document.querySelector('.about-content1');
var aboutContent2 = document.querySelector('.about-content2');
var aboutContent3 = document.querySelector('.about-content3');
var scrollPosition = window.scrollY;

window.addEventListener('scroll', function() {
  var newScrollPosition = window.scrollY;
  console.log(newScrollPosition);

  if (newScrollPosition < scrollPosition) {
    aboutContent1.classList.add('slide-out');
    aboutContent2.classList.add('slide-out');
    aboutContent3.classList.add('slide-out');

  } else {
    aboutContent1.classList.remove('slide-out');
    aboutContent2.classList.remove('slide-out');
    aboutContent3.classList.remove('slide-out');
  }

  scrollPosition = newScrollPosition;
});