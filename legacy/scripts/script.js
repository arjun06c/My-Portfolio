const toggle = document.getElementById('menu-toggle');

/* ---------- MENU SCROLL FIX ---------- */
if (toggle && toggle.checked) {
  document.body.classList.add("no-scroll");
} else {
  document.body.classList.remove("no-scroll");
}

/* ---------- NAV & TAB LOGIC ---------- */
const navLinks = document.querySelectorAll('.nav-link');
const tabs = document.querySelectorAll('.content');

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Active nav
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // Tab switch
    const tabName = link.dataset.tab;
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      if (tab.id === tabName) {
        tab.classList.add("active");
      }
    });

    /* ---------- SERVICES TAB ---------- */
    if (tabName === "services") {

      const serviceList = [
        {
          id: 1,
          icon: "ph-layout",
          text: "Frontend Development",
          para: "I develop responsive, accessible, and high-performance user interfaces using modern frontend technologies."
        },
        {
          id: 2,
          icon: "ph-database",
          text: "Backend Development",
          para: "I build secure server-side logic, REST APIs, and database integrations for scalable web applications."
        },
        {
          id: 3,
          icon: "ph-stack",
          text: "Full Stack Development",
          para: "I deliver complete end-to-end web solutions by combining frontend and backend technologies."
        },
        {
          id: 4,
          icon: "ph-plug",
          text: "API Integration",
          para: "I integrate third-party and custom APIs to enable seamless communication between services."
        },
        {
          id: 5,
          icon: "ph-gauge",
          text: "Performance Optimization",
          para: "I optimize websites for faster load times, better responsiveness, and improved user experience."
        },
        {
          id: 6,
          icon: "ph-wrench",
          text: "Website Maintenance",
          para: "I maintain, update, debug, and enhance existing websites to keep them secure and up to date."
        }
      ];

      const services1 = document.querySelector('.service-list');

      const innerContent = serviceList.map((l) => {
        return `
          <div class="box" key="${l.id}">
            <div class="head-icons">
              <i class="ph ${l.icon}"></i>
              <span>
                <i class="ph ph-arrow-down-right"></i>
              </span>
            </div>

            <h3>${l.text}</h3>
            <span class="spacer"></span>
            <p>${l.para}</p>
          </div>
        `;
      }).join("");

      services1.innerHTML = innerContent;
    }

    // Close menu after click
    toggle.checked = false;
    document.body.classList.remove("no-scroll");
  });
});
