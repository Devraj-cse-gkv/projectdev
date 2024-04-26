function toggleNav() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left !== '0px') {
        sidebar.style.left = '0px';
    } else {
        sidebar.style.left = '-250px';
    }
}

function toggleUser() {
    setTimeout(function () {
        var sub = document.getElementById('userOpt');
        var togImg = document.getElementById('togimg2');
        if (sub.style.display !== "block") {
            sub.style.display = "block";
            sub.style.opacity = "1";
            togImg.style.transform = "rotate(180deg)";
        } else {
            sub.style.display = "none";
            sub.style.opacity ="0";
            togImg.style.transform = "rotate(0deg)";
        }
    }, 200); // Wait for 1000 milliseconds (1 second) before executing the function
}

function togSide(){
    var card = document.getElementById('dropdown');
    var togimg = document.getElementById('tog-img');
    if(card.style.height!=="100%"){
        card.style.height = "100%";
        togimg.style.transform = "rotateX(180deg)";

    }else{
        card.style.height = "24px";
        togimg.style.transform = "rotateX(0deg)";
    }
}


import {events, templates } from '/data.js';
console.log(templates[0].card)

function createplaylistcard(templatePath, data, sectionId) {
    // Fetch the template from the provided path
            // Loop through each data item
            let templateStr = templatePath.card
            data.forEach(res => {
                // Create a new DOM element from the fetched template
                const card = document.createElement('div');
                // adding class to the card
                card.classList.add('scr-card');
                card.innerHTML = templateStr;
                // Update the content with res data
                card.querySelector('h2').textContent = res.name;
                card.querySelector('img').src = res.image;
                card.querySelector('#price').textContent = res.price;
                card.querySelector('.tag').textContent = res.status;
                card.querySelector('#schedule').textContent = res.schedule;
                card.querySelector('#mode').textContent = res.mode;
                
                // Get the play button element
                const joinButton = card.querySelector('.scr-join');

                // Add event listener to the play button
                joinButton.addEventListener('click', function () {
                    // Call the play function with the res ID
                    play(res.name);
                });

                // Append the card to the container
                document.querySelector(sectionId).appendChild(card);
            });
}

// Play function to handle play button click
function play(resId) {
    alert('Play button clicked for res ID: ' + resId);
}

// Call the create function with template path, data, and sectionId
createplaylistcard(templates[0], events, '#scroll');

