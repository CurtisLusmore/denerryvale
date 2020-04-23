const imgModal = document.getElementById('img-modal');
const imgModalImg = document.getElementById('img-modal-img');
const imgModalCap = document.getElementById('img-modal-cap');

document
    .querySelectorAll('img.expand')
    .forEach(img => {
        img.onclick = function () {
            imgModal.style.display = 'block';
            imgModalImg.src = this.src;
            imgModalCap.innerText = img.getAttribute('aria-title');
        }
    });

imgModal.onclick = function() {
    imgModal.style.display = "none";
}

const navExpand = function (event) {
    event.preventDefault();
    var classes = event
        .target
        .parentElement
        .classList;
    classes.toggle('nav-collapsed');
    classes.toggle('nav-expanded');
    return false;
};