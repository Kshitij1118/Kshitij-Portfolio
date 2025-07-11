// Sidebar elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const sidebarLinks = document.querySelectorAll('.sidebar a');

// Function to close sidebar
function closeSidebar() {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
}

// Function to open sidebar
function openSidebar() {
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
}

// Hamburger menu click event
menu.addEventListener("click", function(){
    openSidebar();
});

// Close icon click event
closeIcon.addEventListener("click", function(){
    closeSidebar();
});

// Close sidebar when clicking on navigation links
sidebarLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        closeSidebar();
    });
});

// Close sidebar when clicking outside of it
document.addEventListener("click", function(event) {
    if (!sideBar.contains(event.target) && !menu.contains(event.target)) {
        if (sideBar.classList.contains("open-sidebar")) {
            closeSidebar();
        }
    }
});

// Project video hover effects (only for desktop)
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoverSign = document.querySelector('.hover-sign');

const videoList = [video1, video2, video3];

// Only add video hover effects on non-mobile devices
if (window.innerWidth > 768) {
    videoList.forEach(function(video) {
        if (video) {
            video.addEventListener("mouseover", function(){
                video.play();
                if (hoverSign) hoverSign.classList.add("active");
            });
            video.addEventListener("mouseout", function(){
                video.pause();
                if (hoverSign) hoverSign.classList.remove("active");
            });
        }
    });
}