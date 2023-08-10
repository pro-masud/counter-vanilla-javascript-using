// gets counter number

let count = 0;

// get span value
const value = document.getElementById("value");

const btns = document.querySelectorAll(".btn");


// event handling here 

btns.forEach((btn, index) => {
    btn.addEventListener("click", function(e){
         const styles = e.currentTarget.classList;

        // conditional step btns

        if(styles.contains("descrease")){
            count --;
            value.style.color = "red";
        }else if(styles.contains("increase")){
            count ++;
            value.style.color = "green";
        }else{
            count = 0;
            value.style.color = "#333";
        }
        // set data for here
        value.textContent = count;
    });
});