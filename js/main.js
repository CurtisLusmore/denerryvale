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