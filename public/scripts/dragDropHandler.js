function dragoverHandler(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

const VALID_FILE_TYPES = ['image/jpeg', 'image/png', 'video/mp4'];

function dropHandler(event) {
  event.preventDefault();
  let data = event.dataTransfer.items
  for (let i = 0; i < data.length; i++) {
    if (VALID_FILE_TYPES.includes(data[i].type)) {
      const asFile = data[i].getAsFile();
      console.log(data[i].type, data[i].kind, asFile);
    } else {
      window.alert("please make sure all files provided are either an image (jpeg or png) or a video (mp4)");
    }
  }
  console.log('drop');
}