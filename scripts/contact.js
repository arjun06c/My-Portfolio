const media = document.querySelector('.contact-media');

const contactList = [
  {
    id: 1,
    icon: 'ph ph-phone-call',
    name: 'Phone',
    value: '+123 456 7890',
    href: 'tel:+1234567890'
  },
  {
    id: 2,
    icon: 'ph ph-envelope',
    name: 'Email',
    value: 'arjun.c@gmail.com',
    href: 'mailto:arjun.c@gmail.com'
  },
  {
    id: 3,
    icon: 'ph ph-map-pin',
    name: 'Address',
    value: 'Madurai, Tamil Nadu, India',
    href: 'https://www.google.com/maps'
  }
];

if (media) {
  media.innerHTML = contactList.map(ele => `
    <div class="media">
      <span>
        <i class="${ele.icon}"></i>
      </span>
      <div class="contact-value">
        <p>${ele.name}</p>
        <a href="${ele.href}" target="_blank">${ele.value}</a>
      </div>
    </div>
  `).join("");
}
