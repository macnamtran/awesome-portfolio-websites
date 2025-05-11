AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "HabitPet",
    cardImage: "assets/images/project-page/habitpet.jpg",
    description: "A habit tracker with a virtual pet. Built for Hack the Hill hackathon.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://devpost.com/software/the-habit-pet",
    Githublink: "https://github.com/macnamtran/habitpet",
  },
  {
    title: "Social Platform Bio Filter",
    cardImage: "assets/images/project-page/code.jpg",
    description: "a Python script to assist the Leads generating process",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Githublink: "https://github.com/macnamtran/bio_filter",
  },
  {
    title: "PICaxe robot arm",
    cardImage: "assets/images/project-page/pic.jpg",
    description: "A robot arm made with PICaxe-20X2 microcontroller, and code with BASIC",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/macnamtran/picArm",
  },
  {
    title: "LED Roulette Wheel",
    cardImage: "assets/images/project-page/wheel.jpg",
    description: "an electronic roulette wheel featuring 10 LEDs, a speaker, a 555 timer, and a 4017 IC",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://drive.google.com/drive/folders/1X8iuCYC4nnzH1Dg5ioCF8tZ4xaEnAmKw",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, Previewlink, Githublink }) => {
    output += `       
  <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600">
    <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
      
      <ul class="menu-content-top">
        ${Previewlink ? `
          <li><a href="${Previewlink}" class="social-icon" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </a></li>` : ""}
        ${Githublink ? `
          <li><a href="${Githublink}" class="social-icon" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a></li>` : ""}
      </ul>

      <div class="header"></div>
      <div class="data">
        <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="#">${title}</a></h1>
            <p class="project-description">${description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  });
  projectcards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}