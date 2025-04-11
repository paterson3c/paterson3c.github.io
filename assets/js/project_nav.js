const projectPages = [
    { file: "http_server.html", key: "projects.http_server_title" },
    { file: "films_api.html", key: "projects.films_api_title" },
    { file: "library_api.html", key: "projects.library_api_title" },
    { file: "practica_libpcap.html", key: "projects.libpcap_title" }
];

function getTranslation(langData, key) {
    return key.split('.').reduce((o, i) => (o ? o[i] : null), langData) || key;
}

function renderProjectNav(langData) {
    const currentFile = location.pathname.split("/").pop();
    const index = projectPages.findIndex(p => p.file === currentFile);
    if (index === -1) return;

    const navContainer = document.createElement("div");
    navContainer.className = "project-nav";

    if (index > 0) {
    const prev = document.createElement("a");
    prev.href = projectPages[index - 1].file;
    prev.className = "nav-btn prev";
    prev.innerHTML = `← ${getTranslation(langData, projectPages[index - 1].key)}`;
    navContainer.appendChild(prev);
    }

    const back = document.createElement("a");
    back.href = "../projects.html";
    back.className = "nav-btn back";
    back.innerText = getTranslation(langData, "project.back");
    navContainer.appendChild(back);

    const position = document.createElement("div");
    position.className = "project-position";
    position.innerText = `${index + 1} / ${projectPages.length}`;
    navContainer.appendChild(position);

    if (index < projectPages.length - 1) {
    const next = document.createElement("a");
    next.href = projectPages[index + 1].file;
    next.className = "nav-btn next";
    next.innerHTML = `${getTranslation(langData, projectPages[index + 1].key)} →`;
    navContainer.appendChild(next);
    }

    document.querySelector("main").appendChild(navContainer);
}
