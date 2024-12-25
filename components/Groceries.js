export function Groceries(item) {
    const groceries = document.createElement("div")
    const gridElement = document.createElement("div")
    const boxImg = document.createElement("div")
    const imgProd = document.createElement("img")
    const likeBtn = document.createElement("button")
    const title = document.createElement("span")
    const cartPrice = document.createElement("div")
    const boxPrice = document.createElement("div")
    const skidPrice = document.createElement("span")
    const price = document.createElement("span")
    const cart = document.createElement("button")

    gridElement.className = "product"
    boxImg.className = "boxImg"
    likeBtn.className = "likeBtn"
    cartPrice.className = "cartPrice"
    boxPrice.className = "boxPrice"
    skidPrice.className = "skidPrice"
    price.className = "price"
    cart.className = "cartBtn"
    title.className = "title"

    imgProd.src = item.thumbnail
    likeBtn.innerHTML = `<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.8401 2.60999C20.3294 2.099 19.7229 1.69364 19.0555 1.41708C18.388 1.14052 17.6726 0.998169 16.9501 0.998169C16.2276 0.998169 15.5122 1.14052 14.8448 1.41708C14.1773 1.69364 13.5709 2.099 13.0601 2.60999L12.0001 3.66999L10.9401 2.60999C9.90843 1.5783 8.50915 0.998704 7.05012 0.998704C5.59109 0.998704 4.19181 1.5783 3.16012 2.60999C2.12843 3.64169 1.54883 5.04096 1.54883 6.49999C1.54883 7.95903 2.12843 9.3583 3.16012 10.39L4.22012 11.45L12.0001 19.23L19.7801 11.45L20.8401 10.39C21.3511 9.87924 21.7565 9.27281 22.033 8.60535C22.3096 7.93789 22.4519 7.22248 22.4519 6.49999C22.4519 5.77751 22.3096 5.0621 22.033 4.39464C21.7565 3.72718 21.3511 3.12075 20.8401 2.60999Z" stroke="#ACACAC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    title.innerHTML = item.title
    skidPrice.innerHTML = item.discountPercentage
    price.innerHTML = item.price
    cart.innerHTML = `<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_39)">
<path d="M4.87516 11.9167C5.17432 11.9167 5.41683 11.6742 5.41683 11.375C5.41683 11.0759 5.17432 10.8334 4.87516 10.8334C4.57601 10.8334 4.3335 11.0759 4.3335 11.375C4.3335 11.6742 4.57601 11.9167 4.87516 11.9167Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.8332 11.9167C11.1323 11.9167 11.3748 11.6742 11.3748 11.375C11.3748 11.0759 11.1323 10.8334 10.8332 10.8334C10.534 10.8334 10.2915 11.0759 10.2915 11.375C10.2915 11.6742 10.534 11.9167 10.8332 11.9167Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.541504 0.541626H2.70817L4.15984 7.79454C4.20937 8.04392 4.34504 8.26794 4.54309 8.42737C4.74114 8.5868 4.98897 8.6715 5.24317 8.66663H10.5082C10.7624 8.6715 11.0102 8.5868 11.2083 8.42737C11.4063 8.26794 11.542 8.04392 11.5915 7.79454L12.4582 3.24996H3.24984" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_39">
<rect width="13" height="13" fill="white"/>
</clipPath>
</defs>
</svg>
`

    let likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];

    likeBtn.onclick = (event) => {
        event.stopPropagation()
        if (!likedItems.some((existingItem) => existingItem.id === item.id)) {
            likedItems.push(item);
            likeBtn.innerHTML = `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.84 1.60999C19.3292 1.099 18.7228 0.693641 18.0554 0.417078C17.3879 0.140516 16.6725 -0.00183105 15.95 -0.00183105C15.2275 -0.00183105 14.5121 0.140516 13.8446 0.417078C13.1772 0.693641 12.5708 1.099 12.06 1.60999L11 2.66999L9.94 1.60999C8.9083 0.578303 7.50903 -0.00129629 6.05 -0.00129628C4.59096 -0.00129627 3.19169 0.578303 2.16 1.60999C1.1283 2.64169 0.548706 4.04096 0.548706 5.49999C0.548706 6.95903 1.1283 8.3583 2.16 9.38999L3.22 10.45L11 18.23L18.78 10.45L19.84 9.38999C20.351 8.87924 20.7563 8.27281 21.0329 7.60535C21.3095 6.93789 21.4518 6.22248 21.4518 5.49999C21.4518 4.77751 21.3095 4.0621 21.0329 3.39464C20.7563 2.72718 20.351 2.12075 19.84 1.60999Z" fill="#7000FF"/>
          </svg>`;
        } else {
            const index = likedItems.findIndex((existingItem) => existingItem.id === item.id);
            likedItems.splice(index, 1);
            likeBtn.innerHTML = `<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8401 2.60999C20.3294 2.099 19.7229 1.69364 19.0555 1.41708C18.388 1.14052 17.6726 0.998169 16.9501 0.998169C16.2276 0.998169 15.5122 1.14052 14.8448 1.41708C14.1773 1.69364 13.5709 2.099 13.0601 2.60999L12.0001 3.66999L10.9401 2.60999C9.90843 1.5783 8.50915 0.998704 7.05012 0.998704C5.59109 0.998704 4.19181 1.5783 3.16012 2.60999C2.12843 3.64169 1.54883 5.04096 1.54883 6.49999C1.54883 7.95903 2.12843 9.3583 3.16012 10.39L4.22012 11.45L12.0001 19.23L19.7801 11.45L20.8401 10.39C21.3511 9.87924 21.7565 9.27281 22.033 8.60535C22.3096 7.93789 22.4519 7.22248 22.4519 6.49999C22.4519 5.77751 22.3096 5.0621 22.033 4.39464C21.7565 3.72718 21.3511 3.12075 20.8401 2.60999Z" stroke="#ACACAC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
        }
        localStorage.setItem("likedItems", JSON.stringify(likedItems));
        reloadWithoutScroll()
    };

    const isLiked = likedItems.some((existingItem) => existingItem.id === item.id);
    if (isLiked) {
        likeBtn.innerHTML = `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.84 1.60999C19.3292 1.099 18.7228 0.693641 18.0554 0.417078C17.3879 0.140516 16.6725 -0.00183105 15.95 -0.00183105C15.2275 -0.00183105 14.5121 0.140516 13.8446 0.417078C13.1772 0.693641 12.5708 1.099 12.06 1.60999L11 2.66999L9.94 1.60999C8.9083 0.578303 7.50903 -0.00129629 6.05 -0.00129628C4.59096 -0.00129627 3.19169 0.578303 2.16 1.60999C1.1283 2.64169 0.548706 4.04096 0.548706 5.49999C0.548706 6.95903 1.1283 8.3583 2.16 9.38999L3.22 10.45L11 18.23L18.78 10.45L19.84 9.38999C20.351 8.87924 20.7563 8.27281 21.0329 7.60535C21.3095 6.93789 21.4518 6.22248 21.4518 5.49999C21.4518 4.77751 21.3095 4.0621 21.0329 3.39464C20.7563 2.72718 20.351 2.12075 19.84 1.60999Z" fill="#7000FF"/>
    </svg>`;
    }

    
    if (item.category === "groceries") {
        groceries.append(gridElement)
    }
    
    function reloadWithoutScroll() {
        const scrollPosition = window.scrollY;
        window.location.reload();
        window.scrollTo(0, scrollPosition);
    }
    
    
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cart.onclick = (event) => {
        event.stopPropagation()
        if (!cartItems.some((existingItem) => existingItem.id === item.id)) {
            cartItems.push(item);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            reloadWithoutScroll()
            alert("Товар добавлен в корзину");
        }else{
            alert("Этот товар уже в корзине");
        }
    };

    gridElement.onclick = () => {
        localStorage.setItem("prod", JSON.stringify(item));
        window.location.href = "./infoprod.html"
    }

    gridElement.append(boxImg, title, cartPrice)
    boxImg.append(imgProd)
    boxImg.append(imgProd, likeBtn)
    cartPrice.append(boxPrice, cart)
    boxPrice.append(skidPrice, price)

    return groceries
}

