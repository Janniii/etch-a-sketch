

const container = document.querySelector("#container");


function createGrid(n) {

    for (let i = 0; i < n; i++) {
      const columnDiv = document.createElement("div");
      columnDiv.setAttribute("style", `background-color: grey; width: ${container.clientWidth}px; height: ${container.clientHeight / n}px; display: flex;`);
      columnDiv.classList.add("column");
      container.appendChild(columnDiv);
    }



    const columnDivs = document.querySelectorAll(".column");
    console.log(columnDivs.clientHeight, "wow");

    columnDivs.forEach(col => {
        
        for (let i = 0; i < n; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            row.setAttribute("style", `background-color: green; width: ${container.clientWidth / n}px; height: ${container.clientHeight / n}px; border-style: solid; border-width: thin;`);
            col.appendChild(row);
        }
    })

}

createGrid(80);


const rows = document.querySelectorAll(".row");


rows.forEach(row => row.addEventListener("click", () => {
    row.style.backgroundColor = "gold";
}))



function hover() {
    this.style.backgroundColor = "pink";

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

