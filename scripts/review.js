document.addEventListener("DOMContentLoaded", () => {
    let count = Number(localStorage.getItem("reviewCounter")) || 0;
    count++;
    localStorage.setItem("reviewCounter", count);

    document.getElementById("count").textContent = count;
});
