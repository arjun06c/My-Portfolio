const projectList = [
  {
    id: 1,
    number: "01",
    title: "Faculty Workload Optimization System",
    details: `A smart web application that automatically balances faculty workload.
It assigns subjects based on availability, department, and total assigned hours.
The system prevents schedule clashes and ensures fair workload distribution.`,
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    image: "assets/faculty.png",  // Make sure this image exists
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    number: "02",
    title: "Bike Rental App",
    details: `An online platform that allows users to browse and rent bikes easily.
It helps bike owners earn money by renting out their unused bikes.`,
    techStack: ["React", "Node.js", "MongoDB"],
    image: "assets/bike.png",
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    number: "03",
    title: "E-commerce Website",
    details: `An online shopping website where users can browse products and place orders.
Designed with a clean and responsive interface for a smooth user experience.`,
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "assets/projects/project2.webp",
    liveLink: "#",
    githubLink: "#"
  }
];

const projects = document.querySelector(".projects");
let currentIndex = 0;

const renderProject = (index) => {
  const projectContent = projectList[index];

  const previousDisabled = currentIndex === 0;
  const nextDisabled = currentIndex === projectList.length - 1;

  projects.innerHTML = `
    <div class="project-info">
      <h3>${projectContent.number}</h3>
      <h4>${projectContent.title}</h4>
      <p>${projectContent.details}</p>

      <div class="tech-stack">
        ${projectContent.techStack
          .map(tech => `<span>${tech}</span>`)
          .join("")}
      </div>

      <hr/>

      <div class="links">
        <a href="${projectContent.liveLink}" target="_blank">
          <i class="ph ph-arrow-right"></i>
        </a>
        <a href="${projectContent.githubLink}" target="_blank">
          <i class="ph ph-github-logo"></i>
        </a>
      </div>
    </div>

    <div class="carousel">
      <div class="carousel-img-container">
        <img src="${projectContent.image}" alt="${projectContent.title}" />
      </div>

      <div class="arrows">
        <a href="#" id="previous" class="${previousDisabled ? "disabled-btn" : ""}">
          <i class="ph ph-caret-left"></i>
        </a>

        <a href="#" id="next" class="${nextDisabled ? "disabled-btn" : ""}">
          <i class="ph ph-caret-right"></i>
        </a>
      </div>
    </div>
  `;

  const prevBtn = document.getElementById("previous");
  const nextBtn = document.getElementById("next");

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentIndex > 0) {
      currentIndex--;
      renderProject(currentIndex);
    }
  });

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentIndex < projectList.length - 1) {
      currentIndex++;
      renderProject(currentIndex);
    }
  });
};

renderProject(currentIndex);