
let selection = "white";


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



const hov = document.querySelector(".hover");



let hoverToggle = 0;
let lightToggle = 0;

window.addEventListener("keydown", (e) => {
    if (hoverToggle == 0 && e.keyCode == 72) {
      hoverToggle = 1;
      rows.forEach(row => row.addEventListener("mouseover", hover))
    }
      else if (hoverToggle != 0 && e.keyCode == 72) {
        hoverToggle = 0;
        rows.forEach(row => row.removeEventListener("mouseover", hover))
      }

    
    if (lightToggle == 0 && e.keyCode == 76) {
      lightToggle = 1;
      previous = colorList[previous];
      selection = colorList[selection];

      

      }

     

    
      else if (lightToggle != 0 && e.keyCode == 76) {
        lightToggle = 0;
        previous = colorListReverse[previous];
        selection = colorListReverse[selection];
        
      
       
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
