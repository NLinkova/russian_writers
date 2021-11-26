let page1 = document.getElementById("page1")
let page2 = document.getElementById("page2")
let page3 = document.getElementById("page3")
let page4 = document.getElementById("page4")

let link1 = document.getElementById("writers")
let link2 = document.getElementById("tolstoy")
let link3 = document.getElementById("dostoevsky")
let link4 = document.getElementById("bulgakov")



function showPage1() {
    page1.style.display = "block"
    page2.style.display = "none"
    page3.style.display = "none"
    page4.style.display = "none"
    link1.classList.add('active');
    link2.classList.remove('active');
    link3.classList.remove('active');
    link4.classList.remove('active');

}

function showPage2() {
    page1.style.display = "none"
    page2.style.display = "block"
    page3.style.display = "none"
    page4.style.display = "none"
    link1.classList.remove('active');
    link2.classList.add('active');
    link3.classList.remove('active');
    link4.classList.remove('active');
}


function showPage3() {
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "block"
    page4.style.display = "none"
    link1.classList.remove('active');
    link2.classList.remove('active');
    link3.classList.add('active');
    link4.classList.remove('active');
}

function showPage4() {
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "none"
    page4.style.display = "block"
    link1.classList.remove('active');
    link2.classList.remove('active');
    link3.classList.remove('active');
    link4.classList.add('active');
}


showPage1()
