
function delayTime(time) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, time); 
    }) 
}
async function merge(bars, low, mid, high){
 
    const n1 = mid - low + 1;
    const n2 = high - mid;
  
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await delayTime(delay);
     
        // color
        bars[low + i].style.background = 'orange';
        left[i] = bars[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await delayTime(delay);
      
        // color
        bars[mid + 1 + i].style.background = 'yellow';
        right[i] = bars[mid + 1 + i].style.height;
    }
    await delayTime(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await delayTime(delay);
     
         // color
         if((n1 + n2) === bars.length){
            bars[k].style.background = 'green';
        }
        else{
            bars[k].style.background = 'lightgreen';
        }
        
        if(parseInt(left[i]) <= parseInt(right[j])){
           
           
            
            bars[k].style.height = left[i];
            i++;
            k++;
        }
        else{
           
           
            bars[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await delayTime(delay);
        
        // color
        if((n1 + n2) === bars.length){
            bars[k].style.background = 'green';
        }
        else{
            bars[k].style.background = 'lightgreen';
        }
        bars[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await delayTime(delay);
      
        // color
        if((n1 + n2) === bars.length){
            bars[k].style.background = 'green';
        }
        else{
            bars[k].style.background = 'lightgreen';
        }
        bars[k].style.height = right[j];
        j++;
        k++;
    }
}

async function MergeSort(bars, l, r){
  
    if(l >= r){
       
        return;
    }
    const m = l + Math.floor((r - l) / 2);
   
    await MergeSort(bars, l, m);
    await MergeSort(bars, m + 1, r);
    await merge(bars, l, m, r);
}
