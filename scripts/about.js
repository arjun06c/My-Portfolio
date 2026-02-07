// ================= TAB SELECTION =================
const aboutTabs = document.querySelectorAll(".tab");
const aboutContents = document.querySelectorAll(".tab-content");

aboutTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    // remove active class from all tabs & contents
    aboutTabs.forEach((a) => a.classList.remove("active"));
    aboutContents.forEach((c) => c.classList.remove("active"));

    // activate clicked tab
    tab.classList.add("active");
    const activeTab = tab.dataset.section;
    const target = document.getElementById(activeTab);

    if (target) {
      target.classList.add("active");
    }

    // ================= EXPERIENCE =================
   if (activeTab === "experience") {
  const experiences = document.querySelector(".experience-list");

  const experienceList = [
    {
      id: 1,
      Date: "2024 - Present",
      role: "Frontend Web Developer (Academic Projects)",
      company: "College & Personal Projects",
      details:
        "Designed and developed responsive web interfaces using HTML, CSS, and JavaScript. Built portfolio websites and interactive UI components as part of academic and personal projects."
    },
    {
      id: 2,
      Date: "2023 - Present",
      role: "Web Development Learner",
      company: "Self Learning & Coursework",
      details:
        "Learning and practicing web development through coursework, online resources, and hands-on projects."
    }
  ];

  if (experiences) {
    experiences.innerHTML = experienceList
      .map(
        (ele) => `
          <div class="experience-box">
            <h4>${ele.Date}</h4>
            <h3>${ele.role}</h3>
            <div class="company-name">
              <span></span>
              <p>${ele.company}</p>
            </div>
            <p>${ele.details}</p>
          </div>
        `
      )
      .join("");
  }
}

// ================= EDUCATION =================
else if (activeTab === "education") {
  const education = document.querySelector(".education-list");

  const educationList = [
    {
      id: 1,
      Date: "2023 - 2027",
      degree: "B.Tech – Computer Technology",
      institution: "Bannari Amman Institute of Technology, Erode",
      details:
        "Pursuing Computer Technology with a focus on programming, web development, data structures, and software fundamentals."
    },
    {
      id: 2,
      Date: "2022 - 2023",
      degree: "Higher Secondary Education (12th Standard) – Bio Maths",
      institution: "Government Madurai Model School, Madurai",
      percentage: "89.83%",
      details:
        "Completed higher secondary education with Bio-Maths group and strengthened analytical and problem-solving skills."
    }
  ];

  if (education) {
    education.innerHTML = educationList
      .map(
        (ele) => `
          <div class="experience-box">
            <h4>${ele.Date}</h4>
            <h3>${ele.degree}</h3>

            <div class="company-name">
              <span></span>
              <p>${ele.institution}</p>
            </div>

            ${
              ele.percentage
                ? `<span class="edu-score">Score: ${ele.percentage}</span>`
                : ""
            }

            <p>${ele.details}</p>
          </div>
        `
      )
      .join("");
  }
} // ✅ THIS WAS MISSING

   // ================= SKILLS =================
else if (activeTab === "skills") {
  const skills = document.querySelector(".skill-list");

  const skillsList = [
    { id: 1, name: "HTML", icon: "assets/skills/html.png" },
    { id: 2, name: "CSS", icon: "assets/skills/css.png" },
    { id: 3, name: "JavaScript", icon: "assets/skills/js.png" },
    { id: 4, name: "React", icon: "assets/skills/react.png" },
    { id: 5, name: "MongoDB", icon: "assets/skills/mongodb.png" },
    { id: 6, name: "Node.js", icon: "assets/skills/node.png" },
        { id: 7, name: "Java", icon: "assets/skills/java.png" },
         { id: 8, name: "MySQL", icon: "assets/skills/Sql.webp" },
          { id: 9, name: "TailWind CSS", icon: "assets/skills/tailwind.png" },
           { id: 10, name: "Express js", icon: "assets/skills/Express.webp" },
            { id: 11, name: "C program", icon: "assets/skills/c.webp" }

  ];

  if (skills) {
    skills.innerHTML = skillsList
      .map(
        (ele) => `
          <div class="skill-box">
            <img src="${ele.icon}" alt="${ele.name}">
            <span class="skill-name">${ele.name}</span>
          </div>
        `
      )
      .join("");
  }
}


    // ================= ABOUT ME =================
    else if (activeTab === "about-me") {
      const myInfo = document.querySelector(".my-info");

      const infoList = [
        { id: 1, key: "Name :", value: "Arjun C" },
        { id: 2, key: "Role :", value: "Full Stack Developer" },
        { id: 3, key: "Email :", value: "arjun06c@gmail.com" },
        { id: 4, key: "Location :", value: "Madurai" }
      ];

      if (myInfo) {
        myInfo.innerHTML = infoList
          .map(
            (ele) => `
            <div class="info-box">
              <span>${ele.key}</span>
              <span>${ele.value}</span>
            </div>
          `
          )
          .join("");
      }
    }
  });
});

// ================= DEFAULT TAB LOAD =================
const defaultTab = document.querySelector(
  ".tab[data-section='education']"
);
if (defaultTab) {
  defaultTab.click();
}
