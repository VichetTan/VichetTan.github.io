const portfolio = {
  name: "Tan Vichet",
  role: "Senior Full-Stack Engineer.",
  headline: "I build scalable enterprise systems and digital workflows that make complex operations simpler.",
  availability: "Senior Full-Stack Engineer · 6+ years of experience",
  location: "Phnom Penh, Cambodia",
  workIntro: "Enterprise platforms, operational systems, and customer-facing products built across my career.",
  projects: [
    { number: "01", kind: "CAMGSM / 2026", title: "CRM transformation", description: "Delivered Phase 1 of an enterprise CRM in January 2026, automating sales planning, business cases, dynamic approvals, procurement, and customer acceptance. Launched Phase 2 in April 2026 with core Billing System integration. Manual workflow processing time fell by 45%.", tags: ["CRM", "Billing integration", "Workflow automation"], color: "violet", image: "crm.svg", outcome: "45%", outcomeLabel: "less manual workflow time", featured: true },
    { number: "02", kind: "CAMGSM / 2026", title: "Customer refund platform", description: "Designed and deployed a digital refund process in March 2026. Improved approval governance, audit transparency, and financial tracking while accelerating refund dispatch times by 30%.", tags: ["Process design", "Finance", "Auditability"], color: "lime", image: "refund.svg", outcome: "30%", outcomeLabel: "faster refund dispatch" },
    { number: "03", kind: "CAMGSM / SYSTEMS", title: "SIM provisioning at scale", description: "Built an Apache Kafka-based provisioning system for bulk sales of up to 1,000 SIMs simultaneously. Optimized backend queues to keep server performance stable during peak concurrent demand.", tags: ["Apache Kafka", "Backend", "Scalability"], color: "blue", image: "sim.svg", outcome: "1,000", outcomeLabel: "SIMs provisioned simultaneously" },
    { number: "04", kind: "CAMGSM / INTERNAL PLATFORM", title: "Digital product process", description: "Digitized a paper-based approval workflow in a centralized platform for Product Managers, Business Analysts, and Product Owners. Teams saved an average of 12 hours per week on approvals and document tracking.", tags: ["Digital transformation", "Product operations"], color: "orange", image: "process.svg", outcome: "12h", outcomeLabel: "saved each week" },
    { number: "05", kind: "CAMGSM / ENTERPRISE IT", title: "Employee self-service systems", description: "Enhanced ESS workflows with C#, ASP.NET, Angular, and SQL Server. Built APIs and integrations linking CRM, ESS, databases, billing systems, and third-party enterprise services.", tags: ["ASP.NET", "Angular", "SQL Server"], color: "violet", image: "ess.svg", outcome: "ESS", outcomeLabel: "connected employee workflows" },
    { number: "06", kind: "PLAN-B / WEB PLATFORMS", title: "Commerce and inventory", description: "Developed high-traffic web and e-commerce platforms, including mall and stock management systems. Built Laravel services and REST APIs alongside responsive JavaScript interfaces.", tags: ["Laravel", "REST APIs", "E-commerce"], color: "blue", image: "commerce.svg", outcome: "Web + stock", outcomeLabel: "connected commerce systems", featured: true }
  ],
  experienceItems: [
    { period: "Feb 2023 — Present", role: "Senior Engineer Full Stack", company: "CamGSM PLC (Cellcard)", summary: "Promoted from ESS Specialist. I lead and deliver enterprise systems spanning CRM, procurement, finance, and operations.", highlights: ["Built scalable web applications, APIs, and integrations for mission-critical workflows across business entities.", "Administered and troubleshot high-availability ASP.NET platforms, maintaining 99.9% system uptime.", "Optimized SQL Server databases and production queries, improving response times by 35%.", "Worked with Finance, Procurement, Sales, Operations, Infrastructure, and Management on system design and delivery.", "Provided root-cause analysis, technical support, user guidance, and training to support adoption."] },
    { period: "Oct 2020 — Feb 2023", role: "Senior Web Developer", company: "Plan-B Cambodia", summary: "Developed high-traffic web, e-commerce, mall, and inventory management platforms.", highlights: ["Designed backend services and REST APIs with PHP, Laravel, and Crudbooster.", "Translated database requirements into efficient schemas with cross-functional teams.", "Created responsive interfaces using JavaScript, HTML, and AJAX.", "Wrote unit tests and debugged applications to improve stability."] },
    { period: "Apr 2019 — Sep 2020", role: "Junior Web Developer", company: "KSD Solution", summary: "Contributed to client-facing web applications built with PHP and Laravel.", highlights: ["Analyzed data structures and wrote optimized SQL queries.", "Tested and debugged websites to improve reliability and performance.", "Prepared feature documentation, deployment guides, and codebase specifications."] }
  ],
  about: "I’m a full-stack engineer with over six years of experience designing and optimizing enterprise web applications. I work across architecture, backend services, APIs, databases, and responsive interfaces. My work focuses on turning operational complexity into reliable systems that teams can use every day.",
  focus: "Enterprise systems & digital transformation",
  experience: "6+ years across backend and frontend",
  featuredSkills: [
    { name: "C#", icon: "csharp" },
    { name: "ASP.NET Core", icon: "dotnetcore" },
    { name: "PHP", icon: "php" },
    { name: "Laravel", icon: "laravel" },
    { name: "Java", icon: "java" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Angular", icon: "angular" },
    { name: "Vue.js", icon: "vuejs" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "SQL Server", icon: "microsoftsqlserver" },
    { name: "Kafka", icon: "apachekafka", light: true },
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "Git", icon: "git" },
    { name: "Bitbucket", icon: "bitbucket" }
  ],
  skillGroups: [
    { title: "Backend & architecture", items: ["C#", "ASP.NET Core", "PHP", "Laravel", "Java", "REST APIs", "Microservices", "Apache Kafka", "Enterprise integrations"] },
    { title: "Frontend", items: ["JavaScript", "Angular", "Vue.js", "HTML5", "CSS3", "AJAX", "Bootstrap", "Responsive design", "UI/UX optimization"] },
    { title: "Data & operations", items: ["SQL Server", "Query optimization", "Data modelling", "Data integrity", "Performance tuning", "Server administration"] },
    { title: "Delivery & tools", items: ["Docker", "Rancher", "Kubernetes", "Git", "Bitbucket", "CI/CD", "Production deployment", "Monitoring", "Unit testing", "Agile delivery"] },
    { title: "AI-assisted development", items: ["Codex", "Antigravity", "Prompt engineering", "AI productivity tools"] }
  ],
  education: [
    { school: "Royal University of Phnom Penh", degree: "BSc in Programming Languages", period: "Oct 2015 — Mar 2019" },
    { school: "Institute of Foreign Languages", degree: "BA in English (Public Communication)", period: "Oct 2017 — 2021" }
  ],
  languages: [ { name: "Khmer", level: "Native" }, { name: "English", level: "Fluent · professional proficiency" } ],
  hobbies: [
    { name: "Motorcycles", category: "ON THE MOVE", icon: "🏍" },
    { name: "Track", category: "ON THE MOVE", icon: "🏁" },
    { name: "Running", category: "ACTIVE", icon: "↗" },
    { name: "Workouts", category: "ACTIVE", icon: "✦" },
    { name: "Badminton", category: "ACTIVE", icon: "🏸" },
    { name: "Videography", category: "CREATIVE", icon: "◉" },
    { name: "Adventure", category: "EXPLORE", icon: "✳" },
    { name: "Hiking", category: "EXPLORE", icon: "⛰" },
    { name: "Video games", category: "PLAY", icon: "✧" }
  ],
  photos: [
    { file: "facebook-road-ride.jpg", alt: "Tan Vichet riding a blue sport motorcycle along a tree-lined road", caption: "Open road" },
    { file: "facebook-portrait.jpg", alt: "Tan Vichet smiling in a casual portrait", caption: "A quieter moment" },
    { file: "motorcycle-blue.jpg", alt: "Rider standing beside a blue sport motorcycle", caption: "Motorcycles" },
    { file: "track-blue-corner.jpg", alt: "Rider leaning a blue motorcycle through a track corner", caption: "Track days" },
    { file: "hiking.jpg", alt: "Hiker on a misty rocky hill near a Cambodian flag", caption: "Hiking" },
    { file: "track-green.jpg", alt: "Green motorcycle leaning through a racetrack corner", caption: "On track" },
    { file: "motorcycle-teal.jpg", alt: "Rider on a teal motorcycle outdoors", caption: "Two wheels" },
    { file: "group-ride.jpg", alt: "Motorcycle rider with other riders in the background", caption: "Riding together" },
    { file: "track-blue-front.jpg", alt: "Rider on a blue motorcycle at a track event", caption: "Track day" },
    { file: "motorcycles-overhead.jpg", alt: "Overhead view of two parked sport motorcycles", caption: "Motorcycles" },
    { file: "motorcycle-night.jpg", alt: "Rider on a motorcycle at night", caption: "After dark" }
  ],
  email: "tanvechet@gmail.com",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/tan-vichet-a649331b4/", icon: "linkedin" },
    { label: "Facebook", url: "https://www.facebook.com/tan.vichet.14/", icon: "facebook" },
    { label: "Instagram", url: "https://www.instagram.com/tan_chet/?hl=en", icon: "instagram" },
    { label: "TikTok", url: "https://www.tiktok.com/@bot_chet4?is_from_webapp=1&sender_device=pc", icon: "tiktok" }
  ]
};

const $ = (id) => document.getElementById(id);
const set = (id, value) => { if ($(id)) $(id).textContent = value || ""; };
document.title = `${portfolio.name} — Senior Full-Stack Engineer`;
document.querySelector('meta[name="description"]').content = portfolio.headline;
set("brand-name", portfolio.name);
set("first-name", portfolio.name);
set("hero-role", portfolio.role);
set("hero-copy", portfolio.headline);
set("availability", portfolio.availability);
set("location", portfolio.location);
set("work-intro", portfolio.workIntro);
set("about-copy", portfolio.about);
set("focus", portfolio.focus);
set("experience", portfolio.experience);
set("about-location", portfolio.location);
set("footer-name", portfolio.name);
set("year", new Date().getFullYear());

const featuredSkills = $("featured-skills");
portfolio.featuredSkills.forEach(({ name, icon, light }) => {
  const item = document.createElement("li"); item.className = "featured-skill";
  const badge = document.createElement("span"); badge.className = `featured-icon${light ? " light-icon" : ""}`;
  const image = document.createElement("img"); image.src = `assets/skills/${icon}.svg`; image.alt = ""; image.loading = "lazy"; image.decoding = "async";
  const label = document.createElement("span"); label.className = "featured-label"; label.textContent = name;
  badge.append(image); item.append(badge, label); featuredSkills.append(item);
});

const grid = $("project-grid");
portfolio.projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = `project-card ${project.color}${project.featured ? " featured" : ""}`;
  const link = project.url ? document.createElement("a") : document.createElement("div");
  if (project.url) { link.href = project.url; link.target = "_blank"; link.rel = "noopener noreferrer"; }
  link.className = "project-inner";
  const label = document.createElement("div"); label.className = "project-meta"; label.textContent = `${project.number} / ${project.kind}`;
  const art = document.createElement("div"); art.className = "project-art";
  const image = document.createElement("img"); image.src = `assets/work/${project.image}`; image.alt = `Concept illustration for ${project.title}`; image.loading = "lazy"; image.decoding = "async";
  const artNote = document.createElement("span"); artNote.className = "art-note"; artNote.textContent = "Concept illustration";
  art.append(image, artNote);
  const body = document.createElement("div"); body.className = "project-body";
  const title = document.createElement("h3"); title.textContent = project.title;
  const desc = document.createElement("p"); desc.textContent = project.description;
  const tags = document.createElement("div"); tags.className = "tags";
  (project.tags || []).forEach((tag) => { const item = document.createElement("span"); item.textContent = tag; tags.append(item); });
  const outcome = document.createElement("div"); outcome.className = "project-outcome";
  const outcomeValue = document.createElement("strong"); outcomeValue.textContent = project.outcome;
  const outcomeLabel = document.createElement("span"); outcomeLabel.textContent = project.outcomeLabel;
  outcome.append(outcomeValue, outcomeLabel);
  body.append(title, desc, outcome, tags); link.append(label, art, body); card.append(link); grid.append(card);
});
const timeline = $("timeline");
portfolio.experienceItems.forEach(({period,role,company,summary,highlights}) => {
  const item = document.createElement("article"); item.className = "timeline-item";
  const date = document.createElement("div"); date.className = "timeline-date"; date.textContent = period;
  const main = document.createElement("div"); main.className = "timeline-main";
  const heading = document.createElement("h3"); heading.textContent = role;
  const org = document.createElement("div"); org.className = "timeline-company"; org.textContent = company;
  const desc = document.createElement("p"); desc.textContent = summary;
  const list = document.createElement("ul"); list.className = "timeline-highlights";
  highlights.forEach((highlight) => { const li = document.createElement("li"); li.textContent = highlight; list.append(li); });
  main.append(heading, org, desc, list); item.append(date, main); timeline.append(item);
});
const skillGroups = $("skill-groups");
portfolio.skillGroups.forEach(({title,items}) => {
  const group = document.createElement("div"); group.className = "skill-group";
  const heading = document.createElement("h3"); heading.textContent = title;
  const list = document.createElement("div"); list.className = "skill-list";
  items.forEach((skill) => { const item = document.createElement("span"); item.textContent = skill; list.append(item); });
  group.append(heading,list); skillGroups.append(group);
});
const education = $("education-list");
portfolio.education.forEach(({school,degree,period}) => {
  const item = document.createElement("article"); item.className = "education-item";
  const date = document.createElement("span"); date.className = "education-period"; date.textContent = period;
  const heading = document.createElement("h3"); heading.textContent = degree;
  const institution = document.createElement("p"); institution.textContent = school;
  item.append(date, heading, institution); education.append(item);
});
const languages = $("language-list");
portfolio.languages.forEach(({name,level}) => {
  const item = document.createElement("div"); item.className = "language-item";
  const title = document.createElement("strong"); title.textContent = name;
  const value = document.createElement("span"); value.textContent = level;
  item.append(title,value); languages.append(item);
});
const hobbies = $("hobby-grid");
portfolio.hobbies.forEach(({name,category,icon}, index) => {
  const item = document.createElement("article"); item.className = "hobby-card";
  const top = document.createElement("div"); top.className = "hobby-top";
  const number = document.createElement("span"); number.textContent = String(index + 1).padStart(2, "0");
  const type = document.createElement("span"); type.textContent = category;
  top.append(number,type);
  const symbol = document.createElement("div"); symbol.className = "hobby-symbol"; symbol.textContent = icon; symbol.setAttribute("aria-hidden", "true");
  const heading = document.createElement("h3"); heading.textContent = name;
  item.append(top,symbol,heading); hobbies.append(item);
});
const photoGallery = $("photo-gallery");
portfolio.photos.forEach(({file,alt,caption}) => {
  const figure = document.createElement("figure"); figure.className = "gallery-photo";
  const link = document.createElement("a"); link.href = `assets/hobbies/${file}`; link.target = "_blank"; link.rel = "noopener noreferrer"; link.setAttribute("aria-label", `View full photo: ${caption}`);
  const photo = document.createElement("img"); photo.src = `assets/hobbies/${file}`; photo.alt = alt; photo.loading = "lazy"; photo.decoding = "async";
  const label = document.createElement("figcaption"); label.textContent = caption;
  link.append(photo); figure.append(link,label); photoGallery.append(figure);
});
const contactLinks = $("contact-links");
if (portfolio.email) {
  const email = document.createElement("a"); email.className = "email-link"; email.href = `mailto:${portfolio.email}`; email.textContent = portfolio.email; contactLinks.append(email);
} else {
  const note = document.createElement("span"); note.className = "contact-note"; note.textContent = "Contact details coming soon"; contactLinks.append(note);
}
const socialIcons = document.createElement("div");
socialIcons.className = "social-icons";
socialIcons.setAttribute("aria-label", "Social media");
const iconMarkup = {
  linkedin: '<path d="M5.2 8.5v10.3M5.2 5.3v.1M10 18.8V8.5m0 4.5c0-2.7 1.4-4.5 3.8-4.5 2.2 0 3.4 1.3 3.4 3.8v6.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/>',
  facebook: '<path d="M14.2 20V12h2.7l.4-3.1h-3.1V7c0-.9.3-1.5 1.6-1.5h1.7V2.7c-.8-.1-1.6-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.4v2H8.2V12h2.7v8z" fill="currentColor"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>',
  tiktok: '<path d="M14.7 3c.3 2.6 1.9 4.1 4.3 4.3v3.1a8 8 0 0 1-4.3-1.3v5.8c0 3.5-2.2 5.9-5.6 5.9a5.6 5.6 0 0 1-5.6-5.6c0-3.2 2.4-5.5 5.6-5.5.5 0 1 .1 1.4.2v3.2a3 3 0 0 0-1.4-.3 2.4 2.4 0 0 0-2.4 2.4 2.4 2.4 0 0 0 2.4 2.4c1.5 0 2.5-1 2.5-2.7V3z" fill="currentColor"/>'
};
portfolio.links.forEach(({label,url,icon}) => {
  const link = document.createElement("a");
  link.className = "social-icon";
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", label);
  link.title = label;
  link.innerHTML = `<svg viewBox="0 0 24 24" width="23" height="23" aria-hidden="true" focusable="false">${iconMarkup[icon]}</svg>`;
  socialIcons.append(link);
});
contactLinks.append(socialIcons);

// ---- Motion: matrix rain, text decode, scroll reveal, count-up ----
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const glyphs = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン0123456789ABCDEF<>/{}=+*";
const decodeGlyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&";
const randomGlyph = (set = glyphs) => set[Math.floor(Math.random() * set.length)];

function matrixRain(host, { color, head, fontSize = 16, speed = 55 }) {
  const canvas = document.createElement("canvas");
  canvas.className = "matrix-rain"; canvas.setAttribute("aria-hidden", "true");
  host.prepend(canvas);
  const ctx = canvas.getContext("2d");
  let drops = [], width = 0, height = 0, visible = false, last = 0, frame = 0;
  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = host.clientWidth; height = host.clientHeight;
    canvas.width = width * ratio; canvas.height = height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    drops = Array.from({ length: Math.ceil(width / fontSize) }, () => Math.random() * -height / fontSize);
  };
  const draw = (time) => {
    frame = requestAnimationFrame(draw);
    if (time - last < speed) return;
    last = time;
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0,0,0,0.12)"; ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "source-over";
    ctx.font = `${fontSize}px monospace`;
    drops.forEach((y, i) => {
      const x = i * fontSize, py = y * fontSize;
      ctx.fillStyle = color; ctx.fillText(randomGlyph(), x, py - fontSize);
      ctx.fillStyle = head; ctx.fillText(randomGlyph(), x, py);
      drops[i] = py > height && Math.random() > 0.975 ? 0 : y + 1;
    });
  };
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    cancelAnimationFrame(frame);
    if (visible) frame = requestAnimationFrame(draw);
  }).observe(host);
  new ResizeObserver(resize).observe(host);
  resize();
}

function decode(el, duration = 900) {
  const target = el.textContent;
  if (!target.trim()) return;
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const settled = Math.floor(progress * target.length);
    el.textContent = [...target].map((ch, i) => (i < settled || ch === " " ? ch : randomGlyph(decodeGlyphs))).join("");
    if (progress < 1) requestAnimationFrame(step); else el.textContent = target;
  };
  requestAnimationFrame(step);
}

function countUp(el, duration = 1400) {
  const match = el.textContent.match(/^(\d+)(.*)$/);
  if (!match) return;
  const [, value, suffix] = match, end = Number(value), start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = `${Math.round(end * (1 - Math.pow(1 - p, 3)))}${suffix}`;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

if (!reduceMotion) {
  document.body.classList.add("motion");
  matrixRain(document.querySelector(".hero"), { color: "#ffffff38", head: "#ffffffb0" });
  matrixRain(document.querySelector(".stack-strip"), { color: "#ed244866", head: "#ff9aac", fontSize: 14 });
  ["first-name", "hero-role"].forEach((id, i) => setTimeout(() => decode($(id), 1000 + i * 300), 150 + i * 250));

  const revealTargets = document.querySelectorAll(
    ".section-kicker, .about-label, .section-heading h2, .about h2, .contact h2, .impact-row > div, .project-card, .timeline-item, .skill-group, .education-item, .language-item, .hobby-card, .gallery-photo, .featured-skill"
  );
  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
    el.style.setProperty("--reveal-delay", `${Math.min(siblings.indexOf(el), 8) * 70}ms`);
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      target.classList.add("revealed");
      target.addEventListener("transitionend", function done(e) { if (e.target !== target) return; target.removeEventListener("transitionend", done); target.classList.remove("reveal", "revealed"); target.style.removeProperty("--reveal-delay"); });
      observer.unobserve(target);
      if (target.matches(".section-kicker, .about-label")) decode(target, 700);
      if (target.matches(".impact-row > div")) countUp(target.querySelector("strong"));
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  revealTargets.forEach((el) => observer.observe(el));
}
