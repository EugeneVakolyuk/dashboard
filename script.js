
// Aside height change function

const article = document.querySelector("article");
const aside = document.querySelector("aside");
const html = document.querySelector("html")

function getPageHeight() {
    let windowWidth = window.innerWidth;
    if (windowWidth > 1024) {
        let htmlHeight = html.clientHeight;
        let contentHeight = article.clientHeight;
        if (contentHeight > htmlHeight) {
            aside.style.height = contentHeight + 'px';
        } else {
            aside.style.height = htmlHeight + 'px';
        }
    } else {
        aside.style.height = 52 + 'px';
    }
}

window.addEventListener("load", function() {
    getPageHeight();
});

window.addEventListener("resize", function() {
    getPageHeight();
});

// Burger menu animation & Locking scrollbar

const burgerToggle = document.getElementById('burger-toggle');
const burgerElement = document.querySelector('.burger_btn > span')

const body = document.body;

burgerToggle.addEventListener('change', function() {
    body.style.overflow = burgerToggle.checked ? 'hidden' : 'auto';
    // burgerElement.style.transform = burgerToggle.checked ? 'rotate(45deg)' : 'none';
    // burgerElement.style.setProperty('--before-transform', burgerToggle.checked ? 'rotate(0)' : 'none');
    // burgerElement.style.setProperty('--before-top', burgerToggle.checked ? '0' : '-10px');
    // burgerElement.style.setProperty('--after-transform', burgerToggle.checked ? 'rotate(90deg)' : 'none');
    // burgerElement.style.setProperty('--after-top', burgerToggle.checked ? '0' : '10px');
});