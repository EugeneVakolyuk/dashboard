
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

// Locking scrollbar

const burgerToggle = document.getElementById('burger-toggle');
const body = document.body;

burgerToggle.addEventListener('change', function() {
    if (this.checked) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
});