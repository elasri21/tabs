const titles = document.querySelectorAll(".title")
const boxes = document.querySelectorAll(".box");


titles.forEach(btn => {
    btn.addEventListener("click", function(){
        for(let j = 0; j< titles.length;j++){
            titles[j].classList.remove("active")
        }
        for(let i = 0;i< boxes.length;i++){
            boxes[i].classList.remove("active")
            if(this.dataset.index == boxes[i].dataset.index) {
                boxes[i].classList.add("active")
                this.classList.add("active")
            }
        }  
    })
})