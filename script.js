function showOrder() {
    alert("অর্ডার করতে কল করুন: 85977793369(Whatsapp), 8436516613(Whatsapp)");
}

function showSection(sectionId) {
    document.getElementById("product-list").style.display = "none";
    document.getElementById("shop-details").style.display = "none";
    document.getElementById(sectionId).style.display = "block";
}

const products = [
    { name: "product 1", images: ["images/product1"-1.jpg", "images/product1-2.jpg", "images/product1-3.jpg"] },
    { name: "Product 2", images: ["images/product2-1.jpg", "images/product2-2.jpg", "images/product2-3.jpg"] },
    { name: "Product 3", images: ["images/product3-1.jpg", "images/product3-2.jpg", "images/product3-3.jpg"] },
    { name: "Product 4", images: ["images/product4-1.jpg", "images/product4-2.jpg", "images/product4-3.jpg"] },
    { name: "Product 5", images: ["images/product5-1.jpg", "images/product5-2.jpg", "images/product5-3.jpg"] },
    { name: "Product 6", images: ["images/product6-1.jpg", "images/product6-2.jpg", "images/product6-3.jpg"] },
    { name: "Product 7", images: ["images/product7-1.jpg", "images/product7-2.jpg", "images/product7-3.jpg"] },
    { name: "Product 8", images: ["images/product8-1.jpg", "images/product8-2.jpg", "images/product8-3.jpg"] },
    { name: "Product 9", images: ["images/product9-1.jpg", "images/product9-2.jpg", "images/product9-3.jpg"] },
    { name: "Product 10", images: ["images/product10-1.jpg", "images/product10-2.jpg", "images/product10-3.jpg"] },
    { name: "Product 11", images: ["images/product11-1.jpg", "images/product11-2.jpg", "images/product11-3.jpg"] },
    { name: "Product 12", images: ["images/product12-1.jpg", "images/product12-2.jpg", "images/product12-3.jpg"] },
    { name: "Product 13", images: ["images/product13-1.jpg", "images/product13-2.jpg", "images/product13-3.jpg"] },
    { name: "Product 14", images: ["images/product14-1.jpg", "images/product14-2.jpg", "images/product14-3.jpg"] },
    { name: "Product 15", images: ["images/product15-1.jpg", "images/product15-2.jpg", "images/product15-3.jpg"] },
    { name: "Product 16", images: ["images/product16-1.jpg", "images/product16-2.jpg", "images/product16-3.jpg"] },
    { name: "Product 17", images: ["images/product17-1.jpg", "images/product17-2.jpg", "images/product17-3.jpg"] },
    { name: "Product 18", images: ["images/product18-1.jpg", "images/product18-2.jpg", "images/product18-3.jpg"] },
    { name: "Product 19", images: ["images/product19-1.jpg", "images/product19-2.jpg", "images/product19-3.jpg"] },
    { name: "Product 20", images: ["images/product20-1.jpg", "images/product20-2.jpg", "images/product20-3.jpg"] },
{ name: "Product 21", images: ["images/product21-1.jpg", "images/product21-2.jpg", "images/product21-3.jpg"] },
{ name: "Product 22", images: ["images/product22-1.jpg", "images/product22-2.jpg", "images/product22-3.jpg"] },
{ name: "Product 23", images: ["images/product23-1.jpg", "images/product23-2.jpg", "images/product23-3.jpg"] },
{ name: "Product 24", images: ["images/product24-1.jpg", "images/product24-2.jpg", "images/product24-3.jpg"] },
{ name: "Product 25", images: ["images/product25-1.jpg", "images/product25-2.jpg", "images/product25-3.jpg"] },
{ name: "Product 26", images: ["images/product26-1.jpg", "images/product26-2.jpg", "images/product26-3.jpg"] },
{ name: "Product 27", images: ["images/product27-1.jpg", "images/product27-2.jpg", "images/product27-3.jpg"] },
{ name: "Product 28", images: ["images/product28-1.jpg", "images/product28-2.jpg", "images/product28-3.jpg"] },
{ name: "Product 29", images: ["images/product29-1.jpg", "images/product29-2.jpg", "images/product29-3.jpg"] },
{ name: "Product 30", images: ["images/product30-1.jpg", "images/product30-2.jpg", "images/product30-3.jpg"] },
{ name: "Product 31", images: ["images/product31-1.jpg", "images/product31-2.jpg", "images/product31-3.jpg"] },
{ name: "Product 32", images: ["images/product32-1.jpg", "images/product32-2.jpg", "images/product32-3.jpg"] },
{ name: "Product 33", images: ["images/product33-1.jpg", "images/product33-2.jpg", "images/product33-3.jpg"] },
{ name: "Product 34", images: ["images/product34-1.jpg", "images/product34-2.jpg", "images/product34-3.jpg"] },
{ name: "Product 35", images: ["images/product35-1.jpg", "images/product35-2.jpg", "images/product35-3.jpg"] },
{ name: "Product 36", images: ["images/product36-1.jpg", "images/product36-2.jpg", "images/product36-3.jpg"] },
{ name: "Product 37", images: ["images/product37-1.jpg", "images/product37-2.jpg", "images/product37-3.jpg"] },
{ name: "Product 38", images: ["images/product38-1.jpg", "images/product38-2.jpg", "images/product38-3.jpg"] },
{ name: "Product 39", images: ["images/product39-1.jpg", "images/product39-2.jpg", "images/product39-3.jpg"] },
{ name: "Product 40", images: ["images/product40-1.jpg", "images/product40-2.jpg", "images/product40-3.jpg"] },
{ name: "Product 41", images: ["images/product41-1.jpg", "images/product41-2.jpg", "images/product41-3.jpg"] },
{ name: "Product 42", images: ["images/product42-1.jpg", "images/product42-2.jpg", "images/product42-3.jpg"] },
{ name: "Product 43", images: ["images/product43-1.jpg", "images/product43-2.jpg", "images/product43-3.jpg"] },
{ name: "Product 44", images: ["images/product44-1.jpg", "images/product44-2.jpg", "images/product44-3.jpg"] },
{ name: "Product 45", images: ["images/product45-1.jpg", "images/product45-2.jpg", "images/product45-3.jpg"] },
{ name: "Product 46", images: ["images/product46-1.jpg", "images/product46-2.jpg", "images/product46-3.jpg"] },
{ name: "Product 47", images: ["images/product47-1.jpg", "images/product47-2.jpg", "images/product47-3.jpg"] },
{ name: "Product 48", images: ["images/product48-1.jpg", "images/product48-2.jpg", "images/product48-3.jpg"] },
{ name: "Product 49", images: ["images/product49-1.jpg", "images/product49-2.jpg", "images/product49-3.jpg"] },
{ name: "Product 50", images: ["images/product50-1.jpg", "images/product50-2.jpg", "images/product50-3.jpg"] },
{ name: "Product 51", images: ["images/product51-1.jpg", "images/product51-2.jpg", "images/product51-3.jpg"] },
{ name: "Product 52", images: ["images/product52-1.jpg", "images/product52-2.jpg", "images/product52-3.jpg"] },
{ name: "Product 53", images: ["images/product53-1.jpg", "images/product53-2.jpg", "images/product53-3.jpg"] },
{ name: "Product 54", images: ["images/product54-1.jpg", "images/product54-2.jpg", "images/product54-3.jpg"] },
{ name: "Product 55", images: ["images/product55-1.jpg", "images/product55-2.jpg", "images/product55-3.jpg"] },
{ name: "Product 56", images: ["images/product56-1.jpg", "images/product56-2.jpg", "images/product56-3.jpg"] },
{ name: "Product 57", images: ["images/product57-1.jpg", "images/product57-2.jpg", "images/product57-3.jpg"] },
{ name: "Product 58", images: ["images/product58-1.jpg", "images/product58-2.jpg", "images/product58-3.jpg"] },
{ name: "Product 59", images: ["images/product59-1.jpg", "images/product59-2.jpg", "images/product59-3.jpg"] },
{ name: "Product 60", images: ["images/product60-1.jpg", "images/product60-2.jpg", "images/product60-3.jpg"] },
{ name: "Product 61", images: ["images/product61-1.jpg", "images/product61-2.jpg", "images/product61-3.jpg"] },
{ name: "Product 62", images: ["images/product62-1.jpg", "images/product62-2.jpg", "images/product62-3.jpg"] },
{ name: "Product 63", images: ["images/product63-1.jpg", "images/product63-2.jpg", "images/product63-3.jpg"] },
{ name: "Product 64", images: ["images/product64-1.jpg", "images/product64-2.jpg", "images/product64-3.jpg"] },
{ name: "Product 65", images: ["images/product65-1.jpg", "images/product65-2.jpg", "images/product65-3.jpg"] },
{ name: "Product 66", images: ["images/product66-1.jpg", "images/product66-2.jpg", "images/product66-3.jpg"] },
{ name: "Product 67", images: ["images/product67-1.jpg", "images/product67-2.jpg", "images/product67-3.jpg"] },
{ name: "Product 68", images: ["images/product68-1.jpg", "images/product68-2.jpg", "images/product68-3.jpg"] },
{ name: "Product 69", images: ["images/product69-1.jpg", "images/product69-2.jpg", "images/product69-3.jpg"] },
{ name: "Product 70", images: ["images/product70-1.jpg", "images/product70-2.jpg", "images/product70-3.jpg"] },
{ name: "Product 71", images: ["images/product71-1.jpg", "images/product71-2.jpg", "images/product71-3.jpg"] },
{ name: "Product 72", images: ["images/product72-1.jpg", "images/product72-2.jpg", "images/product72-3.jpg"] },
{ name: "Product 73", images: ["images/product73-1.jpg", "images/product73-2.jpg", "images/product73-3.jpg"] },
{ name: "Product 74", images: ["images/product74-1.jpg", "images/product74-2.jpg", "images/product74-3.jpg"] },
{ name: "Product 75", images: ["images/product75-1.jpg", "images/product75-2.jpg", "images/product75-3.jpg"] },
{ name: "Product 76", images: ["images/product76-1.jpg", "images/product76-2.jpg", "images/product76-3.jpg"] },
{ name: "Product 77", images: ["images/product77-1.jpg", "images/product77-2.jpg", "images/product77-3.jpg"] },
{ name: "Product 78", images: ["images/product78-1.jpg", "images/product78-2.jpg", "images/product78-3.jpg"] },
{ name: "Product 79", images: ["images/product79-1.jpg", "images/product79-2.jpg", "images/product79-3.jpg"] },
{ name: "Product 80", images: ["images/product80-1.jpg", "images/product80-2.jpg", "images/product80-3.jpg"] },
{ name: "Product 81", images: ["images/product81-1.jpg", "images/product81-2.jpg", "images/product81-3.jpg"] },
{ name: "Product 82", images: ["images/product82-1.jpg", "images/product82-2.jpg", "images/product82-3.jpg"] },
{ name: "Product 83", images: ["images/product83-1.jpg", "images/product83-2.jpg", "images/product83-3.jpg"] },
{ name: "Product 84", images: ["images/product84-1.jpg", "images/product84-2.jpg", "images/product84-3.jpg"] },
{ name: "Product 85", images: ["images/product85-1.jpg", "images/product85-2.jpg", "images/product85-3.jpg"] },
{ name: "Product 86", images: ["images/product86-1.jpg", "images/product86-2.jpg", "images/product86-3.jpg"] },
{ name: "Product 87", images: ["images/product87-1.jpg", "images/product87-2.jpg", "images/product87-3.jpg"] },
{ name: "Product 88", images: ["images/product88-1.jpg", "images/product88-2.jpg", "images/product88-3.jpg"] },
{ name: "Product 89", images: ["images/product89-1.jpg", "images/product89-2.jpg", "images/product89-3.jpg"] },
{ name: "Product 90", images: ["images/product90-1.jpg", "images/product90-2.jpg", "images/product90-3.jpg"] },
{ name: "Product 91", images: ["images/product91-1.jpg", "images/product91-2.jpg", "images/product91-3.jpg"] },
{ name: "Product 92", images: ["images/product92-1.jpg", "images/product92-2.jpg", "images/product92-3.jpg"] },
{ name: "Product 93", images: ["images/product93-1.jpg", "images/product93-2.jpg", "images/product93-3.jpg"] },
{ name: "Product 94", images: ["images/product94-1.jpg", "images/product94-2.jpg", "images/product94-3.jpg"] },
{ name: "Product 95", images: ["images/product95-1.jpg", "images/product95-2.jpg", "images/product95-3.jpg"] },
{ name: "Product 96", images: ["images/product96-1.jpg", "images/product96-2.jpg", "images/product96-3.jpg"] },
{ name: "Product 97", images: ["images/product97-1.jpg", "images/product97-2.jpg", "images/product97-3.jpg"] },
{ name: "Product 98", images: ["images/product98-1.jpg", "images/product98-2.jpg", "images/product98-3.jpg"] },
{ name: "Product 99", images: ["images/product99-1.jpg", "images/product99-2.jpg", "images/product99-3.jpg"] },
{ name: "Product 100", images: ["images/product100-1.jpg", "images/product100-2.jpg", "images/product100-3.jpg"] },

];

// এখানে ২১ থেকে ৯৯ পর্যন্ত একইভাবে কপি-পেস্ট করে অ্যাড করে নাও

let currentPage = 0;
const productsPerPage = 6;

function loadProducts() {
    let container = document.getElementById("products-container");
    container.innerHTML = "";

    let start = currentPage * productsPerPage;
    let end = start + productsPerPage;
    let paginatedProducts = products.slice(start, end);

    paginatedProducts.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");

        let title = document.createElement("h2");
        title.innerText = product.name;

        let slider = document.createElement("div");
        slider.classList.add("slider");

        product.images.forEach((imgSrc, i) => {
            let img = document.createElement("img");
            img.src = imgSrc;
            if (i === 0) img.style.display = "block";
            slider.appendChild(img);
        });

        let controls = document.createElement("div");
        controls.classList.add("slider-controls");

        let prevBtn = document.createElement("button");
        prevBtn.innerText = "←";
        prevBtn.onclick = function () { changeSlide(slider, -1); };

        let nextBtn = document.createElement("button");
        nextBtn.innerText = "→";
        nextBtn.onclick = function () { changeSlide(slider, 1); };

        controls.appendChild(prevBtn);
        controls.appendChild(nextBtn);

        let orderBtn = document.createElement("button");
        orderBtn.innerText = "Order Now";
        orderBtn.onclick = showOrder;

        productDiv.appendChild(title);
        productDiv.appendChild(slider);
        productDiv.appendChild(controls);
        productDiv.appendChild(orderBtn);

        container.appendChild(productDiv);
    });

    document.getElementById("prevPage").disabled = currentPage === 0;
    document.getElementById("nextPage").disabled = end >= products.length;
}

function changeSlide(slider, direction) {
    let images = slider.getElementsByTagName("img");
    let currentIndex = Array.from(images).findIndex(img => img.style.display === "block");

    images[currentIndex].style.display = "none";
    let newIndex = (currentIndex + direction + images.length) % images.length;
    images[newIndex].style.display = "block";
}

function nextPage() {
    currentPage++;
    loadProducts();
}

function prevPage() {
    currentPage--;
    loadProducts();
}

window.onload = loadProducts;
