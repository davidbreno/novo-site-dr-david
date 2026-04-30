const templateProjects = [
  {
    title: "Prestige",
    category: "Editorial",
    label: "Soft Stories",
    image:
      "https://framerusercontent.com/images/7tAlfURMv8DKcN53039NTPEywbc.jpg?width=1856&height=2464",
  },
  {
    title: "Norma",
    category: "Photography",
    label: "Silver Matter",
    image:
      "https://framerusercontent.com/images/ve4aMfDpxAp9zlDIvovWAnBtxEY.jpg?width=1856&height=2464",
  },
  {
    title: "La Forge",
    category: "Creative Direction",
    label: "Amber Glace",
    image:
      "https://framerusercontent.com/images/ISqwR11x7FwiowhnfP4ePoNF5Q.jpg?width=1856&height=2464",
  },
  {
    title: "DTX",
    category: "Campaign",
    label: "White Bloom",
    image:
      "https://framerusercontent.com/images/pYgVjqwrMeHhPExnFVnLfsG7xeA.jpg?width=1856&height=2464",
  },
  {
    title: "Resono",
    category: "Advertising",
    label: "Desert Pulse",
    image:
      "https://framerusercontent.com/images/8dBJLFLtAUCc3q3KJgcQeaP269s.jpg?width=1856&height=2464",
  },
  {
    title: "Ovid",
    category: "Design",
    label: "Bold Flowers",
    image:
      "https://framerusercontent.com/images/8dBJLFLtAUCc3q3KJgcQeaP269s.jpg?width=1856&height=2464",
  },
  {
    title: "Tundra",
    category: "Art Direction",
    label: "River Touch",
    image:
      "https://framerusercontent.com/images/nztX6NdrywQHVYEkxt5tJgSkgI.jpg?width=1856&height=2464",
  },
  {
    title: "The Common",
    category: "Photography",
    label: "Surface Drift",
    image:
      "https://framerusercontent.com/images/fyVzKfp4DOxCqqFMSo3k0ZGv08E.jpg?width=1856&height=2464",
  },
  {
    title: "Surge",
    category: "Campaign",
    label: "Bubble Realm",
    image:
      "https://framerusercontent.com/images/aTvYKZsMIh1BrH6QKm0IwTOYeA.jpg?width=1856&height=2464",
  },
  {
    title: "Earth & Ash",
    category: "Product Design",
    label: "Stone Forms",
    image:
      "https://framerusercontent.com/images/bEGzkYgate77b9aPl215KkhzcE.jpg?width=1856&height=2464",
  },
  {
    title: "Ares",
    category: "Editorial",
    label: "Yellow Motion",
    image:
      "https://framerusercontent.com/images/VvbYONaVgtzV4IalhGgqLaGbyUo.jpg?width=1856&height=2464",
  },
  {
    title: "Rash",
    category: "Identity",
    label: "Flora Merge",
    image:
      "https://framerusercontent.com/images/wXISuvkWM8B2xddhLBxu4YPsY.jpg?width=1856&height=2464",
  },
  {
    title: "Ember",
    category: "Photography",
    label: "Night Play",
    image:
      "https://framerusercontent.com/images/eEBaI9GkxMBontSOuMW3pcUFR0.jpg?width=1856&height=2464",
  },
  {
    title: "Sudmark",
    category: "Personal",
    label: "Analogue",
    image:
      "https://framerusercontent.com/images/xPsUtZ2EfRL1Rm4G3GtBG7RUEhk.jpg?width=1856&height=2464",
  },
  {
    title: "Kunsthaus",
    category: "Catalogue",
    label: "Daily Icons",
    image:
      "https://framerusercontent.com/images/GbB5jONUALUSFmLtDkIxF1WqA.jpg?width=1856&height=2464",
  },
  {
    title: "Kraften",
    category: "Art Direction",
    label: "Sonic Line",
    image:
      "https://framerusercontent.com/images/x2nMEwnC4v4jQ98cnN5QABTCA.jpg?width=1856&height=2464",
  },
  {
    title: "Socrates",
    category: "Design",
    label: "Close Faces",
    image:
      "https://framerusercontent.com/images/rjSQCkTlqM9ZEuyYpHitRVCcd1s.jpg?width=1856&height=2464",
  },
  {
    title: "Kindred",
    category: "Editorial",
    label: "Close Sculptures",
    image:
      "https://framerusercontent.com/images/dz2ae6M7aWYIkFsy5X7tLaPE.jpg?width=1856&height=2464",
  },
  {
    title: "047x",
    category: "Advertising",
    label: "Green Future",
    image:
      "https://framerusercontent.com/images/ASMcmKizCnmGYvDbhCzIztqmXY.jpg?width=1856&height=2464",
  },
  {
    title: "Somira",
    category: "Film Direction",
    label: "Dream Sand",
    image:
      "https://framerusercontent.com/images/jEqGcuXtCNWLOtUwFEQfXgjHs.jpg?width=1856&height=2464",
  },
];

const projects = Array.from({ length: 30 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    title: `Foto ${number}`,
    category: "Portfolio",
    label: `Imagem ${number}`,
    image: `imgs-site/foto-${number}.jpg`,
  };
});

const list = document.querySelector("#projectList");
const grid = document.querySelector("#projectGrid");
const motionGallery = document.querySelector("#motionGallery");
const previewImage = document.querySelector("#previewImage");
let scrollFrame = null;

function projectUrl(project) {
  return `#${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function setPreview(project) {
  previewImage.style.opacity = "0";
  window.setTimeout(() => {
    previewImage.src = project.image;
    previewImage.alt = `${project.title} ${project.label}`;
    previewImage.style.opacity = "1";
  }, 90);
}

function createListItem(project) {
  const item = document.createElement("a");
  item.className = "project-link";
  item.href = projectUrl(project);
  item.innerHTML = `<span class="project-title">${project.title}</span><span class="project-category">${project.category}</span>`;
  item.addEventListener("mouseenter", () => setPreview(project));
  item.addEventListener("focus", () => setPreview(project));
  return item;
}

function createGridItem(project) {
  const card = document.createElement("a");
  card.className = "grid-card";
  card.href = projectUrl(project);
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title} ${project.label}" loading="lazy">
    <div class="grid-meta">
      <span>${project.title}</span>
      <span>${project.label}</span>
    </div>
  `;
  card.addEventListener("mouseenter", () => setPreview(project));
  card.addEventListener("focus", () => setPreview(project));
  return card;
}

function createMotionColumn(columnProjects, columnIndex) {
  const column = document.createElement("div");
  column.className = "motion-column";
  column.dataset.direction = columnIndex % 2 === 0 ? "up" : "down";
  column.dataset.speed = String(0.28 + columnIndex * 0.04);
  [...columnProjects, ...columnProjects].forEach((project) => {
    const card = document.createElement("div");
    card.className = "motion-card";
    card.innerHTML = `<img src="${project.image}" alt="" loading="eager" decoding="async">`;
    column.appendChild(card);
  });
  return column;
}

function renderMotionGallery() {
  const columnCount = window.matchMedia("(max-width: 680px)").matches
    ? 3
    : window.matchMedia("(max-width: 980px)").matches
      ? 4
      : 5;

  motionGallery.innerHTML = "";

  for (let columnIndex = 0; columnIndex < columnCount; columnIndex += 1) {
    const columnProjects = projects.filter((_, index) => index % columnCount === columnIndex);
    motionGallery.appendChild(createMotionColumn(columnProjects, columnIndex));
  }

  updateMotionByScroll();
}

function updateMotionByScroll() {
  const hero = document.querySelector(".hero");
  const maxScroll = Math.max(1, hero.offsetHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
  const title = document.querySelector(".hero-title");
  const columns = motionGallery.querySelectorAll(".motion-column");
  const reveal = Math.min(1, Math.max(0, (progress - 0.11) / 0.18));
  const titleFade = Math.min(1, Math.max(0, progress / 0.18));

  motionGallery.style.opacity = String(reveal);
  title.style.opacity = String(1 - titleFade);
  title.style.transform = `translate3d(0, ${progress * -90}px, 0)`;

  columns.forEach((column) => {
    const loopHeight = column.scrollHeight / 2;
    const speed = Number(column.dataset.speed);
    const scroll = Math.max(0, window.scrollY - window.innerHeight * 0.65);
    const shift = (scroll * speed) % loopHeight;
    const y = column.dataset.direction === "up" ? -shift : -loopHeight + shift;
    column.style.transform = `translate3d(0, ${y}px, 0)`;
  });
}

function requestScrollUpdate() {
  if (scrollFrame) {
    return;
  }

  scrollFrame = window.requestAnimationFrame(() => {
    scrollFrame = null;
    updateMotionByScroll();
  });
}

function renderProjects() {
  renderMotionGallery();
  projects.forEach((project) => grid.appendChild(createGridItem(project)));
  setPreview(projects[0]);
}

renderProjects();
window.addEventListener("scroll", requestScrollUpdate, { passive: true });
window.addEventListener("resize", renderMotionGallery);
