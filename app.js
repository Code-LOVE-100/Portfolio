const toggleBtn = document.getElementById("toggle-btn")
const sidebar = document.getElementById("sidebar")
const active = document.getElementById("main-icon")
const changeWidth = document.getElementById("main-bar")

function toggleSidebar() {
    sidebar.classList.toggle("close")
    active.classList.toggle("active-icon")
    changeWidth.classList.toggle("change-width")
    toggleBtn.classList.toggle("rotate")
}