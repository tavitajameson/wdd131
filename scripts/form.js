const products = [
    { id: 1, name: "Galaxy Light 5000" },
    { id: 2, name: "EcoBreeze Fan" },
    { id: 3, name: "HydroClean Filter" },
    { id: 4, name: "SolarMax Charger" }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");

    products.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = p.name;
        productSelect.appendChild(opt);
    });
});
