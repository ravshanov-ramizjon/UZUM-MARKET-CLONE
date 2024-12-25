import '../src/style.css';
import '../src/media.css';
import { Headers } from './Header.js';

export function cart(items) {
    const cartContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const totalDiscountElement = document.getElementById("total-discount");
    const totalQuantityElement = document.getElementById("total-quantity");
    const checkoutButton = document.getElementById("checkout-button");
    const container = document.querySelector(".cartG");

    cartContainer.innerHTML = "";

    if (items.length === 0) {
        container.innerHTML = "";
        const empty = document.createElement("div");
        const emptyMessage = document.createElement("div");
        const emptyImg = document.createElement("img");
        const emptyText1 = document.createElement("span");
        const emptyText2 = document.createElement("span");
        const emptyHome = document.createElement("a");

        empty.className = "empty-cart";
        emptyMessage.className = "empty-cart-message";
        emptyImg.className = "empty-cart-image";
        emptyText1.className = "empty-cart-t1";
        emptyText2.className = "empty-cart-t2";
        emptyHome.className = "empty-cart-home";
        emptyImg.src = "./images/cartUndefined.png"
        emptyText1.innerHTML = "В корзине пока пусто"
        emptyText2.innerHTML = "Начните с главной страницы — нужный товар можно найти через поиск или заглянуть в подборки"
        emptyHome.innerHTML = "На главную"
        emptyHome.href = "./index.html"
        emptyMessage.append(emptyText1, emptyText2, emptyHome);
        empty.append(emptyImg, emptyMessage);
        container.append(empty)
        return;
    }

    let totalQuantity = 0;
    let totalPrice = 0;
    let totalDiscount = 0;

    items.forEach((item, index) => {
        if (typeof item.quantity === 'undefined') {
            item.quantity = 1;
        }

        const itemTotalPrice = item.price * item.quantity;
        const itemTotalDiscount = item.rating * item.quantity;

        const cartItem = document.createElement("div");
        const boxImage = document.createElement("div");
        const itemImage = document.createElement("img");
        const itemDetails = document.createElement("div");
        const itemTitle = document.createElement("h4");
        const itemPrice = document.createElement("p");
        const itemActions = document.createElement("div");
        const decreaseButton = document.createElement("button");
        const quantitySpan = document.createElement("span");
        const increaseButton = document.createElement("button");
        const removeButton = document.createElement("button");
        const box = document.createElement("div");
        const cont = document.createElement("div");

        totalQuantity += item.quantity;
        totalPrice += itemTotalPrice;
        totalDiscount += itemTotalDiscount;

        cartItem.className = "cart-item";
        boxImage.className = "img-box-cart"
        itemDetails.className = "cart-item-details";
        itemActions.className = "cart-item-actions";
        decreaseButton.className = "decrease";
        increaseButton.className = "increase";
        removeButton.className = "remove";
        cont.className = " box-cart-count";
        itemPrice.className = "cart-price-item";

        itemImage.src = item.thumbnail;
        itemImage.alt = item.title;
        itemTitle.textContent = item.title;
        itemPrice.textContent = `${item.price} сум`;
        quantitySpan.textContent = item.quantity;
        decreaseButton.textContent = "-";
        increaseButton.textContent = "+";
        removeButton.textContent = "Удалить";

        itemDetails.append(itemTitle, itemPrice);

        cartItem.onclick = () => {
            localStorage.setItem("prod", JSON.stringify(item));
            window.location.href = "./infoprod.html"
        }

        decreaseButton.onclick = (event) => {
            event.stopPropagation()
            if (item.quantity > 1) {
                item.quantity--;
                localStorage.setItem("cartItems", JSON.stringify(items));
                cart(items);
            }
        };

        increaseButton.onclick = (event) => {
            event.stopPropagation()

            if (item.quantity < item.stock) {
                item.quantity++;
                localStorage.setItem("cartItems", JSON.stringify(items));
                cart(items);
            }
        };

        removeButton.onclick = (event) => {
            event.stopPropagation()

            items.splice(index, 1);
            localStorage.setItem("cartItems", JSON.stringify(items));
            cart(items);
            window.location.reload();
        };

        itemActions.append(cont, removeButton);
        cont.append(decreaseButton, quantitySpan, increaseButton);
        cartItem.append(boxImage, box);
        boxImage.append(itemImage)
        box.append(itemDetails, itemActions);
        cartContainer.append(cartItem);
    });

    totalPriceElement.textContent = totalPrice.toLocaleString();
    totalDiscountElement.textContent = totalDiscount.toLocaleString();
    totalQuantityElement.textContent = totalQuantity;
    let count = document.querySelector(".cart-count")
    count.innerHTML = totalQuantity

    checkoutButton.onclick = () => {
        const modal = document.createElement("dialog");
        const title = document.createElement("h3");
        const overlay = document.createElement("div");

        modal.className = "cart-modal";
        title.className = "cart-title";
        title.innerHTML = `Спасибо за покупку! Ваш заказ будет доставлен в течение 1 рабочего дня.`;

        localStorage.removeItem("cartItems");
        cartContainer.innerHTML = "";
        container.innerHTML = "";

        overlay.className = "overlay";
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

        modal.append(title);
        container.append(overlay, modal);

        modal.style.display = "block";
        modal.style.opacity = 1;

        let opacity = 1;
        let interval = setInterval(() => {
            opacity -= 0.1;
            modal.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(interval);
                modal.style.display = "none";
                overlay.style.display = "none";
            }
        }, 300);

        const empty = document.createElement("div");
        const emptyMessage = document.createElement("div");
        const emptyImg = document.createElement("img");
        const emptyText1 = document.createElement("span");
        const emptyText2 = document.createElement("span");
        const emptyHome = document.createElement("a");

        empty.className = "empty-cart";
        emptyMessage.className = "empty-cart-message";
        emptyImg.className = "empty-cart-image";
        emptyText1.className = "empty-cart-t1";
        emptyText2.className = "empty-cart-t2";
        emptyHome.className = "empty-cart-home";
        emptyImg.src = "./images/cartUndefined.png"
        emptyText1.innerHTML = "В корзине пока пусто"
        emptyText2.innerHTML = "Начните с главной страницы — нужный товар можно найти через поиск или заглянуть в подборки"
        emptyHome.innerHTML = "На главную"
        emptyHome.href = "./index.html"
        emptyMessage.append(emptyText1, emptyText2, emptyHome);
        empty.append(emptyImg, emptyMessage);
        container.append(empty)
        return;
    };

}

const prod = JSON.parse(localStorage.getItem("cartItems")) || [];
cart(prod);

const home = document.querySelector(".logo");
home.onclick = () => {
    window.location.href = "./index.html";
};
