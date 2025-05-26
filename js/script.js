/** @format */

// htmlcss progress circular bar
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 80,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// frontend progress circular bar
let frontendProgress = document.querySelector(".frontend"),
  frontendValue = document.querySelector(".frontend-progress");

let frontendStartValue = 0,
  frontendEndValue = 80,
  frontendspeed = 30;

let progressfrontend = setInterval(() => {
  frontendStartValue++;

  frontendValue.textContent = `${frontendStartValue}%`;
  frontendProgress.style.background = `conic-gradient(#20c997 ${
    frontendStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (frontendStartValue == frontendEndValue) {
    clearInterval(progressfrontend);
  }
}, frontendspeed);

// backend progress circular bar
let backendProgress = document.querySelector(".backend"),
  backendValue = document.querySelector(".backend-progress");

let backendStartValue = 0,
  backendEndValue = 70,
  backendSpeed = 70;

let progressbackend = setInterval(() => {
  backendStartValue++;

  backendValue.textContent = `${backendStartValue}%`;
  backendProgress.style.background = `conic-gradient(#3f396d ${
    backendStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (backendStartValue == backendEndValue) {
    clearInterval(progressbackend);
  }
}, backendSpeed);

// database progress circular bar
let databaseProgress = document.querySelector(".database"),
  databaseValue = document.querySelector(".database-progress");

let databaseStartValue = 0,
  databaseEndValue = 75,
  databaseSpeed = 30;

let progressDatabase = setInterval(() => {
  databaseStartValue++;

  databaseValue.textContent = `${databaseStartValue}%`;
  databaseProgress.style.background = `conic-gradient(#7d2ae8 ${
    databaseStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (databaseStartValue == databaseEndValue) {
    clearInterval(progressDatabase);
  }
}, databaseSpeed);

// filter using javascript
$(document).ready(function () {
  $('[data-filter="all"]').addClass("active");

  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    console.log("value:", value);
    if (value == "all") {
      $(".post").show("1000");
    } 
    else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
    $(".filter-item").removeClass("active"); // Remove from all
    $(this).addClass("active"); // Add to clicked one
  });
});

// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar-top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar-top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

// adding funtionality to back to top button

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const data = [
  {
    id: "1",
    name: "Tic Tac Toe Game",
    category: "Game",
    client: "Personal Project",
    project_date: "",
    project_url: "https://tictactoe-franky19.vercel.app",
    project_details: `
     <p>
  This project is a simple <strong>Tic Tac Toe (X and O)</strong> game developed using 
  <em>HTML</em>, <em>CSS</em>, and <em>JavaScript</em>. The game is played by two players taking turns 
  marking boxes in a 3x3 grid. The objective of the game is to be the first player to align three identical 
  symbols in a row, column, or diagonal.
</p>
<h2>Main Features:</h2>
<ul>
  <li>Interactive user interface using HTML and CSS</li>
  <li>Game logic fully handled by JavaScript</li>
  <li>Automatic detection of a winner or a draw</li>
  <li>Option to reset and replay the game</li>
  <li>Responsive design and easy to play on various devices</li>
</ul>
<h2>Learning Objectives:</h2>
<p>
  This project aims to help practice basic skills in front-end web development, including:
</p>
<ul>
  <li>Understanding HTML structure</li>
  <li>Applying styling using CSS</li>
  <li>Implementing logic and dynamic interaction using JavaScript</li>
</ul>
<p>
  By completing this project, beginner developers can understand how to build a simple interactive web application 
  without using additional libraries or frameworks.
</p>

    `,
    tech_stack: "HTML, CSS, JavaScript",
    images_carousel: [
      { src: "images/tictactoe/images-1.png", alt: "Image 1" },
      { src: "images/tictactoe/images-2.png", alt: "Image 2" },
      { src: "images/tictactoe/images-3.png", alt: "Image 3" },
    ],
  },
  {
    id: "2",
    name: "Todo List simple",
    category: "Web App",
    client: "Personal Project",
    project_date: "",
    project_url: "https://my-todo-nextjs.vercel.app/",
    project_details: "",
    tech_stack: "NextJS, JavaScript, CSS",
    images_carousel: [{ src: "images/todo-list.png", alt: "Image 1" }],
  },
  {
    id: "3",
    name: "SBI OMFS",
    category: "Web App",
    client: "Dr Kai Lee",
    project_date: "",
    project_url: "https://sbi-omfs.com.au/",
    project_details: "",
    tech_stack: "ReactJS, JavaScript / TypeScript, AWS S3, CSS",
    images_carousel: [{ src: "images/sbi-omfs-web-app.png", alt: "Image 1" }],
  },
  {
    id: "4",
    name: "SBI OMFS Admin Panel",
    category: "Website",
    client: "Dr Kai Lee",
    project_date: "",
    project_url: "https://sbi-omfs.com.au/admin",
    project_details: "",
    tech_stack: "ReactJS, JavaScript / TypeScript, AWS S3, ChartJS, CSS",
    images_carousel: [{ src: "images/sbi-admin.png", alt: "Image 1" }],
  },
  {
    id: "5",
    name: "Company Profile Dr Kai Lee",
    category: "Website",
    client: "Dr Kai Lee",
    project_date: "",
    project_url: "https://drkaileeoms.com.au/",
    project_details: "",
    tech_stack: "ReactJS, JavaScript / TypeScript, AWS S3, AWS Lambda, CSS",
    images_carousel: [{ src: "images/compre-drkai.png", alt: "Image 1" }],
  },
  {
    id: "6",
    name: "Admin Panel Company Profile Dr Kai",
    category: "Website",
    client: "Dr Kai Lee",
    project_date: "",
    project_url: "https://admin-beta.drkailee.com/",
    project_details: "",
    tech_stack:
      "ReactJS, JavaScript / TypeScript, AWS S3, AWS Lambda, CSS,SCSS/SASS",
    images_carousel: [{ src: "images/admin-compre.png", alt: "Image 1" }],
  },
  {
    id: "7",
    name: "Check Tense / Check Grammar",
    category: "Website",
    client: "Personal Project",
    project_date: "",
    project_url: "https://my-grammar-2igcy2wln-franky19.vercel.app/",
    project_details: "",
    tech_stack: "ReactJS, TypeScript, Open AI Api, CSS",
    images_carousel: [{ src: "images/check-grammar.png", alt: "Image 1" }],
  },
  {
    id: "8",
    name: "Comic List",
    category: "Website",
    client: "Personal Project",
    project_date: "",
    project_url: "https://my-grammar-2igcy2wln-franky19.vercel.app/",
    project_details: "",
    tech_stack: "ReactJS, TypeScript, HTML, CSS, Graphql, ",
    images_carousel: [{ src: "images/skuynime.png", alt: "Image 1" }],
  },
  {
    id: "9",
    name: "CMS Admin Panel For Mobile Apps",
    category: "Website",
    client: "Personal Project",
    project_date: "20 September 2024 -  26 Mei 2025",
    project_url: "https://tutureels.com/admin",
    project_details: "",
    tech_stack:
      "NextJS, TypeScript, VPS, NGINX, SASS, CSS,React Context API, Monorepo, Turbopack, Axios, Tailwindcss",
    images_carousel: [{ src: "images/tutureels.png", alt: "Image 1" }],
  },
  {
    id: "10",
    name: "Tutureels Apps",
    category: "apps",
    client: "Personal Project",
    project_date: "20 September 2024 -  26 Mei 2025",
    project_url: "https://play.google.com/store/apps/details?id=com.pitto.app",
    project_details: "",
    tech_stack: "React Native, Expo",
    images_carousel: [{ src: "images/tutureels-app.jpeg", alt: "Image 1" }],
  },
];

const portofolioContentElement = document.getElementById("portofolio-contents");

if (portofolioContentElement) {
  data.forEach((project) => {
    // Outer post div
    const projectDiv = document.createElement("div");
    projectDiv.className = `post col-md-4 ${project.category
      .toLowerCase()
      ?.replace(" ", "")} all col-10 mt-3 mt-md-0`;
    projectDiv.setAttribute("data-aos", "fade-up");

    // Card container
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    // First image (card-img-top)
    const firstImage = project.images_carousel[0];
    if (firstImage) {
      const imgEl = document.createElement("img");
      imgEl.src = firstImage.src;
      imgEl.alt = firstImage.alt;
      imgEl.className = "card-img-top";
      // if (project?.category?.toLowerCase()?.replace(" ", "") === "apps") {
      //   imgEl.style = "height:100px";
      // }
      cardDiv.appendChild(imgEl);
    }

    // Card body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body text-center";

    // Project title
    const title = document.createElement("h4");
    title.className = "card-title";
    title.textContent = project.name;
    cardBody.appendChild(title);

    // Tech stack badges
    const techs = project.tech_stack.split(",").map((t) => t.trim());
    techs.forEach((tech, i) => {
      const badge = document.createElement("span");
      badge.className = `badge bg-secondary badge-pill m-2`;
      badge.textContent = tech;
      cardBody.appendChild(badge);
    });

    // Category badge
    const categoryBadge = document.createElement("span");
    categoryBadge.className = "badge bg-secondary badge-pill mb-2";
    categoryBadge.textContent = project.category;
    cardBody.appendChild(categoryBadge);

    // Line break before link
    cardBody.appendChild(document.createElement("br"));

    // Read more link
    const readMoreLink = document.createElement("a");
    readMoreLink.href = `detail_project.html?id=${project.id}`;
    readMoreLink.className = "link text-center";
    readMoreLink.textContent = "Read More";
    cardBody.appendChild(readMoreLink);

    // Append everything
    cardDiv.appendChild(cardBody);
    projectDiv.appendChild(cardDiv);
    portofolioContentElement.appendChild(projectDiv);
  });
}
