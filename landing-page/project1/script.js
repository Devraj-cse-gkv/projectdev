function toggleNav() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left !== '0px') {
        sidebar.style.left = '0px';
    } else {
        sidebar.style.left = '-250px';
    }
}

function toggle(subid,timg) {
    setTimeout(function () {
        var sub = document.getElementById(subid);
        var togImg = document.getElementById(timg);
        if (sub.style.display !== "block") {
            sub.style.display = "block";
            togImg.style.transform = "rotate(180deg)";
        } else {
            sub.style.display = "none";
            togImg.style.transform = "rotate(0deg)";

        }
    }, 200); // Wait for 1000 milliseconds (1 second) before executing the function
}

