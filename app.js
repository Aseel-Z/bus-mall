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

// function newIndexRand() {
//   let newLeftIndex = genRand();
//   let newMidIndex = genRand();
//   while (newMidIndex === newLeftIndex) {
//     newMidIndex = genRand();
//   }
//   let newRightIndex = genRand();
//   while (newRightIndex === newLeftIndex || newRightIndex === newMidIndex) {
//     newRightIndex = genRand();
//   }
// }


// function compareIndexes() {
//   indexRand();
//   newIndexRand();
//   while (newLeftIndex === leftIndex || newLeftIndex === midIndex || newLeftIndex === rightIndex) {
//     newLeftIndex = genRand();
//   }
//   while (newMidIndex === midIndex || newMidIndex === leftIndex || newMidIndex === rightIndex) {
//     newMidIndex = genRand();
//   }
//   while (newRightIndex === rightIndex || newRightIndex === midIndex || newRightIndex === leftIndex) {
//     newRightIndex = genRand();
//   }
//   leftIndex = newLeftIndex;
//   midIndex = newMidIndex;
//   rightIndex = newRightIndex;

// }


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

// indexRand();

function createRandomImages() {
  // compareIndexes();
  indexRand();
  image1.src = Product.all[leftIndex].imagePath;
  image1.title = Product.all[leftIndex].productName;
  Product.all[leftIndex].displayCount++;
  console.log(image1.src)
  console.log(image1.title)
  console.log(Product.all[leftIndex].displayCount)

  image2.src = Product.all[midIndex].imagePath;
  image2.title = Product.all[midIndex].productName;
  Product.all[midIndex].displayCount++;
  console.log(image2.src)
  console.log(image2.title)
  console.log(Product.all[midIndex].displayCount)


  image3.src = Product.all[rightIndex].imagePath;
  image3.title = Product.all[rightIndex].productName;
  Product.all[rightIndex].displayCount++;
  console.log(image3.src)
  console.log(image3.title)
  console.log(Product.all[rightIndex].displayCount)
}
// indexRand();
// newIndexRand();
// compareIndexes();
createRandomImages();
rounds++;




imagesContainer.addEventListener('click', clickDo, false)


function clickDo(event) {
  if (event.target.id !== 'imagesContainer') {
    for (let i = 0; i < Product.all.length; i++) {
      if (event.target.title === Product.all[i].productName) {
        Product.all[i].clicksCount++;
        rounds++;
        console.log(Product.all[i].productName)
        console.log(Product.all[i].clicksCount)
        console.log(rounds)
      }
    }
    if (rounds === 25) {
      imagesContainer.removeEventListener('click', clickDo);
      // createChart();
    }
    else if (rounds < 25) {
      // newIndexRand();
      // compareIndexes();
      createRandomImages();
    }
  }
}




// Render Chart


// let namesLabels = [];
// for (let i = 0; i < Product.all.length; i++) {
//   namesLabels.push(Product.all[i].productName);
// }

// let votes = [];
// for (let i = 0; i < Product.all.length; i++) {
//   votes.push(Product.all[i].clicksCount);
// }

// let views = [];
// for (let i = 0; i < Product.all.length; i++) {
//   views.push(Product.all[i].displayCount);
// }

// function createChart() {

//   const chartSection = document.getElementById('myCanvas').getContext('2d');
//   let myChart = new Chart(chartSection, {
//     // The type of chart we want to create
//     type: 'bar',
//     // The data for our dataset
//     data: {
//       labels: namesLabels,
//       datasets: [
//         {
//           barPercentage: 0.5,
//           // barThickness: 6,
//           borderWidth: 5,
//           label: '# of votes:',
//           backgroundColor: 'rgb(50, 70, 80)',
//           borderColor: 'rgb(70, 70, 70)',
//           data: votes,
//         },
//         {
//           barPercentage: 0.5,
//           // barThickness: 6,
//           borderWidth: 5,
//           label: '# of views:',
//           backgroundColor: 'rgb(100, 125, 50)',
//           borderColor: 'rgb(100, 125, 50)',
//           data: views,
//         },
//       ],
//     },
//   });
// }

// lab13

// function dataLocal{}
//   products = JSON.parse(localStorage.getItem())
// }