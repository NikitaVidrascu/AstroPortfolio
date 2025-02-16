document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleContainer = document.getElementById("theme-toggle-container");
    const img = toggleContainer.querySelector("img");
    let isDarkMode = true;
    toggleContainer.addEventListener("click", () => {
        console.log("Click detectado en el contenedor.");

        if (isDarkMode) {
            body.classList.replace("from-[#560E89]", "from-[#81B9F1]");
            body.classList.replace("to-[#372544]", "to-[#85B0DA]");
            img.src = "/src/img/Sun.png";
            img.alt = "Light";
        } else {
            body.classList.replace("from-[#81B9F1]", "from-[#560E89]");
            body.classList.replace("to-[#85B0DA]", "to-[#372544]");
            img.src = "/src/img/moon.png";
            img.alt = "Dark";
        }

        isDarkMode = !isDarkMode;
    });
});
