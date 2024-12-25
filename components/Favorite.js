import '../src/style.css';
import '../src/media.css';
import { Headers } from './Header.js';
const prodData = localStorage.getItem("likedItems");
const prod = prodData ? JSON.parse(prodData) : [];

export function Favorite(item) {
    const favoriteSection = document.getElementById("favorite-section");
    if (!favoriteSection) return;
    const favorite = document.createElement("div");
    const favoriteH2 = document.createElement("h2");
    
    favorite.className = "favorite-container";
    favoriteH2.innerHTML = "Избранное";
    favoriteSection.innerHTML = "";

    if (item.length === 0) {
        const center = document.createElement("center");
        const favoriteNone = document.createElement("span");
        const goHome = document.createElement("a");
        const favoriteBc = document.createElement("img");
        
        center.className = "none"
        goHome.className = "go-home"
        favoriteBc.src = `./images/hearts.png`;
        favoriteNone.innerHTML = "Перейдите на главную страницу и нажмите на ♡ в товаре"
        goHome.innerHTML ="На главную"
        goHome.href ="./index.html"
        favoriteNone.style.marginTop = "16px"
        favoriteSection.append(center)
        center.append(favoriteBc, favoriteNone, goHome);
    } else {
        item.forEach((product) => {
            const gridElement = document.createElement("div");
            const boxImg = document.createElement("div");
            const imgProd = document.createElement("img");
            const likeBtn = document.createElement("button");
            const title = document.createElement("span");
            const cartPrice = document.createElement("div");
            const boxPrice = document.createElement("div");
            const skidPrice = document.createElement("span");
            const price = document.createElement("span");
            const cart = document.createElement("button");


            gridElement.className = "product";
            boxImg.className = "boxImg";
            likeBtn.className = "likeBtn";
            cartPrice.className = "cartPrice";
            boxPrice.className = "boxPrice";
            skidPrice.className = "skidPrice";
            price.className = "price";
            cart.className = "cartBtn";
            title.className = "title";

            imgProd.src = product.thumbnail;
            likeBtn.innerHTML = `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.84 1.60999C19.3292 1.099 18.7228 0.693641 18.0554 0.417078C17.3879 0.140516 16.6725 -0.00183105 15.95 -0.00183105C15.2275 -0.00183105 14.5121 0.140516 13.8446 0.417078C13.1772 0.693641 12.5708 1.099 12.06 1.60999L11 2.66999L9.94 1.60999C8.9083 0.578303 7.50903 -0.00129629 6.05 -0.00129628C4.59096 -0.00129627 3.19169 0.578303 2.16 1.60999C1.1283 2.64169 0.548706 4.04096 0.548706 5.49999C0.548706 6.95903 1.1283 8.3583 2.16 9.38999L3.22 10.45L11 18.23L18.78 10.45L19.84 9.38999C20.351 8.87924 20.7563 8.27281 21.0329 7.60535C21.3095 6.93789 21.4518 6.22248 21.4518 5.49999C21.4518 4.77751 21.3095 4.0621 21.0329 3.39464C20.7563 2.72718 20.351 2.12075 19.84 1.60999Z" fill="#7000FF"/></svg>`;
            title.innerText = product.title;
            skidPrice.innerText = product.discountPercentage;
            price.innerText = product.price;
            cart.innerHTML = `<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_39)"><path d="M4.87516 11.9167C5.17432 11.9167 5.41683 11.6742 5.41683 11.375C5.41683 11.0759 5.17432 10.8334 4.87516 10.8334C4.57601 10.8334 4.3335 11.0759 4.3335 11.375C4.3335 11.6742 4.57601 11.9167 4.87516 11.9167Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.8332 11.9167C11.1323 11.9167 11.3748 11.6742 11.3748 11.375C11.3748 11.0759 11.1323 10.8334 10.8332 10.8334C10.534 10.8334 10.2915 11.0759 10.2915 11.375C10.2915 11.6742 10.534 11.9167 10.8332 11.9167Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/><path d="M0.541504 0.541626H2.70817L4.15984 7.79454C4.20937 8.04392 4.34504 8.26794 4.54309 8.42737C4.74114 8.5868 4.98897 8.6715 5.24317 8.66663H10.5082C10.7624 8.6715 11.0102 8.5868 11.2083 8.42737C11.4063 8.26794 11.542 8.04392 11.5915 7.79454L12.4582 3.24996H3.24984" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1_39"><rect width="13" height="13" fill="white"/></clipPath></defs></svg>`;

            likeBtn.onclick = (event) => {
                event.stopPropagation()
                const updatedItems = item.filter((likedItem) => likedItem.id !== product.id);
                localStorage.setItem("likedItems", JSON.stringify(updatedItems));
                Favorite(updatedItems);
            };

            cart.onclick = (event) => {
                event.stopPropagation()
                const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []; // Получаем данные из корзины, если они есть
            
                // Проверяем, чтобы в корзине не было одинаковых товаров
                if (!cartItems.some((existingItem) => existingItem.id === product.id)) {
                    cartItems.push(product); // Добавляем товар в корзину
                    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Сохраняем обновленную корзину в localStorage
                    alert("Товар добавлен в корзину");
                } else {
                    alert("Этот товар уже в корзине");
                }
            };
            
            gridElement.onclick = () => {
                localStorage.setItem("prod", JSON.stringify(product));
                window.location.href = "./infoprod.html"
            }
          
            favoriteSection.append(favoriteH2, favorite)
            favorite.append(gridElement);
            gridElement.append(boxImg, title, cartPrice);
            boxImg.append(imgProd, likeBtn);
            cartPrice.append(boxPrice, cart);
            boxPrice.append(skidPrice, price);
        });
    }
    const home = document.querySelector(".logo")
    home.onclick = () => {
        window.location.href = "./index.html"
    }

}

Favorite(prod);
