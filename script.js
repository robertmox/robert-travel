const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

document.getElementById("submitbtn").onclick = function () {
  const useremail = document.getElementById("emailinput").value;
  String(useremail);
  if (useremail.includes("@")) {
    console.log(useremail + " has registered to the newsletter");
    window.alert(useremail + " has registered to the newsletter");
  } else {
    console.log("Invalid input");
    window.alert("Invalid input");
  }
};
