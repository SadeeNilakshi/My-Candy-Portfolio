const container = document.getElementById("portfolio");

interface Project {
  title: string;
  description: string;
  github: string;
  image: string;
  type: "Frontend" | "Backend" | "Fullstack";
}

const projects: Project[] = [
   {
    title: "Smart Plant Monitoring System Frontend",
    description: "This is the fontend of my smart Plant monitoring system developed with react native to display readings and other information taken by the sensors in the mobile screen.",
    github: "https://github.com/SadeeNilakshi/Plant-Monitoring-System.git",
    image: "images/candies.png",
    type: "Frontend"
    
  },
   {
    title: "Smart Plant Monitoring System Backend",
    description: "This is the backend of my plant monitoring system developed with Java to take the readings taken from the DHT11 Sensor and Soil Sensor and send them to the frontend.",
    github: "https://github.com/SadeeNilakshi/Plant-Monitoring-System-Backend.git",
    image: "images/truffle.png",
    type: "Backend"
  },
   {
    title: "Smart Plant Monitoring System Program",
    description: "This is the programming part of the system developed using DHT11 Sensor, Soil Moisture Sensor, ESP32 Module and a Buzzer to monitor Humidity and the Temperature of the plant's environtment and the soil moisture level of the plant. Programming part is done with C++ to take the readings and this sends data to the backend.",
    github: "https://github.com/SadeeNilakshi/Plant-Monitoring-Program.git",
    image: "images/candy-cane.png",
    type: "Backend"
  },
  {
    title: "Cute & Cozy E-Commerce Web Application",
    description: "This an E-Commerce web application developed to sell and buy women items with an attractive User Interface and userfriendly functions using PHP, JavaScript & CSS. It is itergrated with payhere payment gateway for secure transactions.",
    github: "https://github.com/SadeeNilakshi/Cute-Cozy-E-Commerce-Web.git",
    image: "images/gummy-bear.png",
    type: "Fullstack"

  },
  {
    title: "Re-Book Android Application",
    description: "This is an android application developed with Java and android technology to buy and sell books that are re-usable. It is developed with advanced and user firendly functions.Payhere payment gateway is used for transaction functions. Firebase is used for data storing.",
    github: "https://github.com/SadeeNilakshi/Re-Book-Android-Application.git",
    image: "images/lollipop.png",
    type: "Fullstack"
  },
  {
    title: "Re-Book Admin Android Application",
    description: "This application is developed with Java as the admin application to manage users, books and other functions of the Re-Book user application which is developed to buy and sell re-usable books.",
    github: "https://github.com/SadeeNilakshi/Re-Book-Admin-App.git",
    image: "images/sweets.png",
    type: "Fullstack"
  },
  {
    title: "Kiddie-Kart E-Commerce Web Application",
    description: "This web application is developed with Java, JavaScript and CSS to buy and sell kids items. It is developed with userfriendly interfaces and functions. Also it is intergrated with payhere payment gateway for secure transactions.",
    github: "https://github.com/SadeeNilakshi/KiddieKart-E-commerce-Web.git",
    image: "images/candy_4.png",
    type: "Fullstack"

  },
  {
    title: "Text-It Chat Application Frontend",
    description: "This is a chat application developed with Reactnative and a dark themed User Interfaces.",
    github: "https://github.com/SadeeNilakshi/TextIt-Chat-App-Frontend.git",
    image: "images/toffee.png",
    type: "Frontend"
  },
  {
    title: "Text-It Chat Application Backend",
    description: "This is the backend of the chat application developed with Java to handle functions and users.",
    github: "https://github.com/SadeeNilakshi/TextIt-Chat-App-Backend.git",
    image: "images/candy_3.png",
    type: "Backend"
  },

  {
    title: "Green Garden Bungalow Web",
    description: "Contributed with front-end engineering of this website & this is a tourism website developed for a hotel that offers accomodations and other services for travellers.",
    github: "https://github.com/SadeeNilakshi/Green-Garden-Bungalow.git",
    image: "images/cotton-candy.png",
    type: "Frontend"
  },
  {
    title: "Gem-Hunt Endless Runner 3D Game",
    description: "This is a 3D endless runner game developed with C# and Unity with userfriendly functions. Player has to collect coins and gems by escaping traps and obstacles to score and win.",
    github: "https://github.com/SadeeNilakshi/Gem_Hunt.git",
    image: "images/sweet.png",
    type: "Fullstack"
  },
   {
    title: "My Portfolio Website",
    description: "This website is developed with PHP and Javascript with attractive User Interfaces that displays my skills and projects I have done.",
    github: "https://github.com/SadeeNilakshi/My-Portfolio-Web.git",
    image: "images/candy.png",
    type: "Fullstack"
  },
  {
    title: "Distributed Auction System",
    description: "This is a Real-time online auction system using Java EE, EJB, JMS and Payara.",
    github: "https://github.com/SadeeNilakshi/Distributed-Auction-System.git",
    image: "images/candy_.png",
    type: "Fullstack"
  },
  {
    title: "Android Note Book App",
    description: "This is a small note book application developed with Java with an attractive user interface and functions.",
    github: "https://github.com/SadeeNilakshi/Android-Note-Book-App.git",
    image: "images/heart_toffee.png",
    type: "Fullstack"
  },
  {
    title: "Robotic Research Center Portfolio",
    description: "This is developed as a portfolio web for the Research Center Model developed with my team members as a University Assignment.",
    github: "https://github.com/SadeeNilakshi/Robotic-Research-Center-Portfolio.git",
    image: "images/candy-cane-bow.png",
    type: "Frontend"
  },
  {
    title: "My Calculator",
    description: "This is a calculator developed using Java with all mathematical functions.",
    github: "https://github.com/SadeeNilakshi/My-Calculater.git",
    image: "images/lollipop_2.png",
    type: "Fullstack"
  },
  {
    title: "2D Game",
    description: "This is a small 2D Game developed with Javascript.",
    github: "https://github.com/SadeeNilakshi/2D-Game.git",
    image: "images/toffee_5.png",
    type: "Fullstack"
  },
  {
    title: "Tranquil Terrace Hotel Management System",
    description: "Collaborated with developing this  inventory syetem developed for a fully functoned hotel management system to manage all the functions and sections of a hotel. This is developed with Java.",
    github: "https://github.com/SadeeNilakshi/Tranquil-Terrace-Hotel-Project.git",
    image: "images/happy.png",
    type: "Fullstack"
  }
];

// 🍬 Render Projects
function renderProjects(filtered: Project[] = projects): void {
  if (!container) return;
  container.innerHTML = "";

  filtered.forEach(project => {
    const jar = document.createElement("div");
    jar.className = "candy-jar";

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title;

    const info = document.createElement("div");
    info.className = "jar-info";
    info.innerHTML = `
      <p>${project.description}</p>
      <a href="${project.github}" target="_blank">🍭 GitHub</a>
    `;

    jar.appendChild(img);
    jar.appendChild(title); // Title under image
    jar.appendChild(info);
    container.appendChild(jar);
  });
}

// 🍭 Filter Projects (make global)
(window as any).filterProjects = function(type: string) {
  if (type === "All") {
    renderProjects();
  } else {
    const filtered = projects.filter(p => p.type === type);
    renderProjects(filtered);
  }
};

// ✨ Sparkle Effect
function createSparkle(): void {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 5000);
}

setInterval(createSparkle, 300);

// 🍬 Floating Candy Emojis
function createFloatingCandy(): void {
  const emojis = ["🍭", "🍬", "🍫", "🍡"];
  const candy = document.createElement("div");
  candy.className = "floating-candy";
  candy.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  candy.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(candy);

  setTimeout(() => candy.remove(), 8000);
}

setInterval(createFloatingCandy, 600);

// 🍓 Initial render
renderProjects();

































// const container = document.getElementById("portfolio");

// interface Project {
//   title: string;
//   description: string;
//   github: string;
//   image: string;
//   type: "Frontend" | "Backend" | "Fullstack";
// }

// const projects: Project[] = [
//   {
//     title: "Candy Cart UI",
//     description: "A sweet shopping cart built with HTML/CSS.",
//     github: "https://github.com/your-username/project1",
//     image: "images/candy1.png",
//     type: "Frontend"
//   },
//   {
//     title: "Gummy API",
//     description: "Backend API for handling gummy orders.",
//     github: "https://github.com/your-username/project2",
//     image: "images/candy2.png",
//     type: "Backend"
//   },
//   {
//     title: "Lollipop Shop",
//     description: "A fullstack candy e-commerce site.",
//     github: "https://github.com/your-username/project3",
//     image: "images/candy3.png",
//     type: "Fullstack"
//   }
// ];


// function renderProjects(filtered: Project[] = projects): void {
//   if (!container) return;
//   container.innerHTML = "";

//   filtered.forEach(project => {
//     const jar = document.createElement("div");
//     jar.className = "candy-jar";

//     const img = document.createElement("img");
//     img.src = project.image;
//     img.alt = project.title;

//     const title = document.createElement("h3");
//     title.className = "project-title";
//     title.textContent = project.title;

//     const info = document.createElement("div");
//     info.className = "jar-info";
//     info.innerHTML = `
//       <p>${project.description}</p>
//       <a href="${project.github}" target="_blank">🍭 GitHub</a>
//     `;

//     jar.appendChild(img);
//     jar.appendChild(title);
//     jar.appendChild(info);
//     container.appendChild(jar);
//   });
// }


// (window as any).filterProjects = function(type: string) {
//   if (type === "All") {
//     renderProjects();
//   } else {
//     const filtered = projects.filter(p => p.type === type);
//     renderProjects(filtered);
//   }
// };

// function createSparkle(): void {
//   const sparkle = document.createElement("div");
//   sparkle.className = "sparkle";
//   sparkle.style.left = Math.random() * window.innerWidth + "px";
//   sparkle.style.top = Math.random() * window.innerHeight + "px";
//   document.body.appendChild(sparkle);

//   setTimeout(() => sparkle.remove(), 5000);
// }

// setInterval(createSparkle, 300);


// function createFloatingCandy(): void {
//   const emojis = ["🍭", "🍬", "🍫", "🍡"];
//   const candy = document.createElement("div");
//   candy.className = "floating-candy";
//   candy.textContent = emojis[Math.floor(Math.random() * emojis.length)];
//   candy.style.left = Math.random() * window.innerWidth + "px";
//   document.body.appendChild(candy);

//   setTimeout(() => candy.remove(), 8000);
// }

// setInterval(createFloatingCandy, 600);


// renderProjects();

