let start = document.querySelector(".start");
let state =  document.querySelector(".box2,h5");
let decrease = document.querySelector(".decrease");
let Increase = document.querySelector(".increase");
let count = 0;

Increase.addEventListener("click",function() {
    count++;
    start.innerHTML = count;
    if (count > 0) {
        state.innerHTML = "Increase";
        return;
    }
});

decrease.addEventListener("click", function(){
    count--;
    start.innerHTML = count;
    if(count<0){
        state.innerHTML = "Decrease";
        return;
    }
});

box.addEventListener("click", function() {
    count = 0;
    start.innerHTML = count;
    if(count == 0) {
        state.innerHTML = "Zero state";
        return;
    }
});