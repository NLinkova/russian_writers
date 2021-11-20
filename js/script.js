window.onload = function hidePagesLoad() {
    let page1 = document.getElementById("page1")
    let page2 = document.getElementById("page2")
    let page3 = document.getElementById("page3")
    let page4 = document.getElementById("page4")
    let page5 = document.getElementById("page5")

    page1.style.display = "block"
    page2.style.display = "none"
    page3.style.display = "none"
    page4.style.display = "none"
    page5.style.display = "none"
}

function showPage(pageId) {

    let pages = document.getElementsByClassName("pages")
    for (let page of pages) {
        page.style.display = "none"
    }

    let pageToShow = document.getElementById(pageId)
    pageToShow.style.display = "block"
}

