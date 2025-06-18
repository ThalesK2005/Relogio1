const updateTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const timeElement = document.querySelector(".time");
    timeElement.textContent = `${hours} : ${minutes} : ${seconds}`;
}

window.addEventListener("load", () => {
    updateTime(); 
    setInterval(updateTime, 1000); 
});
