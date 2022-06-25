

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

createGrid(30);



const rows = document.querySelectorAll(".row");


rows.forEach(row => row.addEventListener("click", () => {
    row.style.backgroundColor = "gold";
}))

