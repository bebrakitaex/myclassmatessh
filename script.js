function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var openbtn = document.querySelector(".openbtn");
    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
        openbtn.innerHTML = "✕"; // зміна символу на хрест
    } else {
        sidebar.style.left = "-250px";
        openbtn.innerHTML = "☰"; // зміна символу на три риски
    }
}

function activateMenuItem(event) {
    // Знімаємо активний клас з усіх пунктів
    var items = document.querySelectorAll('.sidebar a');
    items.forEach(function(item) {
        item.classList.remove('active');
    });

    // Додаємо активний клас до натиснутого пункту
    event.currentTarget.classList.add('active');
}



