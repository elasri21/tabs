const titles = document.querySelectorAll(".title") // get all buttons 
const boxes = document.querySelectorAll(".box");  // get boxes


titles.forEach(btn => {  
    btn.addEventListener("click", function(){  // add a click event to each button
        for(let j = 0; j< titles.length;j++){
            titles[j].classList.remove("active")  // remove active class from all buttons
        }
        for(let i = 0;i< boxes.length;i++){
            boxes[i].classList.remove("active")
            if(this.dataset.index == boxes[i].dataset.index) { 
                boxes[i].classList.add("active")  // add active class to the target boxes
                this.classList.add("active")  // add active class to the target button
            }
        }  
    })
})