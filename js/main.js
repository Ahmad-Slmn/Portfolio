const icun = document.querySelector(".fa-moon");

const mylocal = localStorage.getItem("mode");

const links = document.querySelectorAll("nav ul li a")

links.forEach(ele => {

    ele.addEventListener("click", function (e) {

        document.querySelector("nav").classList.toggle("hidemenu")

        e.preventDefault()
    })
})

if (mylocal !== null) {
    if (mylocal == "dark-mode") {

        document.body.classList.add("drakmode")

        icun.classList.add("fa-sun")

    } else {
        document.body.classList.remove("drakmode")

        icun.classList.remove("fa-sun")
    }
}

document.querySelector(".fa-bars").onclick = function () {

    document.querySelector("nav").classList.toggle("hidemenu")
}


icun.onclick = function () {

    document.querySelector("nav").classList.toggle("hidemenu")

    this.classList.toggle("fa-sun")

    if (this.classList.contains("fa-sun")) {

        document.body.classList.add("drakmode")

        localStorage.setItem("mode", "dark-mode")

    } else {
        document.body.classList.remove("drakmode")

        localStorage.setItem("mode", "light-mode")
    }
}
