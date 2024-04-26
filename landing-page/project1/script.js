import { events, templates } from '/data.js';
function createplaylistcard(templatePath, data, sectionId) {
    let templateStr = templatePath.code;
    data.forEach(res => {
        const card = document.createElement('div');
        card.classList.add('scr-card');
        card.innerHTML = templateStr;
        card.querySelector('h2').textContent = res.name;
        card.querySelector('img').src = res.image;
        card.querySelector('#price').textContent = res.price;
        card.querySelector('.tag').textContent = res.status;
        card.querySelector('#schedule').textContent = res.schedule;
        card.querySelector('#mode').textContent = res.mode;
        const joinButton = card.querySelector('.scr-join');
        joinButton.addEventListener('click', function () {
            play(res.name);
        });
        document.querySelector(sectionId).appendChild(card);
    });
}

function play(resId) {
    alert('Play button clicked for res ID: ' + resId);
}
const cardTemplate = templates.find(template => template.name === "card");
// Call the create function with template path, data, and sectionId
createplaylistcard(cardTemplate, events, '#scroll');


function createtabs( name, classlist, id, tdata) {
    const Template = tdata.find(template => template.name === name);
    const tab = document.createElement('div');
    tab.classList.add(classlist);
    tab.innerHTML = Template.code;
    document.querySelector(id).appendChild(tab);
}
createtabs( "nav", "nav", "#nav", templates)
createtabs( "sidebar", "sidebar", "#sidebar", templates)

function setUrl() {
    const section = document.getElementById("nav-link");
    const links = section.querySelectorAll('a'); // Select all anchor elements
    const urld = templates.find(template => template.name === "nav").navlink;
    
    links.forEach(link => {
        const linkText = link.innerText.trim();
        const urlObj = urld.find(u => u.name === linkText);
        if (urlObj) {
            const url = urlObj.link;
            link.href = url; // Set the href attribute of the current anchor element
        }
    });
}
setUrl();


