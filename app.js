const containerGrid = document.querySelector(".container-grid"); 
const newGridBtn = document.querySelector("#newGridBtn")
const sizeHolder = document.querySelector("#sizeHolder"); 
const create = ()=> {
    sizeHolder.textContent="16x16";
    for(i=0; i<256; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        containerGrid.appendChild(square);
        square.addEventListener("mouseover", ()=> {
        square.classList.add("colored");
        
        }); 
    }
}

create(); 

const newGrid = ()=> {

    const input = parseInt(prompt("Enter a number 1-100")); 
    containerGrid.innerHTML="";
    containerGrid.style.setProperty("grid-template-columns", `repeat(${input},2fr)`); 
    containerGrid.style.setProperty("grid-template-rows", `repeat(${input},2fr)`); 
    sizeHolder.textContent=input+"x"+input; 
    if(input <=100 && input >0){
        for(i=0; i<input*input; i++){
            const square = document.createElement("div");
            square.classList.add("square");
            containerGrid.appendChild(square);
            square.addEventListener("mouseover", ()=> {
            square.classList.add("colored");
            
            }); 
        
        }
    }
    else{
        alert("numbers 1-100 only, click new grid again");
        create(); 
    }    
}



