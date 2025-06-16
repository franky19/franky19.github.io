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
    project_details: `<p>
    The <strong>To-Do List Application</strong> is a simple and intuitive task management tool designed to help users organize their daily activities effectively.
    This project allows users to create, read, update, and delete (CRUD) tasks in a streamlined and user-friendly interface.
    The main goal is to boost productivity by enabling users to track their responsibilities and prioritize tasks.
  </p>

  <h2>🎯 Features:</h2>
  <ul>
    <li>✅ Add new tasks with a title and optional description.</li>
    <li>✏️ Edit existing tasks.</li>
    <li>🗑️ Delete tasks when completed or no longer needed.</li>
    <li>📋 Mark tasks as completed/incomplete.</li>
    <li>🔍 Filter tasks by status (All, Completed, Incomplete).</li>
    <li>💾 Persistent data storage using local storage or backend database.</li>
  </ul>

  <h2>🛠️ Technologies Used:</h2>
  <ul>
    <li><strong>Frontend:</strong> HTML, CSS, JavaScript (or React.js for a modern SPA)</li>
    <li><strong>Backend (Optional):</strong> Node.js + Express.js (or Firebase/another BaaS)</li>
    <li><strong>Database (Optional):</strong> MongoDB / Firebase Firestore / LocalStorage</li>
  </ul>

  <h2>👥 Target Users:</h2>
  <ul>
    <li>Students managing school assignments</li>
    <li>Professionals organizing work tasks</li>
    <li>Anyone looking to manage daily to-dos efficiently</li>
  </ul>

  <h2>🚀 Project Goals:</h2>
  <ul>
    <li>Practice implementing CRUD functionality.</li>
    <li>Understand state management in a UI.</li>
    <li>Learn how to persist data using local or cloud-based storage.</li>
    <li>Build responsive and accessible user interfaces.</li>
  </ul>`,
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
    project_details: `<p>
   To development a website survey of maxilofacial fractional on a clinic or hospital
  </p>

  <h2>🎯 Features:</h2>
  <ul>
  <li>Register User</li>
  <li>online survey user</li>
  <li>sending user info about surve</li>
  </ul>

  <h2>🛠️ Technologies Used:</h2>
  <ul>
    <li><strong>Frontend:</strong> HTML, CSS, JavaScript (or React.js for a modern SPA), typescript / javascript</li>
    <li><strong>Backend (Optional):</strong> Node.js + Express.js </li>
    <li><strong>Database (Optional):</strong> MongoDB / POSTGRESS</li>
    <li><strong>Cloud compung</strong> : AWS SERVICES</li>
  </ul>

  <h2>👥 Target Users:</h2>
  <ul>
    <li>Alcohol used disorder</li>
  </ul>

  <h2>🚀 Project Goals:</h2>
  <ul>
    <li>Decrement alcohol used for customer</li>
  </ul>`,
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
    project_details: `<p>
   To development a website admin panel for survey of maxilofacial fractional on a clinic or hospital
  </p>

  <h2>🎯 Features:</h2>
  <ul>
  <li>Register new clinic</li>
  <li>add or updated survey for web user</li>
  </ul>

  <h2>🛠️ Technologies Used:</h2>
  <ul>
    <li><strong>Frontend:</strong> HTML, CSS, JavaScript (or React.js for a modern SPA), typescript / javascript</li>
    <li><strong>Backend (Optional):</strong> Node.js + Express.js </li>
    <li><strong>Database (Optional):</strong> MongoDB / POSTGRESS</li>
    <li><strong>Cloud compung</strong> : AWS SERVICES</li>
  </ul>

  <h2>👥 Target Users:</h2>
  <ul>
    <li>Clinic</li>
  </ul>

  <h2>🚀 Project Goals:</h2>
  <ul>
    <li>Add new clinic</li>
  </ul>`,
    tech_stack: "ReactJS, JavaScript / TypeScript, AWS S3, ChartJS, CSS",
    images_carousel: [{ src: "images/sbi-admin.png", alt: "Image 1" }],
  },
  {
    id: "5",
    name: "Company Profile Dr Kai Lee",
    category: "Website",
    client: "Dr Kai Lee",
    project_date: ` <p>
    The <strong>Dr. Kai Lee Company Profile Website</strong> is a professional and elegant digital platform designed to showcase Dr. Kai Lee’s expertise, services, and achievements.
    This website serves as a comprehensive profile that reflects the credibility, values, and professionalism of Dr. Kai Lee, making it easier for patients, collaborators, and the general public to connect and engage.
  </p>
  <p>
    The goal is to establish a strong online presence that highlights medical qualifications, service offerings, and key milestones in a clean and user-friendly layout.
  </p>

  <h2>🎯 Features:</h2>
  <ul>
    <li>👤 <strong>About Section</strong> – A detailed biography, educational background, and professional journey of Dr. Kai Lee.</li>
    <li>🩺 <strong>Services Page</strong> – A clear overview of medical specialties, treatments, and consultation services.</li>
    <li>🏆 <strong>Achievements Section</strong> – Recognition, certifications, and awards received.</li>
    <li>📸 <strong>Media & Gallery</strong> – Photos, video content, or media features showcasing public appearances or work environment.</li>
    <li>📰 <strong>News or Blog Section</strong> – A space for sharing updates, medical articles, or health tips.</li>
    <li>📞 <strong>Contact Page</strong> – Includes a contact form, Google Maps location, email address, phone number, and social media links.</li>
    <li>🌐 <strong>Multilingual Support</strong> – Optional multi-language feature to reach an international audience.</li>
  </ul>

  <h2>🛠️ Technologies Used:</h2>
  <ul>
    <li><strong>Frontend:</strong> HTML, CSS, JavaScript (or frameworks like React.js / Next.js)</li>
    <li><strong>Backend (optional):</strong> Node.js with Express.js, or CMS platforms like WordPress, Strapi, or Sanity</li>
    <li><strong>Styling:</strong> Tailwind CSS, Bootstrap, or custom SCSS</li>
    <li><strong>Hosting:</strong> Vercel, Netlify, or traditional web hosting services</li>
    <li><strong>Extras:</strong> SEO Optimization, Responsive Design, and Accessibility Compliance</li>
  </ul>

  <h2>👥 Target Audience:</h2>
  <ul>
    <li>New and existing patients seeking information</li>
    <li>Medical professionals and potential collaborators</li>
    <li>Press and media representatives</li>
    <li>Healthcare organizations and academic institutions</li>
  </ul>

  <h2>🚀 Project Goals:</h2>
  <ul>
    <li>Establish a trusted and modern online presence for Dr. Kai Lee.</li>
    <li>Communicate services, credentials, and philosophy clearly.</li>
    <li>Improve patient engagement and accessibility through online contact options.</li>
    <li>Build brand recognition and digital authority in the medical field.</li>
  </ul>`,
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
    project_date: ` <p>
    The <strong>Admin Panel for Dr. Kai Lee</strong> is a secure and user-friendly dashboard system that allows administrators and authorized staff to manage content, monitor activity, and oversee key operations on the main website. 
    This panel provides full control over data such as patient inquiries, blog articles, services, media, and more.
  </p>
  <p>
    It is designed with efficiency, security, and usability in mind to ensure smooth backend management without technical complexity.
  </p>

  <h2>🎯 Key Features:</h2>
  <ul>
    <li>🔐 <strong>Secure Admin Login</strong> – Authentication system with role-based access (e.g., Admin, Editor).</li>
    <li>📄 <strong>Content Management</strong> – Easily manage About Page, Services, Achievements, and Media Gallery.</li>
    <li>✍️ <strong>Blog Post Management</strong> – Create, edit, publish, or delete blog articles.</li>
    <li>📥 <strong>Contact Submissions</strong> – View and respond to contact form submissions or appointment requests.</li>
    <li>📊 <strong>Dashboard Analytics</strong> – View basic traffic stats, form submissions, and activity logs.</li>
    <li>🌐 <strong>Language Manager</strong> – Optional multi-language content support.</li>
    <li>⚙️ <strong>Settings</strong> – Manage social links, SEO meta tags, site configurations, and more.</li>
  </ul>

  <h2>🛠️ Technologies Used:</h2>
  <ul>
    <li><strong>Frontend:</strong> HTML, CSS, JavaScript (React.js or Next.js with Admin Template)</li>
    <li><strong>Backend:</strong> Node.js + Express.js </li>
    <li><strong>Database:</strong> MongoDB, PostgreSQL</li>
    <li><strong>Authentication:</strong> JWT / OAuth</li>
    <li><strong>Dashboard UI:</strong> Tailwind CSS / Material UI / Bootstrap Admin Panel</li>
    <li><strong>Hosting:</strong> Vercel, Heroku, DigitalOcean, or Firebase Hosting</li>
  </ul>

  <h2>👥 Target Users:</h2>
  <ul>
    <li>Dr. Kai Lee and personal administrative staff</li>
    <li>Content editors and marketing team</li>
    <li>Clinic managers and support staff</li>
  </ul>

  <h2>🚀 Project Goals:</h2>
  <ul>
    <li>Enable non-technical users to manage the website content effectively.</li>
    <li>Provide a centralized system for patient inquiries and service updates.</li>
    <li>Enhance security and control over website operations.</li>
    <li>Support growth with scalability and performance optimization.</li>
  </ul>`,
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
    project_details: ` <p>
    The <strong>Comic List</strong> is a responsive and interactive web application that allows users to explore, search, and manage a collection of comic books. Built using modern web technologies, the app provides an intuitive user experience for comic enthusiasts to browse by genre, author, title, or publisher using a fast and efficient GraphQL API.
  </p>
  <p>
    The main goal of this project is to deliver a high-performance, user-friendly platform for accessing and organizing comics, whether for casual readers or collectors.
  </p>

  <h2>🎯 Key Features:</h2>
  <ul>
    <li>📚 Browse a dynamic list of comics with cover images and key details.</li>
    <li>🔍 Filter and search comics by title, author, or category.</li>
    <li>📖 View detailed pages for each comic including synopsis, release date, and author info.</li>
    <li>🗂️ Favorite or bookmark comics for later reading.</li>
    <li>⚡ Fast data retrieval using GraphQL queries.</li>
    <li>📱 Responsive design for desktop, tablet, and mobile devices.</li>
  </ul>

  <h2>🛠️ Tech Stack:</h2>
  <ul>
    <li><strong>Frontend:</strong> ReactJS with TypeScript</li>
    <li><strong>Markup & Styling:</strong> HTML, CSS (or Tailwind CSS / Styled Components)</li>
    <li><strong>Data Layer:</strong> GraphQL (Apollo Client)</li>
    <li><strong>State Management:</strong> React Context API or Apollo Cache</li>
    <li><strong>Optional Backend:</strong> GraphQL Server (Node.js / Hasura / GraphCMS)</li>
  </ul>

  <h2>👥 Target Users:</h2>
  <ul>
    <li>Comic book readers and collectors</li>
    <li>Fans of digital storytelling and art</li>
    <li>Users looking to organize and track their comic reading lists</li>
  </ul>

  <h2>🚀 Project Goals:</h2>
  <ul>
    <li>Deliver a high-performance, scalable comic browsing experience.</li>
    <li>Leverage GraphQL for efficient and flexible data fetching.</li>
    <li>Implement clean UI/UX design using modern web standards.</li>
    <li>Provide a base that can be expanded into a larger comic or media tracking platform.</li>
  </ul>`,
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
    project_details: ` <p>
    The <strong>Admin Panel CMS</strong> is a robust and scalable content management system designed to manage digital assets including comics, novels, and films.
    Built for performance and maintainability, the system enables content creators and administrators to manage catalogs, publish content, organize metadata, and handle media assets all in one place.
  </p>
  <p>
    With a focus on performance, developer experience, and modern web standards, this CMS is powered by a monorepo architecture using Turbopack and designed to scale with production needs.
  </p>

  <h2>🎯 Key Features:</h2>
  <ul>
    <li>🗂️ <strong>Content Manager</strong> – Create, update, and categorize comics, novels, and films with tags, genres, and status.</li>
    <li>📦 <strong>Media Upload</strong> – Upload cover images, banners, and video trailers via secure endpoints.</li>
    <li>🧠 <strong>React Context API</strong> – Global state management for UI and session handling.</li>
    <li>🔍 <strong>Search & Filter</strong> – Filter content by category, release status, popularity, and update date.</li>
    <li>🌐 <strong>SEO & Slugs</strong> – Auto-generate readable and optimized URLs for content details.</li>
    <li>📊 <strong>Dashboard Overview</strong> – Visual stats on active content, uploads, and user actions.</li>
    <li>🛡️ <strong>Authentication</strong> – Role-based access for admin, editor, and viewer roles.</li>
  </ul>

  <h2>🛠️ Technology Stack:</h2>
  <ul>
    <li><strong>Frontend Framework:</strong> <code>Next.js</code> with <code>TypeScript</code></li>
    <li><strong>Styling:</strong> <code>Tailwind CSS</code>, <code>SASS</code>, and <code>CSS Modules</code></li>
    <li><strong>State Management:</strong> <code>React Context API</code></li>
    <li><strong>Data Handling:</strong> <code>Axios</code> for RESTful API communication</li>
    <li><strong>Build System:</strong> <code>Monorepo</code> with <code>Turbopack</code> for efficient bundling and dev performance</li>
    <li><strong>Hosting:</strong> Deployed on a dedicated <code>VPS</code> with <code>NGINX</code> as a reverse proxy</li>
  </ul>

  <h2>🚀 Project Goals:</h2>
  <ul>
    <li>Provide a clean and responsive admin dashboard to manage multiple content types.</li>
    <li>Optimize deployment and development using monorepo and Turbopack.</li>
    <li>Implement scalable frontend architecture using Next.js + TypeScript.</li>
    <li>Ensure fast, secure, and SEO-friendly content management.</li>
  </ul>

  <h2>👥 Target Users:</h2>
  <ul>
    <li>Content editors and curators for comics, novels, and films</li>
    <li>Media publishers managing digital libraries</li>
    <li>Admin teams for online reading or streaming platforms</li>
  </ul>`,
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
    project_details: `<p>
    <strong>Tutureels</strong> is a mobile content application that offers users a rich and immersive experience for discovering, reading, and watching curated content across three categories: movies, films, and novels.
    Designed for storytelling enthusiasts, the app allows users to explore a wide library of visual and written narratives from various genres and cultures.
  </p>
  <p>
    The app is developed using <strong>React Native</strong> and powered by <strong>Expo</strong> for rapid cross-platform development, making it accessible on both Android and iOS devices with a smooth and responsive UI.
  </p>

  <h2>🎯 Core Features:</h2>
  <ul>
    <li>🎬 <strong>Movie & Film Catalog</strong> – Browse trailers, watch content (if allowed), and read synopses.</li>
    <li>📖 <strong>Novel Library</strong> – Read digital novels with adjustable text size, night mode, and bookmarks.</li>
    <li>🔍 <strong>Search & Filter</strong> – Find content by genre, title, author, director, or release year.</li>
    <li>❤️ <strong>Favorites & Watchlist</strong> – Save content for later and manage your personal list.</li>
    <li>🧠 <strong>Recommendations</strong> – AI-powered or curated suggestions based on user behavior or preferences.</li>
    <li>🌐 <strong>Offline Access</strong> – Optional feature to download and read novels offline.</li>
  </ul>

  <h2>🛠️ Tech Stack:</h2>
  <ul>
    <li><strong>Framework:</strong> React Native</li>
    <li><strong>Development Platform:</strong> Expo</li>
    <li><strong>Backend (optional):</strong> Firebase / Node.js + Express</li>
    <li><strong>Database:</strong> Firestore / SQLite / Supabase</li>
    <li><strong>API:</strong> TMDB API, Google Books API, or custom CMS</li>
    <li><strong>Authentication:</strong> Firebase Auth or OAuth providers (Google, Facebook)</li>
  </ul>

  <h2>👥 Target Users:</h2>
  <ul>
    <li>Entertainment enthusiasts who enjoy both films and literature</li>
    <li>Mobile readers looking for lightweight novel-reading apps</li>
    <li>Users looking for content curation in a single app experience</li>
  </ul>

  <h2>🚀 Project Goals:</h2>
  <ul>
    <li>Deliver a multi-format content experience in one mobile app.</li>
    <li>Offer a scalable and visually rich user interface using React Native.</li>
    <li>Leverage Expo for fast iteration and easier deployment across platforms.</li>
    <li>Integrate APIs to serve up-to-date movie and book content dynamically.</li>
  </ul>`,
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
