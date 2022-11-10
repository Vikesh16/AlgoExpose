
async function SelectionSort(){
  let bars=document.querySelectorAll('.bar');
  //Selection Sort Algorithm
    // Assign 0 to min_idx
    var MinIndex = 0;
    for (let i = 0; i < bars.length; i += 1) {
   
     // Assign i to min_idx
     MinIndex = i;
   
     // Provide darkblue color to the ith bar
     bars[i].style.backgroundColor = "darkblue";
     for (let j = i + 1; j < bars.length; j += 1) {
   
       // Provide red color to the jth bar
       bars[j].style.backgroundColor = "red";
       
   
       // To store the integer value of jth bar to var1 
       var val1 = parseInt(bars[j].style.height);
   
       // To store the integer value of (min_idx)th bar to var2 
       var val2 = parseInt(bars[MinIndex].style.height);
         
       // Compare val1 & val2
       if (val1 < val2) {
         if (MinIndex !== i) {
   
           // Provide skyblue color to the (min-idx)th bar
           bars[MinIndex].style.backgroundColor = "  rgb(24, 190, 255)";
         }
         MinIndex= j;
       } else {
   
         // Provide skyblue color to the jth bar
         bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
       }
     }
     
       // To pause the execution of code for 300 milliseconds
       await new Promise((resolve) =>
         setTimeout(() => {
           resolve();
         }, delay)
       );
     // To swap ith and (min_idx)th bar
     swap(bars[i],bars[MinIndex]);
       
     // To pause the execution of code for 300 milliseconds
     await new Promise((resolve) =>
       setTimeout(() => {
         resolve();
       }, delay)
     );
   
     // Provide skyblue color to the (min-idx)th bar
     bars[MinIndex].style.backgroundColor = "  rgb(24, 190, 255)";
   
     // Provide lightgreen color to the ith bar
     bars[i].style.backgroundColor = " rgb(49, 226, 13)";


}
}
