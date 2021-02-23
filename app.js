// variable1 : number of clicks for each picture
// variable2 : number of time the picture was displayed
// variable3 : calculated - result - must show after 25 selections,only
//  display three unique products - create img through JS - DOM - Render

// Instructions 1
// Create a constructor function that creates an object associated with each product, and has the following properties:
// Name of the product
// File path of image
// Times the image has been shown
// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.
// For each of the three images, increment its property of times it has been shown by one.
// Attach an event listener to the section of the HTML page where the images are going to be displayed.
// Once the users ‘clicks’ a product, generate three new products for the user to pick from.

'use strict';
// create array for all the 20 products, then push objects(products) constructed by an object constructor
let rounds = 0;
let products = [];
function Product(name, image) {
  this.productName = name;
  this.imagePath = image;
  this.displayCount = 0;
  this.clicksCount = 0;
  products.push(this);
}

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');


// declare a function that returns 3 random unique indexes, stored in an array

function getRandomIndexArray() {
  let randomIndexArray = [];
  let randomProductsIndex = Math.floor(Math.random() * products.length);
  randomIndexArray.push(randomProductsIndex);
  // push if unique
  for (let j = 0; j < 2; j++) {
    randomProductsIndex = Math.floor(Math.random() * products.length);
    for (let i = 0; i < randomIndexArray.length; i++) {
      if (randomProductsIndex !== randomIndexArray[i]) {
        randomIndexArray.push(randomProductsIndex);
      } 
      else {
        j=j-1;
      }
      //   console.log(randomIndexArray);
    //  console.log(products[randomProductsIndex].displayCount);
    }
  }
  return randomIndexArray;
}

console.log(getRandomIndexArray());

// Image Render Part

let imagesContainer = document.getElementById('images');
let image1 = document.createElement('img');
imagesContainer.appendChild(image1);
image1.id='left-image';

let image2 = document.createElement('img');
imagesContainer.appendChild(image2);
image2.id='middle-image';

let image3 = document.createElement('img');
imagesContainer.appendChild(image3);
image3.id='right-image';

function createRandomImages() {
  let randomIndex = getRandomIndexArray();

  image1.src = products[randomIndex[0]].imagePath;
  image1.title = products[randomIndex[0]].name;
  products[randomIndex[0]].displayCount++;


  image2.src = products[randomIndex[1]].imagePath;
  image2.title = products[randomIndex[1]].name;
  products[randomIndex[1]].displayCount++;


  image3.src = products[randomIndex[2]].imagePath;
  image3.title = products[randomIndex[2]].name;
  products[randomIndex[2]].displayCount++;
}

createRandomImages();
rounds++;


imagesContainer.addEventListener('click', function (event) {
  for (let i = 0; i < products.length; i++) {
    if(event.target.title=== products[i].name){
      products[i].clicksCount++;
      rounds++;
      if (rounds<25) {
        createRandomImages();
      }
    };
  };
});


for (let y = 0; y < products.length; y++) {
  console.log(products[y].clicksCount);
  console.log( products[y].displayCount);
};

// Render results part
const resultSection = document.getElementById('section2');
const list = document.createElement('ul');
resultSection.appendChild(list);

for (let i = 0; i < products.length; i++) {
  let Eli = document.createElement('li');
  list.appendChild(Eli);
  Eli.textContent = products[i].name + ': '+products[i].clicksCount;
}


// Questions:
// how to resize and position chart?
// the display property and position and float, should be for the parent or child?
// how to position images?
// what is event exactly?
// what is target?
// shall i add eventListener to the images parent / container?
// how to prevent user from clicking more than once?









