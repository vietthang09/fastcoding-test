function toggle() {
  var x = document.getElementById("nav-collapse");
  if (x.className === "nav-collapse closed") {
    x.className += " opened";
  } else {
    x.className = "nav-collapse closed";
  }
}
const nav = document.getElementById("top-nav");
window.onscroll = function () {
  if (document.body.scrollTop >= 200) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};
