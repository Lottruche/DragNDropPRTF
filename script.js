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

let draggie = new Draggabilly( '.draggableLampe', {
    handle: '.handleLampe',
});
