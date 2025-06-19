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
    title: "Candy Cart UI",
    description: "A sweet shopping cart built with HTML/CSS.",
    github: "https://github.com/your-username/project1",
    image: "images/candy1.png",
    type: "Frontend"
  },
  {
    title: "Gummy API",
    description: "Backend API for handling gummy orders.",
    github: "https://github.com/your-username/project2",
    image: "images/candy2.png",
    type: "Backend"
  },
  {
    title: "Lollipop Shop",
    description: "A fullstack candy e-commerce site.",
    github: "https://github.com/your-username/project3",
    image: "images/candy3.png",
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

