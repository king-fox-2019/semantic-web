// Slide
let slide1 = document.getElementById("pancasila"),
    slide2 = document.getElementById("sila-pertama"),
    slide3 = document.getElementById("sila-kedua"),
    slide4 = document.getElementById("sila-ketiga"),
    slide5 = document.getElementById("sila-keempat"),
    slide6 = document.getElementById("sila-kelima"),
    slide_length = document.querySelectorAll(".slide")

// Container
let container = document.getElementById("container")

// List
let slide_list = [slide1, slide2, slide3, slide4, slide5, slide6]

// Fungsi Tombol 
// Next
let counter = 1
function next() {
    console.log("next:" + counter)
    if (counter < slide_length.length) {
        slide_list[counter].classList.add("active")
        backgroundFunc(counter)
        counter += 1
    } else {
        counter = slide_length.length
    }
}

// Prev
function prev() {
    if (counter > 1) {
        slide_list[counter - 1].classList.remove("active")
        counter -= 1
    } else {
        counter -= 1
    }
    backgroundFunc(counter - 1)
    console.log("prev" + counter)
}

// Fungsi Background 
function backgroundFunc(x) {
    if (x == 0) {
        container.style.background = "white"
    } else if (x == 1) {
        container.style.background = "white"
    } else if (x == 2) {
        container.style.background = "#dcdcdc"
    } else if (x == 3) {
        container.style.background = "#7c4019"
    } else if (x == 4) {
        container.style.background = "#8b8b8b"
    } else if (x == 5) {
        container.style.background = "#e8672e"
    }
}

