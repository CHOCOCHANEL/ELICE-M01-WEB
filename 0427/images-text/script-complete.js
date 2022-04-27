function onTextReady(text) {
    const urls = text.split('\n');
    for (const url of urls) {
      const image = new Image();
      image.src = url;
      image.className = 'animation';
      element.append(image);
    }
  }
  
  function onResponse(response) {
    return response.text();
  }
  
  const element = document.querySelector('.item');

  fetch('images.txt')
      .then(onResponse)
      .then(onTextReady);