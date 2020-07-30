const modal = document.getElementById('image-modal');
const img = document.getElementById('image-for-modal');
const modalimg = document.getElementById('display-modal');

img.onclick = function () {
  modal.style.display = 'flex';
  modalimg.src = this.src;
};

window.onclick = (e) => {
  if (modal.style.display === 'flex') {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  }
};
