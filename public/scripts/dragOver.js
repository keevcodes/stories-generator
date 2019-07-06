function dragoverHandler(event) {
  event.preventDefault();
  console.log('drag over');
  event.dataTransfer.dropEffect = 'move';
}

function dropHandler(event) {
  event.preventDefault();
  console.log('drop', event);
}