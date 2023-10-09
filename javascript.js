

document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelectorAll(".butt");
    let display = document.querySelector(".display");
    console.log(btn);

    let btnArray = Array.from(btn);
console.log(btnArray)
let string ="";
btnArray.forEach((b)=>{
    b.addEventListener("click", (e)=>{
        console.log(e)
             
            if(e.target.value == "=")
            {
                string =eval(string);
                
               display.value = string ;
            }
            else if(e.target.value == 'C'){
                   string = "";
                   display.value =string;
            }

            else if(e.target.value =="DE")
            {
                string = string.substring(0,string.length-1)
                display.value = string ;
            }
            else{
                
                string +=e.target.value;
                display.value =""
                display.value =string;
                console.log(string)
            }

            if(string == "")
            {
                display.value ="0"
            }
    })
})

});





// document.addEventListener("keyup", function(event) {
//     // Handle keydown event
//     console.log("Key pressed: " + event.key);
// });