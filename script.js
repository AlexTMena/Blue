
function closeModal() {
    modalContainer = document.getElementById('modal');
    modalContainer.classList.add('d-none');
}

function openModal(type, number) {
    modalContainer = document.getElementById('modal');
    modalContainer.classList.remove('d-none');
    var modalContainer = document.getElementById('modalImgContainer');
    
    if (type == 0) {
        var displayedPic = document.getElementsByClassName('psdToHtml')[number].getAttribute('src');
        modalContainer.setAttribute('src',displayedPic);
        console.log(displayedPic);
    } else {
        var displayedPic = document.getElementsByClassName('js-app')[number].getAttribute('src');
        modalContainer.setAttribute('src',displayedPic);
        console.log(displayedPic);
    }
}