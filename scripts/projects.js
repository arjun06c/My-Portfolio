const projectList = [
  {
    id: 1,
    number: "01",
    title: "Bike rental app",
    details: `An online platform that allows users to browse and rent bikes easily.
It helps bike owners earn money by renting out their unused bikes.`,
    techStack: ["React", "Node.js", "MongoDB"],
    image: "assets/bike.png",
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    number: "02",
    title: "E-commerce website",
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
        <a href="${projectContent.liveLink}">
          <i class="ph ph-arrow-right"></i>
        </a>
        <a href="${projectContent.githubLink}">
          <i class="ph ph-github-logo"></i>
        </a>
      </div>
    </div>

    <div class="carousel">
      <img src="${projectContent.image}" alt="${projectContent.title}" />

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
