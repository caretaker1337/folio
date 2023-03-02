window.onload = () => {
  const projects = window["projects"];
  const list = document.getElementById("root");

  const items = projects
    .map(({ name, techs, url }) => {
      const icons = techs
        .map((icon) => {
          return `
            <li class="projects-icon" title="${icon}">
              <img alt="${icon}" src="images/icons/${icon.toLowerCase()}_icon.svg">
            </li>
          `;
        })
        .join("");

      return `
        <div class="projects-item">
          <a
            class="projects-link"
            data-title="${name}"
            href="${url}"
            target="_blank"
          >
            <img
              alt="${name}"
              class="projects-image"
              src="images/projects/${name}_img.jpg"
            >
          </a>

          ${
            icons && !!icons.length
              ? `<ul class="projects-techs">${icons}</ul>`
              : `<ul class="projects-techs">
                  <li class="projects-icon" title="vanilla HTML/CSS">
                    <img alt="HTML, CSS" src="images/icons/code_icon.svg">
                  </li>
                </ul>
              `
          }
        </div>
      `;
    })
    .join("");

  console.log(items);

  if (items && !!items.length) {
    list.innerHTML = items;
    new MiniMasonry({
      baseWidth: 180,
      container: list,
      gutter: 20,
      minify: false,
    });
  }
};
