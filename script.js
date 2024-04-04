function toggleMode() {
    const html = document.documentElement

    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")) {
        img.setAttribute("alt", "Avatar irado")
        img.setAttribute("src", "./assets/simple.jpg")
    } else {
        img.setAttribute("src", "./assets/blank.jpg")
    }
}