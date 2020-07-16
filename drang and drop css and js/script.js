const cards = document.querySelectorAll('.card') //query nos cards
const dropzones = document.querySelectorAll('.dropzone') //query nos dropzones


cards.forEach(card => {
  // para cada card adiciona os eventos
    card.addEventListener('dragstart', dragstart) //inicio do click
    card.addEventListener('drag', drag) //enquanto esta segurando o click
    card.addEventListener('dragend', dragend) //ao soltar o click
})

function dragstart() {
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    // this referencia o card
    this.classList.add('is-dragging') //adiciona uma class is-dragging no card que esta clicado
}

function drag() {
  //nao foi utilizado
}

function dragend() {
  // ao soltar remove a class highlight dos dropzones
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

    // this = card
    this.classList.remove('is-dragging') //remove a class is-dragging do card clicado
}

dropzones.forEach( dropzone => {
  //para cada drop zone adiciona os eventos
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
  //ao entrar no dropzone    
}

function dragover() {
    //ao estar em cima do dropzone
    // this = dropzone
    this.classList.add('over')

    // obtem o card clicado pela class que esta nele
    const cardBeingDragged = document.querySelector('.is-dragging')

    // this = dropzone
    //faz um append no dragzone e coloca o card la
    this.appendChild(cardBeingDragged)
}

function dragleave() {
    // log('DROPZONE: Leave ')
    // this = dropzone
    this.classList.remove('over')
}

function drop() {
    // log('DROPZONE: dropped ')
    //em alguns casos mesmo depois do leave ele nao remove a class over q colocamos
    // entao para resolver removemos aqui
    this.classList.remove('over')
}