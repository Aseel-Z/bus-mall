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
      imagesContainer.removeEventListener('click', clickDo);
      createChart();
      dataLocal;
    }
    else if (rounds<25) {
      createRandomImages();
    }
  }
}



// Render results part Chart


let namesLabels =[];
for (let i = 0; i < products.length; i++) {
  namesLabels.push(products[i].productName);
}


let votes =[];
for (let i = 0; i < products.length; i++) {
  votes.push(products[i].clicksCount);
}

let views =[];
for (let i = 0; i < products.length; i++) {
  views.push(products[i].displayCount);
}

function createChart() {

  const chartSection = document.getElementById('myCanvas').getContext('2d');
  let myChart = new Chart(chartSection, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
      labels: namesLabels,
      datasets: [
        {
          barPercentage: 0.5,
          // barThickness: 6,
          borderWidth: 5,
          label: '# of votes:',
          backgroundColor: 'rgb(50, 70, 80)',
          borderColor: 'rgb(70, 70, 70)',
          data: votes,
        },
        {
          barPercentage: 0.5,
          // barThickness: 6,
          borderWidth: 5,
          label: '# of views:',
          backgroundColor: 'rgb(100, 125, 50)',
          borderColor: 'rgb(100, 125, 50)',
          data: views,
        },
      ],
    },
  });
}

// lab13

function dataLocal {
  products = JSON.parse(localStorage.getItem())
}