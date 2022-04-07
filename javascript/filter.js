const selector = document.querySelector("#filter");


selector.addEventListener("click", filter);

function filter(e) {
    let filter_option = selector.options[selector.selectedIndex].value;
    const box_elements = document.querySelectorAll(".box");
    if (filter_option == 'all') {
        box_elements.forEach((element) => {
            element.style.display = "flex"; // you can use "block" instead of "flex"
        });
    } else {
        box_elements.forEach((element) => {
            element.style.display = "none";
        });
        document.querySelectorAll(`.${filter_option}`).forEach((element) => {
            element.style.display = "flex"; // you can use "block" instead of "flex"
        });
    }


}