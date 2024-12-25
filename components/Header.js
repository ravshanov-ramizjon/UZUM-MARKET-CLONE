import '../src/style.css';
import '../src/media.css';
import axios from 'axios';

export function Headers() {
    const container = document.querySelector(".cont");
    const header = document.querySelector(".header");
    const left = document.createElement("div");
    const logo = document.createElement("img");
    const catalog = document.createElement("button");
    const catalogDropdown = document.createElement("div");
    const categoryS = document.createElement("span");
    const searchContainer = document.createElement("div");
    const searchProd = document.createElement("input");
    const dropdown = document.createElement("div");
    const searchS = document.createElement("span");
    const productList = document.createElement("ul");
    const right = document.createElement("div");
    const rightBlock = document.createElement("div");
    const profile = document.createElement("div");
    const cabinet = document.querySelector(".cabinet");
    const favorite = document.createElement("a");
    const filter = document.createElement("button");
    const favoriteTwo = document.createElement("a");
    const cart = document.createElement("a");
    const cartCount = document.createElement("span");

    let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    let signIn = user ? user.name : "Войти";

    left.className = "left";
    logo.className = "logo";
    catalog.className = "catalog";
    catalogDropdown.className = "category-dropdown hidden";
    categoryS.className = "catigoryS";
    searchContainer.className = "search-container";
    searchProd.className = "searchProd";
    dropdown.className = "dropdown hidden";
    searchS.className = "catigoryS";
    productList.className = "product-list";
    right.className = "right";
    rightBlock.className = "rightBlock";
    profile.className = "profile";
    favorite.className = "favorite";
    filter.className = "filterad-prod";
    favoriteTwo.className = "favoriteMedia";
    cart.className = "cart";
    cartCount.className = "cart-count";

    logo.src = "./images/logoUzum.png";
    catalog.innerHTML = "Каталог";
    categoryS.innerHTML = "Категории товаров";
    searchProd.placeholder = "Искать товары";
    searchProd.type = "search";
    searchS.innerHTML = "Поиск";
    profile.innerHTML = `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 12.0002V10.7779C11 10.1296 10.7366 9.50788 10.2678 9.04946C9.79893 8.59104 9.16304 8.3335 8.5 8.3335H3.5C2.83696 8.3335 2.20107 8.59104 1.73223 9.04946C1.26339 9.50788 1 10.1296 1 10.7779V12.0002" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 5.8889C7.38071 5.8889 8.5 4.79448 8.5 3.44445C8.5 2.09442 7.38071 1 6 1C4.61929 1 3.5 2.09442 3.5 3.44445C3.5 4.79448 4.61929 5.8889 6 5.8889Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    </svg> ${signIn}`;
    favorite.innerHTML = "Избранное";
    favoriteTwo.innerHTML = `<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.8401 2.60999C20.3294 2.099 19.7229 1.69364 19.0555 1.41708C18.388 1.14052 17.6726 0.998169 16.9501 0.998169C16.2276 0.998169 15.5122 1.14052 14.8448 1.41708C14.1773 1.69364 13.5709 2.099 13.0601 2.60999L12.0001 3.66999L10.9401 2.60999C9.90843 1.5783 8.50915 0.998704 7.05012 0.998704C5.59109 0.998704 4.19181 1.5783 3.16012 2.60999C2.12843 3.64169 1.54883 5.04096 1.54883 6.49999C1.54883 7.95903 2.12843 9.3583 3.16012 10.39L4.22012 11.45L12.0001 19.23L19.7801 11.45L20.8401 10.39C21.3511 9.87924 21.7565 9.27281 22.033 8.60535C22.3096 7.93789 22.4519 7.22248 22.4519 6.49999C22.4519 5.77751 22.3096 5.0621 22.033 4.39464C21.7565 3.72718 21.3511 3.12075 20.8401 2.60999Z" stroke="#ACACAC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    favorite.href = "./favorite.html";
    favoriteTwo.href = "./favorite.html";
    filter.innerHTML = `<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5.75C6 4.7835 6.7835 4 7.75 4C8.69794 4 9.46984 4.75369 9.49914 5.69452C9.49713 5.71274 9.49609 5.73125 9.49609 5.75C9.49609 5.76875 9.49713 5.78726 9.49914 5.80548C9.46984 6.74631 8.69794 7.5 7.75 7.5C6.7835 7.5 6 6.7165 6 5.75ZM7.75 3C9.09803 3 10.2195 3.96994 10.4547 5.25H18.5C18.7761 5.25 19 5.47386 19 5.75C19 6.02614 18.7761 6.25 18.5 6.25H10.4547C10.2195 7.53006 9.09803 8.5 7.75 8.5C6.40197 8.5 5.28047 7.53006 5.04534 6.25H1.49976C1.22361 6.25 0.999756 6.02614 0.999756 5.75C0.999756 5.47386 1.22361 5.25 1.49976 5.25H5.04534C5.28047 3.96994 6.40197 3 7.75 3ZM10.5 14.25C10.5 13.2835 11.2835 12.5 12.25 12.5C13.2119 12.5 13.9925 13.276 13.9999 14.2361C13.9998 14.2407 13.9998 14.2453 13.9998 14.25C13.9998 14.2547 13.9998 14.2593 13.9999 14.2639C13.9925 15.224 13.2119 16 12.25 16C11.2835 16 10.5 15.2165 10.5 14.25ZM14.9547 14.75C14.7195 16.0301 13.598 17 12.25 17C10.902 17 9.78047 16.0301 9.54534 14.75H1.50366C1.22752 14.75 1.00366 14.5261 1.00366 14.25C1.00366 13.9739 1.22752 13.75 1.50366 13.75H9.54534C9.78047 12.4699 10.902 11.5 12.25 11.5C13.598 11.5 14.7195 12.4699 14.9547 13.75H18.5037C18.7798 13.75 19.0037 13.9739 19.0037 14.25C19.0037 14.5261 18.7798 14.75 18.5037 14.75H14.9547Z" fill="black"></path>
</svg>`
    cart.innerHTML = "Корзина";
    cart.href = "./cart.html";
    cartCount.textContent = "0";
    cart.appendChild(cartCount);

    const overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.className = "hidden";
    document.body.appendChild(overlay);

    let allCategory = [];
    let allProducts = [];


    async function fetchCategory() {
        try {
            const response = await axios.get('http://localhost:3001/products');
            allProducts = response.data;
            allCategory = getCategoryCount(allProducts);
            updateCategoryList(allCategory);
            updateProductList(allProducts);
        } catch (error) {
            console.error("Ошибка при загрузке продуктов:", error);
            allCategory = [];
        }
    }

    function getCategoryCount(products) {
        const categoryCount = {};
        products.forEach((product) => {
            const category = product.category;
            categoryCount[category] = categoryCount[category] ? categoryCount[category] + 1 : 1;
        });
        return categoryCount;
    }

    function updateCategoryList(categoryCount) {
        catalogDropdown.innerHTML = '';
        for (const [category, count] of Object.entries(categoryCount)) {
            const listItem = document.createElement("li");
            const countItem = document.createElement("div");
            listItem.className = "list-category-li"
            countItem.className = "countItem";
            countItem.textContent = `${count} товара`;
            listItem.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            catalogDropdown.appendChild(listItem);
            listItem.appendChild(countItem);

            listItem.onclick = () => {
                localStorage.setItem('selectedCategory', category); // Сохранить категорию
                window.location.href = "./categoryFiltr.html"; // Перейти на страницу фильтрации
            };
        }
    }

    function updateProductList(products) {
        productList.innerHTML = '';
        products.forEach((product) => {
            const listItem = document.createElement("li");
            const addToCartBtn = document.createElement("button");
            const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            listItem.textContent = product.title;
            addToCartBtn.textContent = "Добавить в корзину";
            addToCartBtn.onclick = () => {
                if (!cartItems.some((existingItem) => existingItem.id === product.id)) {
                    cartItems.push(product);
                    localStorage.setItem("cartItems", JSON.stringify(cartItems));
                    alert("Товар добавлен в корзину");
                    window.location.reload();
                } else {
                    alert("Этот товар уже в корзине");
                }
            };
            listItem.appendChild(addToCartBtn);
            productList.appendChild(listItem);
        });
    }

    function filterProducts(query) {
        const filteredProducts = allProducts.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        updateProductList(filteredProducts);
    }
    const cartNav = document.querySelector(".cart-count")
    function updateCartCount() {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartCount.textContent = cartItems.length;
        if (cartNav) {
            cartNav.innerHTML = ` ${cartItems.length}`;
            if (cartItems.length === 0) {
                cartNav.style.display = "none"
            } else {
                cartNav.style.display = "flex"
            }
        } else {
            console.error('Элемент #cart-count не найден в DOM.');
        }
        if (cartItems.length === 0) {
            cartCount.style.display = "none"
        } else {
            cartCount.style.display = "block"
        }

    }
    const catalogNav = document.querySelector(".catalog-nav")
    catalog.onclick = function () {
        catalogDropdown.classList.toggle("hidden");
        overlay.classList.toggle("visible");
    };
    catalogNav.onclick = function () {
        catalogDropdown.classList.toggle("hidden");
        overlay.classList.toggle("visible");
    };

    overlay.onclick = function () {
        catalogDropdown.classList.add("hidden");
        overlay.classList.remove("visible");
    };

    searchProd.onfocus = function () {
        dropdown.className = "dropdown visible";
    };

    searchProd.oninput = function () {
        const query = searchProd.value;
        if (query) {
            filterProducts(query);
        } else {
            updateProductList(allProducts);
        }
    };

    document.onclick = function (event) {
        if (!event.target.closest(".search-container")) {
            dropdown.className = "dropdown hidden";
        }
    };

    container.append(left, right);
    left.append(logo, catalog, searchContainer);
    right.append(rightBlock);
    searchContainer.append(searchProd, dropdown);
    dropdown.append(searchS, productList);
    rightBlock.append(profile, favorite, favoriteTwo, filter, cart);
    header.append(catalogDropdown);
    catalogDropdown.append(categoryS);

    fetchCategory();
    updateCartCount();
    if (document.querySelector(".backdrop") && document.querySelector(".modal")) {

        const backdrop = document.querySelector('.backdrop');
        const modal = document.querySelector('.new-sign-in');
        const closeButton = document.querySelector('.close');
        const phoneNumberInput = document.getElementById('phoneNumber');
        const userNameInput = document.getElementById('userName');
        const submitButton = document.getElementById('submitButton');

        function toggleModal() {
            backdrop.classList.toggle('hidden');
            modal.classList.toggle('hidden');
        }

        closeButton.addEventListener('click', toggleModal);

        function validatePhoneNumber(phone) {
            return /^\d{9}$/.test(phone);
        }

        async function handleSubmit() {
            const phone = phoneNumberInput.value.trim();
            const nameinput = userNameInput.value.trim();
            const name = `${nameinput.charAt(0).toUpperCase() + nameinput.slice(1)}`;

            if (!name) {
                alert('Введите ваше имя.');
                return;
            }

            if (!validatePhoneNumber(phone)) {
                alert('Неверный формат номера телефона.');
                phoneNumberInput.value = "";
                return;
            }

            try {
                const user = await sendPhoneNumber(phone, name);

                if (user) {
                    loginUser(user); // Вход пользователя, если всё прошло успешно
                }
            } catch (error) {
                console.error(error.message);
                alert('Не удалось выполнить операцию. Попробуйте снова.');
            }
        }

        async function sendPhoneNumber(phone, name) {
            const response = await fetch('http://localhost:3001/users');
            const users = await response.json();

            const existingUser = users.find(user => user.phone === `+998${phone}`);
            if (existingUser) {
                if (existingUser.name === name) {
                    alert(`Ваш номер уже зарегистрирован. \n Войти в аккаунт ${existingUser.name}?`);
                    return existingUser;
                } else {
                    alert(`Номер +998${phone} уже зарегистрирован другим пользователем.`);
                    phoneNumberInput.value = ''; // Очистить поле ввода телефона
                    userNameInput.value = ''; // Очистить поле ввода имени
                    return null;
                }
            } else {
                return await createUser(phone, name); // Если пользователь не найден, создаем нового
            }
        }

        async function createUser(phone, name) {
            let like = localStorage.getItem('cartItems');
            let cart = localStorage.getItem('likedItems');

            const newUser = {
                phone: `+998${phone}`,
                name: name,
                email: `${name}@example.com`,
                password: 'defaultPassword',
                purchases: 0,
                carts:[cart],
                likes:[like]
            };

            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error('Не удалось создать пользователя.');
            }

            return await response.json();
        }

        function loginUser(user) {
            localStorage.setItem('user', JSON.stringify(user));
            signIn = user.name; // Устанавливаем имя пользователя в переменную signIn
            profile.innerHTML = `
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 12.0002V10.7779C11 10.1296 10.7366 9.50788 10.2678 9.04946C9.79893 8.59104 9.16304 8.3335 8.5 8.3335H3.5C2.83696 8.3335 2.20107 8.59104 1.73223 9.04946C1.26339 9.50788 1 10.1296 1 10.7779V12.0002" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 5.8889C7.38071 5.8889 8.5 4.79448 8.5 3.44445C8.5 2.09442 7.38071 1 6 1C4.61929 1 3.5 2.09442 3.5 3.44445C3.5 4.79448 4.61929 5.8889 6 5.8889Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> ${user.name}`;
            alert(`Добро пожаловать, ${user.name}!`);
            toggleModal(); // Закрыть модальное окно
        }

        function logoutUser() {
            // Открыть модальное окно
            document.getElementById('logoutModal').style.display = 'block';

            // Обработчик кнопки подтверждения
            document.getElementById('confirmLogout').onclick = function () {
                // Удалить информацию о пользователе из localStorage
                localStorage.removeItem('user');

                // Обновить интерфейс
                profile.innerHTML = `
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 12.0002V10.7779C11 10.1296 10.7366 9.50788 10.2678 9.04946C9.79893 8.59104 9.16304 8.3335 8.5 8.3335H3.5C2.83696 8.3335 2.20107 8.59104 1.73223 9.04946C1.26339 9.50788 1 10.1296 1 10.7779V12.0002" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 5.8889C7.38071 5.8889 8.5 4.79448 8.5 3.44445C8.5 2.09442 7.38071 1 6 1C4.61929 1 3.5 2.09442 3.5 3.44445C3.5 4.79448 4.61929 5.8889 6 5.8889Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> Войти`;
                localStorage.removeItem('cartItems');
                localStorage.removeItem('likedItems');

                // Закрыть модальное окно
                document.getElementById('logoutModal').style.display = 'none';

                // Показать сообщение об успешном выходе
                alert('Вы успешно вышли');
            };

            // Обработчик кнопки отмены
            document.getElementById('cancelLogout').onclick = function () {
                // Закрыть модальное окно без выполнения выхода
                document.getElementById('logoutModal').style.display = 'none';
            };
        }


        submitButton.addEventListener('click', function () {
            handleSubmit(); // Вызов handleSubmit при клике на кнопку
        });

        // Выход из аккаунта
        profile.addEventListener('click', () => {
            if (localStorage.getItem('user')) {
                logoutUser();
            } else {
                toggleModal(); // Открыть модальное окно для входа
            }
        });
        cabinet.addEventListener('click', () => {
            if (localStorage.getItem('user')) {
                logoutUser();
            } else {
                toggleModal(); // Открыть модальное окно для входа
            }
        });
    }

}
Headers()
