// Asynchronous LinearSearch function
async function LinearSearch(delay = 300) {
    let bars = document.querySelectorAll(".bar");
    let output=document.querySelector("#text");
    const num=document.querySelector("#serachEle").value;
    
    
    
    var flag = 0;
    // LinearSearch Algorithm
    for (var i = 0; i < bars.length; i += 1) {
      //Changing the color of current block to red
      bars[i].style.backgroundColor = "#FF4949";
    
      // To wait for .1 sec
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
    
      //Extracting the value of current block
      var value =parseInt(bars[i].innerHTML);
    
      // To compare block value with entered value
      if (value == num) {
        flag = 1;
        output.innerText = "Element Found";
        bars[i].style.backgroundColor = "#13CE66";
        break;
      } else {
        // Changing the color to the previous one
        bars[i].style.backgroundColor = "#F230D2";
      }
    }
    //When element is not found in the array
    if (flag == 0) {
      output.innerText = "Element Not Found";
    }
  }
    
  