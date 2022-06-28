
let selection = "white";

let redValue = Math.floor(Math.random() * 256);
let greenValue = Math.floor(Math.random() * 256);
let blueValue = Math.floor(Math.random() * 256);
let opacityValue = 0.0;

let selectionTrail = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${opacityValue})`;


let currentColors;

const colorList  = { 
  "white": "hsl(0, 0%, 97%)",
  "black":  "hsl(0, 0%, 16%)",
  "grey": "hsl(0, 0%, 74%)",
  "gold": "hsl(50, 100%, 77%)",
  "silver": "hsl(0, 0%, 89%)",
  "red": "hsl(0, 100%, 70%)",
  "green": "hsl(82, 100%, 72%)",
  "blue": "hsl(180, 25%, 80%)",
  "yellow": "hsl(60, 100%, 75%)",
  "orange": "hsl(22, 95%, 70%)",
  "brown": "hsl(25, 60%, 78%)",
  "purple": "hsl(259, 77%, 70%)",
  "pink": "hsl(300, 45%, 88%)",
  "cyan": "hsl(180, 7%, 51%)"
}


const colorListReverse  = { 
  "hsl(0, 0%, 97%)": "white",
  "hsl(0, 0%, 16%)": "black",
  "hsl(0, 0%, 74%)": "grey",
  "hsl(50, 100%, 77%)": "gold",
  "hsl(0, 0%, 89%)": "silver",
  "hsl(0, 100%, 70%)": "red",
  "hsl(82, 100%, 72%)": "green",
  "hsl(180, 25%, 80%)": "blue",
  "hsl(60, 100%, 75%)": "yellow",
  "hsl(22, 95%, 70%)": "orange",
  "hsl(25, 60%, 78%)": "brown",
  "hsl(259, 77%, 70%)": "purple",
  "hsl(300, 45%, 88%)": "pink",
  "hsl(180, 7%, 51%)": "cyan"
}








const container = document.querySelector("#container");


function createGrid(n) {


    for (let i = 0; i < n; i++) {
      const columnDiv = document.createElement("div");
      columnDiv.setAttribute("style", `background-color: grey; width: ${container.clientWidth}px; height: ${container.clientHeight / n}px; display: flex;`);
      columnDiv.classList.add("column");
      container.appendChild(columnDiv);
    }



    const columnDivs = document.querySelectorAll(".column");

    columnDivs.forEach(col => {
        
        for (let i = 0; i < n; i++) {
            const row = document.createElement("div");
            row.classList.add("row");         
            row.setAttribute("style", `background-color: rgba(105, 105, 105, 0.0); width: ${container.clientWidth / n}px; height: ${container.clientHeight / n}px; border-style: solid; border-width: thin;`);
            col.appendChild(row);
        }
    })

}

createGrid(30);




const rows = document.querySelectorAll(".row");


rows.forEach(row => row.addEventListener("click", () => {
    row.style.backgroundColor = `${selection}`
}))



function hover() {
    this.style.backgroundColor = selection;
}




function trailHover() {
  // selection =`rgba(${redValue}, ${greenValue}, ${blueValue}, ${opacityValue+=0.1})`
  selectionTrail = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${opacityValue+=0.1})`
  //this.style.backgroundColor = selection;
  this.style.backgroundColor = selectionTrail;

  if (opacityValue.toFixed(1) >= 1.0) {
    redValue = Math.floor(Math.random() * 256);
    greenValue = Math.floor(Math.random() * 256);
    blueValue = Math.floor(Math.random() * 256);
    opacityValue = 0.0;

  }



  console.log(selection);
  console.log(opacityValue);
}



// const hov = document.querySelector(".hover");

const hov = document.querySelector("#Hover");
const light = document.querySelector("#Light");
const trail = document.querySelector("#Trail");


let hoverToggle = 0;
let lightToggle = 0;
let trailToggle = 0;

window.addEventListener("keydown", (e) => {
    const rows = document.querySelectorAll(".row");

    if (trailToggle == 0) {


    if (hoverToggle == 0 && e.keyCode == 72) {
      hoverToggle = 1;
      hov.classList.add("select2");
      rows.forEach(row => row.addEventListener("mouseover", hover))
    }
      else if (hoverToggle != 0 && e.keyCode == 72) {
        hoverToggle = 0;
        hov.classList.remove("select2");
        rows.forEach(row => row.removeEventListener("mouseover", hover))
      }

    
    if (lightToggle == 0 && e.keyCode == 76) {
      lightToggle = 1;
      light.classList.add("select2");
      previous = colorList[previous];
      selection = colorList[selection];

      }

     
      else if (lightToggle != 0 && e.keyCode == 76) {
        lightToggle = 0;
        light.classList.remove("select2");
        previous = colorListReverse[previous];
        selection = colorListReverse[selection];
       
      }
    }
  

    if (trailToggle == 0 && e.keyCode == 84) {
      hov.classList.remove("select2");;
      light.classList.remove("select2");

      // buttons.forEach(button => button.classList.remove("select"));

      trail.classList.add("select2");
      trailToggle = 1;
      // selection = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${opacityValue})`
      selectionTrail = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${opacityValue})`
      rows.forEach(row => row.addEventListener("mouseover", trailHover))

    }

      else if (trailToggle != 0 && e.keyCode == 84) {
        trail.classList.remove("select2")
        rows.forEach(row => row.removeEventListener("mouseover", trailHover))
        trailToggle = 0;
      }


    

  



  
   });


const buttons = document.querySelectorAll(".buttongroup button");

buttons.forEach(button => button.textContent = button.id);
buttons.forEach(button => button.setAttribute("style", `background-color: ${button.id}`));


buttons.forEach(button => button.addEventListener("click", selected))






const whiteButton = document.querySelector("#white");
whiteButton.classList.add("select");
let previous = whiteButton.id;


function selected() {
  

  if (lightToggle == 0 && previous != this.id) {
    let prev = document.getElementById(previous);
    prev.classList.remove("select");
    previous = this.id;
    selection = this.id;
  }

  else if (lightToggle == 1 && previous != colorList[this.id]) {
    let prevvy = document.getElementById(colorListReverse[previous]);
    prevvy.classList.remove("select")
    if (this.id in colorList) {
      previous = colorList[this.id];
      selection = colorList[this.id];
    }
  }

this.classList.add("select");



}



const toolButtons = document.querySelectorAll(".whoops .tooltip");

toolButtons.forEach(toolButton => toolButton.addEventListener("click", getFunctionality))



function getFunctionality() {
  
  if (this.id == "Grid") {
    while (true) {
    let gSize = prompt("Please Input a number between 1 and 100 to generate a new grid.")

    if (gSize == null) {
      break;
    }

    else if (parseInt(gSize) >= 1 && parseInt(gSize) <= 100) {

      const coll = document.querySelectorAll(".column");
      const roww = document.querySelectorAll(".row");

      coll.forEach(col => col.remove());
      roww.forEach(row => row.remove())



      gSize = parseInt(gSize)
      createGrid(gSize);
      reGrid()
      break;
    }


    }
  }

  if (this.id == "Tiles") {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.style.backgroundColor = selection);
  }

  if (this.id == "Border") {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.style.borderColor = selection);
  }
}




function reGrid () {


  const rows = document.querySelectorAll(".row");
  rows.forEach(row => row.addEventListener("click", () => {
    row.style.backgroundColor = `${selection}`
    }))
  hov.classList.remove("select2")
  light.classList.remove("select2")
  hoverToggle = 0;
  lightToggle = 0;


}
