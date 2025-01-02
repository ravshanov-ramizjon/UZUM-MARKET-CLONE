export function reload(arr, place, Component) {
    if (!place) {
        console.error("Родительский элемент не найден");
        return;
    }

    document.querySelectorAll('.main div').forEach(div => {
        if (!div.innerHTML.trim()) {
            div.remove();
        }
    });

    place.innerHTML = "";

    for (let item of arr) {
        let elem = Component(item);
        place.append(elem);
    }
}
