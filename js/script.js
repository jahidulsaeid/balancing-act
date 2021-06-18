const weight = document.querySelectorAll(".weight");

const pointBox = document.querySelectorAll(".point_box");


for (const fill of weight) {
  fill.addEventListener("dragstart", dragStart);
  fill.addEventListener("dragend", dragEnd);
}

for (const empty of pointBox) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// Drag Functions
let getWeight;
let getWeightClassName;
let getDropWeight;
let getID;

let rightValue = [];
let leftValue = [];

function dragStart() {
  getWeight = this.id;
  getWeightClassName = this.className;
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
  // console.log("hello"+this);
  getDropWeight = this;

}

function dragEnd() {
  // this.className = "weight five_kg";
  this.className = `${getWeightClassName} weight-drop`;
  // getDropWeight = this;
  
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  // console.log("Enter");
  e.preventDefault();
  this.className += " hovered";
}
function dragLeave() {
  // console.log("Leave");
  // this.className = "point_box";
  this.classList.remove("hovered");
}
function dragDrop() {
  getID = parseInt(this.id);

  this.className = "point_box hovered";
  this.append(getDropWeight);
  calculation();
}

function calculation() {
  if (getID > 0) {
    rightValue.push(getWeight);
  } else {
    leftValue.push(getWeight);
  }
  let getLeftValue = getDuplicate(leftValue);
  let getRightValue = getDuplicate(rightValue);
  // console.log("LEFT " + getLeftValue);
  // console.log("RIGHT " + getRightValue);

  let rightSum = 0;

  for (let i = 0; i < getRightValue.length; i++) {
    let currentValue = parseInt(getRightValue[i]);
    rightSum += currentValue;
  }

  let leftSum = 0;

  for (let i = 0; i < getLeftValue.length; i++) {
    let currentValue = parseInt(getLeftValue[i]);
    leftSum += currentValue;
  }
  // console.log("rightSum" + rightSum);
  // console.log("leftSum" + leftSum);
  // console.log("Get Id"+ getID);
  let checkValueIsGero = leftSum+rightSum;
  if(rightSum > leftSum){
    document.getElementById("weight-point").setAttribute("style", "transform: rotate(12deg)");
  }else if(rightSum == leftSum){
    document.getElementById("weight-point").setAttribute("style", "transform: rotate(0deg)");
  }else{
    document.getElementById("weight-point").setAttribute("style", "transform: rotate(-12deg)");
  }
}

function getDuplicate(data) {
  return data.filter((vaule, index) => data.indexOf(vaule) == index);
}

// console.log(rightValue);
