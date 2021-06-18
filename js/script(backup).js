const weight = document.querySelectorAll(".weight");

const pointBox = document.querySelectorAll(".point_box");

// Fill Listeners
// weight.addEventListener("dragstart", dragStart);
// weight.addEventListener("dragend", dragEnd);

for (const fill of weight) {
  fill.addEventListener('dragstart', dragStart);
  fill.addEventListener('dragend', dragEnd);
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
  this.className = `${getWeightClassName}`;
  getDropWeight = this;
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
  let getID =parseInt(this.id);

  this.className = "point_box hovered";
  this.append(getDropWeight);
  // console.log(weight);
  
  // if(getID === 0){
  //   document.getElementById("weight-point").setAttribute("style", "transform: rotate(0deg)");
  // }else if(getID> 0){
  //   document.getElementById("weight-point").setAttribute("style", "transform: rotate(12deg)");
  // }
  // else{
  //   document.getElementById("weight-point").setAttribute("style", "transform: rotate(-12deg)");
  // }
  // console.log(getID);
  // if(getID == 0){
  //   document.getElementById("weight-point").setAttribute("style", "transform: rotate(0deg)");
  // }else if(getID > 0){
  //   document.getElementById("weight-point").setAttribute("style", "transform: rotate(12deg)");
  // }else{
  //   document.getElementById("weight-point").setAttribute("style", "transform: rotate(-12deg)");
  // }

  // console.log("GET" + getWeight);

}


