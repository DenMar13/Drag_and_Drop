const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder1, .placeholder2, .placeholder3');
//console.log(item);
//console.log(placeholders);

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for(const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}
function dragstart(event) {
    //console.log('drag start', event.target);
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
    //console.log('drag end', event.target);
    event.target.classList.remove('hold', 'hide');
}

function dragover(event) {
    event.preventDefault();
    //console.log('drag over');
}

function dragenter(event) {
    event.target.classList.add('hovered');
    //console.log('drag enter');
}

function dragleave(event) {
    event.target.classList.remove('hovered');
    //console.log('drag leave');
}

function dragdrop(event) {
    event.target.append(item);
    event.target.classList.remove('hovered');
    //console.log('drag drop');
}
