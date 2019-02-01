


function myProcessor() {
  function showBig(event) {
    const element = event.target;
    const src = element.getAttribute('data-big-src');
    const bigElement = document.getElementById('bigPicture');
    bigElement.innerHTML = '<img height="200" src="./' + src + '"/>';
    // element.removeEventListener('click', showBig);
  }

  const images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    const element = images[i];
    element.addEventListener('click', showBig);
  }
}

function myClick() {
  console.log('click');
}
    //проверка на существование по src

   let images = document.getAttribute("data-big-src");
var srcList = [];
for(var i = 0; i < images.length; i++) {
    srcList.push(images[i].src);
} 
console.log(srcList);