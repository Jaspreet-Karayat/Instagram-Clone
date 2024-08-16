// <!-- JavaScript to handle scrolling -->
function scrollStories(dir) {
    const container = document.getElementById('storyContainer');
    const scrollAmount = container.clientWidth / 2;
    container.scrollBy({
        left: dir * scrollAmount,
        behavior: 'smooth'
    });
}


// <!-- JavaScript to More-BTN -->
function toggleMenu() {
    var menu = document.getElementById("dropupMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Close the dropup if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropup-btn')) {
        var dropdowns = document.getElementsByClassName("dropup-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
