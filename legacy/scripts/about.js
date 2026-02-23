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

            ${ele.percentage
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
      const skillsContainer = document.querySelector(".skill-list");

      const skillsData = [
        {
          category: "Frontend Development",
          skills: [
            { name: "HTML", icon: "assets/skills/html.png" },
            { name: "CSS", icon: "assets/skills/css.png" },
            { name: "JavaScript", icon: "assets/skills/js.png" },
            { name: "React", icon: "assets/skills/react.png" },
            { name: "Tailwind CSS", icon: "assets/skills/Tailwind.png" },
            { name: "Vite", icon: "https://vitejs.dev/logo.svg" } // Using external logo for missing icon
          ]
        },
        {
          category: "Backend Development",
          skills: [
            { name: "Node.js", icon: "assets/skills/node.png" },
            { name: "Express.js", icon: "assets/skills/Express.webp" }
          ]
        },
        {
          category: "Database",
          skills: [
            { name: "MongoDB", icon: "assets/skills/mongodb.png" },
            { name: "MySQL", icon: "assets/skills/Sql.webp" }
          ]
        },
        {
          category: "Programming Languages",
          skills: [
            { name: "Java", icon: "assets/skills/Java.png" },
            { name: "C", icon: "assets/skills/c.webp" }
          ]
        },
        {
          category: "Tools & Technologies",
          skills: [
            { name: "Git", icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
            { name: "GitHub", icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
            { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
            { name: "VS Code", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
            { name: "npm", icon: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" }
          ]
        }
      ];

      if (skillsContainer) {
        skillsContainer.innerHTML = skillsData
          .map(
            (group) => `
          <div class="skill-category">
            <h3 class="category-title">${group.category}</h3>
            <div class="category-grid">
              ${group.skills
                .map(
                  (skill) => `
                  <div class="skill-box">
                    <img src="${skill.icon}" alt="${skill.name}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/1168/1168801.png'">
                    <span class="skill-name">${skill.name}</span>
                  </div>
                `
                )
                .join("")}
            </div>
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
