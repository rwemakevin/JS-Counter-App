let totalCounts = document.getElementById("totalCounts");
let prevCounts = document.getElementById("prevCounts");
let counts = 0;


function increment(){
    counts += 1;
    totalCounts.textContent = counts;
}

function save(){
    let finalCounts = counts + " - ";
    prevCounts.textContent += finalCounts;
    counts = 0;
    totalCounts.textContent = counts;
}