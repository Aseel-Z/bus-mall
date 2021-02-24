
'use strict';
let rounds = 0;
let products = [];
function Product(name, image) {
  this.productName = name;
  this.imagePath = image;
  this.displayCount = 0;
  this.clicksCount = 0;
  products.push(this);
}

let namesArr =   ['bag','banana', 'bathroom','boots' ,'breakfast', 'bubblegum', 'chair', 'cthulhu','dog-duck','dragon', 'pen','pet-sweep','scissors','shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
let imagesArr = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg','img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg']

for (let i = 0; i < 20; i++) {
  new Product (namesArr[i],imagesArr[i]);
}


// helper function - Random Number Generator

function genRand(){
  return Math.floor(Math.random() * (products.length-1));
}

// random index array generator

function indexRand (){
  let leftIndex = genRand();
  let midIndex = genRand();
  while (midIndex === leftIndex) {
    midIndex = genRand();
  }
  let rightIndex = genRand();
  while (rightIndex === leftIndex || rightIndex === midIndex ) {
    rightIndex = genRand();
  }

  return [leftIndex,midIndex,rightIndex]
}


//  3 Random Image Render Part

const imagesContainer = document.getElementById('images');
const image1 = document.createElement('img');
imagesContainer.appendChild(image1);
image1.id='left-image';

const image2 = document.createElement('img');
imagesContainer.appendChild(image2);
image2.id='middle-image';

const image3 = document.createElement('img');
imagesContainer.appendChild(image3);
image3.id='right-image';

function createRandomImages() {
  let x = indexRand();

  image1.src = products[x[0]].imagePath;
  image1.title = products[x[0]].productName;
  products[x[0]].displayCount++;


  image2.src = products[x[1]].imagePath;
  image2.title = products[x[1]].productName;
  products[x[1]].displayCount++;


  image3.src = products[x[2]].imagePath;
  image3.title = products[x[2]].productName;
  products[x[2]].displayCount++;
}

createRandomImages();
rounds++;

imagesContainer.addEventListener('click', clickDo, false)


function clickDo (event){
  if (event.target.id !== 'imagesContainer'){
    for (let i = 0; i < products.length; i++) {
      if(event.target.title=== products[i].productName){
        products[i].clicksCount++;
        rounds++;
      }
    }
    if (rounds === 25) {
      imagesContainer.removeEventListener('click', clickDo)
    }
    else if (rounds<25) {
      createRandomImages();
    }
  }
}


//  Render results part
const resultSection = document.getElementById('section2');
const list = document.createElement('ul');
resultSection.appendChild(list);

for (let i = 0; i < products.length; i++) {
  let Eli = document.createElement('li');
  list.appendChild(Eli);
  Eli.textContent = `${products[i].productName} had ${products[i].clicksCount} votes, and ${products[i].displayCount} views.`
}











