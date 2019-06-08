

const sendData = (data) => {
  const XHR = new XMLHttpRequest();
  const formData = new FormData();

  for (msg in data) {
    formData.append(msg, data[msg]);
  }

  // success
  XHR.addEventListener('load', function(event) {
    console.log('Yeah! Data sent and response loaded.');
  });

  // error
  XHR.addEventListener('error', function(event) {
    console.log('Oops! Something went wrong.');
  });

  XHR.open('POST', 'http://localhost:3000/');

  XHR.send(formData);

}

