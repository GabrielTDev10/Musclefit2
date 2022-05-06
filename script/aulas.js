const modal = document.createElement('div');
modal.classList.add('modal')

const closeModal = document.createElement('img');
closeModal.setAttribute('src', './img/fecha.png')
closeModal.classList.add('close')
closeModal.addEventListener('click', ()=> document.body.removeChild(modal))

modal.appendChild(closeModal)

function openModal(url){
  document.body.appendChild(modal)

  const video = `<iframe width="100%" height="100%" src=${url} class='video' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

  modal.innerHTML = modal.innerHTML + video;
  modal.appendChild(closeModal);
}