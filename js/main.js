const imgModal = document.getElementById('img-modal');
const imgModalImg = document.getElementById('img-modal-img');

document
    .querySelectorAll('img.expand')
    .forEach(img => {
        img.onclick = function () {
            imgModal.style.display = 'block';
            imgModalImg.src = this.src;
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