function createNavbar() {
    // Set theme and class for navbar
    const navbar = document.body.querySelector("nav");
    navbar.classList.add("navbar", "navbar-dark", "bg-dark");

    // Create main container
    const container = document.createElement('div');
    container.classList.add("container-fluid");

    // Create brand that goes home
    const brand = document.createElement('a');
    brand.classList.add("navbar-brand");
    brand.href = "index.html";
    brand.text = "James T. Baucum Portfolio"

    // Add brand to container
    container.appendChild(brand);

    // Create collapse toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.classList.add("navbar-toggler");
    toggleBtn.type = "button";
    toggleBtn.setAttribute("data-bs-toggle", "collapse");
    toggleBtn.setAttribute("data-bs-target", "#navbarSupportedContent");
    toggleBtn.setAttribute("aria-controls", "#navbarSupportedContent");
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("aria-label", "Toggle navigation");

    // Create navbar toggler icon
    const icon = document.createElement('span');
    icon.classList.add("navbar-toggler-icon");

    // Add navbar toggler icon to collapse toggle button
    toggleBtn.appendChild(icon);

    // Add collapse toggle button to container
    container.appendChild(toggleBtn);

    // Create collapse navbar
    const toggleNav = document.createElement('div');
    toggleNav.classList.add("collapse", "navbar-collapse");
    toggleNav.setAttribute("id", "navbarSupportedContent");

    // Create navbar nav
    const navbarNav = document.createElement('ul');
    navbarNav.classList.add("navbar-nav");

    // Add navbar nav to collapse navbar
    toggleNav.appendChild(navbarNav);

    // Add collapse navbar to container
    container.appendChild(toggleNav);

    // Add container to nav element
    navbar.appendChild(container);
}

function addNavLink(link, text) {
    // Create list element
    const listItem = document.createElement('li');
    listItem.classList.add("nav-item");

    // Create link element
    const newLink = document.createElement('a');

    if (typeof link === 'string' && link.includes(".html")) {
        newLink.href = link;
    } else {
        throw (new Error("Link must be a string and contain .html!"));
    }
    
    if (typeof text === 'string') {
        newLink.text = text;
    } else {
        throw (new Error("Text must be a string!"))
    }

    newLink.classList.add("nav-link");

    // Add link to list item
    listItem.appendChild(newLink);

    // Add list item to navbar
    document.body.querySelector(".navbar-nav").appendChild(listItem);
}

window.onload = () => {
    createNavbar();
    addNavLink("index.html", "Home");
    addNavLink("about.html", "About");
}