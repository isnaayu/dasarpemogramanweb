console.log("Selamat Datang");

const toggle = document.getElementById("toggle");
const elements = document.querySelectorAll("header ul li");

for (const element of elements) {
  toggle.addEventListener("click", (event) => {
    if (toggle.style.display !== "flex") {
      element.style.display = "block";
      element.style.visibility = "visible";
      element.style.justifyContent = "flex-end";
    } else {
      element.style.display = "none";
    }
  });
}

const links = document.querySelectorAll(".menu");

for (const link of links) {
  link.addEventListener("click", clickHandler);

}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 120;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  }); 
}
