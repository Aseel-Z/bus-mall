'use strict'

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
let products = [];

function Product(name,image) {
this.productName = name;
this.imagePath = image;
this.displayCount = 0;
this.clicksCount = 0;
products.push(this);
}

new Product('bag','img/bag.jpg',this.displayCount);
new Product('banana','img/banana.jpg',this.displayCount);
new Product('bathroom','img/bathroom.jpg',this.displayCount);
new Product('boots','img/boots.jpg',this.displayCount);
new Product('breakfast','img/breakfast.jpg',this.displayCount);
new Product('bubblegum','img/bubblegum.jpg',this.displayCount);
new Product('chair','img/chair.jpg',this.displayCount);
new Product('cthulhu','img/cthulhu.jpg',this.displayCount);
new Product('dog-duck','img/dog-duck.jpg',this.displayCount);
new Product('dragon','img/dragon.jpg',this.displayCount);
new Product('pen','img/pen.jpg',this.displayCount);
new Product('pet-sweep','img/pet-sweep.jpg',this.displayCount);
new Product('scissors','img/scissors.jpg',this.displayCount);
new Product('shark','img/shark.jpg',this.displayCount);
new Product('sweep','img/sweep.jpg',this.displayCount);
new Product('tauntaun','img/tauntaun.jpg',this.displayCount);
new Product('unicorn','img/unicorn.jpg',this.displayCount);
new Product('usb','img/usb.jpg',this.displayCount);
new Product('water-can','img/water-can.jpg',this.displayCount);
new Product('wine-glass','img/wine-glass.jpg',this.displayCount);



// this.displayCount gets updated;increments by 1,
//  each time the associated images is displayed randomly, if img url contains name then +1
// let c = 0;
// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
//     c+=1;
// }
// console.log(c)
let randomIndexArray=[]
// let randomImagePath=[]
for (let j = 1; j <= 3; j++) {
 let randomProductsIndex = Math.floor(Math.random()*products.length);
 randomIndexArray.push(randomProductsIndex);
//  randomImagePath.push(products[randomProductsIndex].imagePath)
 products[randomProductsIndex].displayCount++;
 console.log(randomProductsIndex)
//  console.log(randomImagePath)
 console.log(products[randomProductsIndex].displayCount);
}

for (let r = 0; r < randomIndexArray.length; r++) {
    let li1 = document.getElementById("left-image");
    let image = document.createElement('img');
    li1.appendChild(image);
    image.src = products[randomIndexArray[r]].imagePath;
    image.addEventListener("click", function(){
    products[randomIndexArray[r]].clicksCount++;})

}
console.log(products[0].clicksCount)

// console.log(products[randomProductsIndex].displayCount)

// addEventListener

// document.addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
//   });
  