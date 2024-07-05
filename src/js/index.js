// The tapsi services slider
let timerID = null;
let counter = 0;
const active_item = (items, number) => {
    items.forEach((item, index) => {
        item.classList.remove("active");
        if (index == number) {
            item.classList.add("active");
        }
    })
}
const move_slides_wrapper = (amount) => {
    const slides_wrapper = document.querySelector(".slider--slides");
    slides_wrapper.style.transform = `translateX(${100 * amount}%)`;
}
function Slider() {
    const slider_items = document.querySelectorAll(".item");
    slider_items.forEach((item,index) => {
        item.addEventListener("click", () => {
            clearInterval(timerID);
            active_item(slider_items, index);
            move_slides_wrapper(index);
        })
    })
    timerID = setInterval(() => {
        counter = counter < 6 ? ++counter : 0;
        active_item(slider_items, counter);
        move_slides_wrapper(counter);

    }, 5000);
}

window.addEventListener("load",()=>{
    Slider();
})