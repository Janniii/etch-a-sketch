
let selection = "white";


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



let hoverToggle = 0;

window.addEventListener("keydown", (e) => {
    if (hoverToggle == 0 && e.keyCode == 72) {
      hoverToggle = 1;
      rows.forEach(row => row.addEventListener("mouseover", hover))
    }
      else if (hoverToggle != 0 && e.keyCode == 72) {
        hoverToggle = 0;
        rows.forEach(row => row.removeEventListener("mouseover", hover))
      }
});


const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.textContent = button.id);
buttons.forEach(button => button.setAttribute("style", `background-color: ${button.id}`));


buttons.forEach(button => button.addEventListener("click", selected))




let previous = "";
let r = 0;


function selected() {

  if (r == 0) {
    previous = this.id;
    this.classList.add("pressRematch");
  }



  if (r > 0 && previous != this.id) {
    const prev = document.getElementById(previous)
    prev.classList.remove("pressRematch")
    previous = this.id;
    
  }
    
    selection = this.id;
    this.classList.add("pressRematch");
    r = 1;

  

  // this.style.backgroundColor = "gold";

  
}




/*

function selected() {
  if ((lst[0]) == this.id) {
    this.classList.remove("pressRematch");
    lst.pop()
  }

  else {

    selection = this.id;
    this.classList.add("pressRematch");
    lst.push(this.id)
  };

  // this.style.backgroundColor = "gold";

  
}
*/
