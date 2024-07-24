document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Ноутбук", price: "50,000 руб", image: "https://avatars.mds.yandex.net/i?id=69215ef43fec6a1fbfc1cc2c866e6f8f71adb415-5676124-images-thumbs&n=13" },
        { name: "Смартфон", price: "30,000 руб", image: "images/smartphone.jpg" },
        { name: "Планшет", price: "20,000 руб", image: "images/tablet.jpg" },
        { name: "Наушники", price: "5,000 руб", image: "images/headphones.jpg" },
        { name: "Умные часы", price: "15,000 руб", image: "images/smartwatch.jpg" },
        { name: "Телевизор", price: "40,000 руб", image: "images/tv.jpg" }
    ];

    const productGrid = document.getElementById("product-grid");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>`;
        productGrid.appendChild(productElement);
    });
});
