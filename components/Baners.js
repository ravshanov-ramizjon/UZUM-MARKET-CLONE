const baners = [
    {
        id: 1,
        src: "https://images.uzum.uz/ct2qqotpq3gujfcfcrng/main_page_banner.jpg"
    },
    {
        id: 2,
        src: "https://images.uzum.uz/ct2qn7dpb7f3jk80oaq0/main_page_banner.jpg"
    },
    {
        id: 3,
        src: "https://images.uzum.uz/ct2q7gtpq3gujfcfcj80/main_page_banner.jpg"
    },
    {
        id: 4,
        src: "https://images.uzum.uz/ct3ekatpq3gujfcfidug/main_page_banner.jpg"
    }
];

export function Baners(items) {
    const baner = document.querySelector(".baner");

    if (!baner) {
        return;
    }

    const slider = document.createElement("img");
    slider.className = "slider";
    let currentIndex = 0;

    const changeSlide = () => {
        slider.src = items[currentIndex].src;
    };

    const goLeft = () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        changeSlide();
    };

    const goRight = () => {
        currentIndex = (currentIndex + 1) % items.length;
        changeSlide();
    };

    changeSlide();
    setInterval(goRight, 5000);

    const createButton = (className, text, onClick) => {
        const button = document.createElement("button");
        button.className = className;
        button.textContent = text;
        button.onclick = onClick;
        return button;
    };

    const leftButton = createButton("left-button", `<-`, goLeft);
    const rightButton = createButton("right-button", `->`, goRight);

    baner.append(slider, leftButton, rightButton);
}

Baners(baners);
