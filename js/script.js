const weight = document.querySelector(".weight");

const pointBox = document.querySelectorAll(".point_box");

// Fill Listeners
weight.addEventListener("dragstart", dragStart);
weight.addEventListener("dragend", dragEnd);

// for (const fill of weight) {
//   fill.addEventListener('dragstart', dragStart);
//   fill.addEventListener('dragend', dragEnd);
// }

for (const empty of pointBox) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// Drag Functions
function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}
// this.classList.remove("point_box");
function dragEnd() {
  this.className = "weight five_kg";
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  console.log("Enter");
  e.preventDefault();
  this.className += " hovered";
}
function dragLeave() {
  console.log("Leave");
  // this.className = "point_box";
  this.classList.remove("hovered");
}
function dragDrop() {
  // e.preventDefault();
  // console.log(this.id + 1);
  // let getID =parseInt(this.id);
  // console.log(getID);
  // document.getElementsByClassName(".weight-point").setAttribute("style", "transform: rotate(12deg)");
  // this.id.
  this.className = "point_box hovered";
  this.append(weight);
  document.getElementById("weight-point").setAttribute("style", "transform: rotate(12deg)");

}
