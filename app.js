'use strict';
let rounds = 0;
const namesArr = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
const imagesArr = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg']

function Product(name, image) {
  this.productName = name;
  this.imagePath = image;
  this.displayCount = 0;
  this.clicksCount = 0;
  Product.all.push(this);
}
Product.all = [];
for (let i = 0; i < namesArr.length; i++) {
  new Product(namesArr[i], imagesArr[i]);
}

if(localStorage.length>0){
  Product.all.items=JSON.parse(localStorage.getItem('clicksCount/displayCount'));
}
// helper function - Random Number Generator

function genRand() {
  return Math.floor(Math.random() * (Product.all.length - 1));
}

// random index array generator
let leftIndex = 0;
let midIndex = 0;
let rightIndex = 0;

function indexRand() {
  leftIndex = genRand();
  midIndex = genRand();
  while (midIndex === leftIndex) {
    midIndex = genRand();
  }
  rightIndex = genRand();
  while (rightIndex === leftIndex || rightIndex === midIndex) {
    rightIndex = genRand();
  }
}






//  3 Random Image Render Part

const imagesContainer = document.getElementById('images');
const image1 = document.createElement('img');
imagesContainer.appendChild(image1);
image1.id = 'left-image';

const image2 = document.createElement('img');
imagesContainer.appendChild(image2);
image2.id = 'middle-image';

const image3 = document.createElement('img');
imagesContainer.appendChild(image3);
image3.id = 'right-image';
indexRand();

function createRandomImages() {

  indexRand();
  image1.src = Product.all[leftIndex].imagePath;
  image1.title = Product.all[leftIndex].productName;
  Product.all[leftIndex].displayCount++;
 
  image2.src = Product.all[midIndex].imagePath;
  image2.title = Product.all[midIndex].productName;
  Product.all[midIndex].displayCount++;

  image3.src = Product.all[rightIndex].imagePath;
  image3.title = Product.all[rightIndex].productName;
  Product.all[rightIndex].displayCount++;
}
createRandomImages();
rounds++;


imagesContainer.addEventListener('click', clickDo);

function clickDo(event) {
  if (event.target.id !== 'imagesContainer') {
    for (let i = 0; i < Product.all.length; i++) {
      if (event.target.title === Product.all[i].productName) {
        Product.all[i].clicksCount++;
        rounds++;
      }
    }
    if (rounds === 25) {
      imagesContainer.removeEventListener('click', clickDo);
    }
    else if (rounds < 25) {
      createRandomImages();
    }
  }
}

//  Render results part
const resultSection = document.getElementById('section2');
const list = document.createElement('ul');
resultSection.appendChild(list);

for (let i = 0; i < Product.all.length; i++) {
  let Eli = document.createElement('li');
  list.appendChild(Eli);
  Eli.textContent = `${Product.all[i].productName} had ${Product.all[i].clicksCount} votes, and ${Product.all[i].displayCount} views.`
}










