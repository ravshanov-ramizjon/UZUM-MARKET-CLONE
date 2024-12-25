export function reload(arr, place, Component) {
    if (!place) {
        console.error("Родительский элемент не найден");
        return;
    }
    
    place.innerHTML = "";

    for (let item of arr) {
        let elem = Component(item);
        place.append(elem);
    }
}
