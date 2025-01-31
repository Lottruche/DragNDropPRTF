var draggies = [];

var draggableElems = document.querySelectorAll('.draggable');
for (var i = 0; i < draggableElems.length; i++) {
    var draggableElem = draggableElems[i];
    var draggie = new Draggabilly(draggableElem, {});
    draggies.push(draggie);
}

var draggableElems = document.querySelectorAll('.lampe');
for (var i = 0; i < draggableElems.length; i++) {
    var draggableElem = draggableElems[i];
    var draggie = new Draggabilly(draggableElem, {
                containment: '.lampeBox',
    });
    draggies.push(draggie);
}

var draggableElems = document.querySelectorAll('.draggable');
for (var i = 0; i < draggableElems.length; i++) {
    var draggableElem = draggableElems[i];
    var draggie = new Draggabilly(draggableElem, {});
    draggies.push(draggie);

    draggie.on('dragStart', function () {
        console.log('dragStart');
        let element = this.element;
        element.classList.add('drag-Start');
        element.classList.remove('drag-End');
    });

    draggie.on('dragEnd', function () {
        console.log('dragEnd');
        let element = this.element;
        element.classList.remove('drag-Start');
        element.classList.add('drag-End');
    });
}