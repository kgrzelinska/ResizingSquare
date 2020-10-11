// Square that changes size when you scroll the page
// Wraz ze skrollowaniem strony zmniejsza się lub zwiększa wielkość czarnego kwadratu.


const square = document.createElement("div");
document.body.appendChild(square);


let grow = true; // flaga

let size = 100; // wielkość kwadratu
square.style.width = size + "px";
square.style.height = size + "px";

const changeTheSize = function () {
    if (size >= window.innerWidth / 2) {
        grow = !grow; // grow = false;
    } else if (size <= 0) {
        grow = !grow; // grow = true;
    }

    if (grow) {
        size += 6;
        square.style.width = size + "px";
        square.style.height = size + "px";
    } else {
        size -= 6;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }
}

window.addEventListener("scroll", changeTheSize);