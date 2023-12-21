function logScrollPosition() {
  var scrollPosition = window.scrollY;
  console.log(scrollPosition);
  if (scrollPosition > 380){
    document.getElementsByClassName("about-content1")[0].classList.add("in-anim");
    document.getElementsByClassName("about-content2")[0].classList.add("in-animr");
    document.getElementsByClassName("about-content3")[0].classList.add("in-anim");
  }
}

// Attach the function to the scroll event
window.addEventListener('scroll', logScrollPosition);