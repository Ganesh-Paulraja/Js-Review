const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "img/Frame 5.png",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "img/Frame 2.png",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "img/Frame 3.png",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "img/Frame 4.png",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// selectors
const img = document.querySelector('.image-box img');
const userName = document.getElementsByClassName('user-name')[0];
const userPro = document.getElementsByClassName('user-profession')[0];
const userOpin = document.getElementsByClassName('user-opinion')[0];
const prevBtn = document.getElementsByClassName('prev-btn')[0];
const nextBtn = document.getElementsByClassName('next-btn')[0];
const supriseBtn = document.getElementsByClassName('suprise-btn')[0];
let curruntItem = 0;
const updateItem = () => {
  img.setAttribute('src', reviews[curruntItem].img);
  userName.innerText = reviews[curruntItem].name;
  userPro.innerText = reviews[curruntItem].job;
  userOpin.innerText = reviews[curruntItem].text;
}
window.addEventListener("DOMContentLoaded", function () {
  updateItem();
});
const nextItem = () => {
  if (curruntItem == reviews.length -1) {
    curruntItem = 0;
  } else {
    curruntItem++;
  }
  updateItem();
}
const prevItem = () => {
  if(curruntItem == 0) {
    curruntItem = 3
  } else {
    curruntItem--;
  }
  updateItem();
}
var haveIt = [];
// const supItem = () => {
//   var random = Math.floor(Math.random() * reviews.length);
//   curruntItem = random;
//   updateItem();
// }
let autoUpdate = setInterval(nextItem, 5000);
const mouseOver = () => {
  clearInterval(autoUpdate);
}
const mouseleave = () => {
  autoUpdate = setInterval(nextItem, 5000);
}
var nums = [0, 1, 2, 3];
var newNum = nums;
function randomRun () { 
    var remVar = curruntItem;
    newNum = nums.filter(function (val) {
      return val != remVar;
    })
    var z = Math.floor(Math.random() * newNum.length);
    curruntItem = newNum[z];
    updateItem();
}
// const supItem = () => {
//   curruntItem = randomRun();
//   updateItem();
// }