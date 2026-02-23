const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".explore__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".job__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".offer__card", {
  ...scrollRevealOption,
  interval: 500,
});

function searchProduct() {
  //DOM
  const input = document.getElementById('job-search').value.toUpperCase()
  ;
  const cardContainer = document.getElementById('job__grid');
  console.log(cardContainer);

  const cards = cardContainer.getElementsByClassName('job__card');
  console.log(cards);

  for(let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector(".card-body h5.company");
    console.log(title);

    if(title.innerText.toUpperCase().indexOf(input) > -1) {
      cards[i].style.display = "";      
    } else {
      cards[i].style.display = "none";

    }
  }
}

