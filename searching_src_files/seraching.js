createNewArray(50);
//to get user input size of array

    let sizeEle=document.querySelector('#size_input');
sizeEle.addEventListener('input',function(){
  
    createNewArray(parseInt(sizeEle.value));
   
  
});

//to receive the input speed input
let delay=260;
    let delayEle=document.querySelector('#speed_input');
delayEle.addEventListener('input',function(){
    delay=320-parseInt(delayEle.value);
})

function createNewArray(count=50,doSort=false) {
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
     let array = [];
    for (let i = 0; i < count; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    if(doSort===true)
    {
        // Sorting Array in ascending order
     array.sort(function (a, b) {
	return a - b;
    });
    }

    // select the div #bars element
    const bars = document.querySelector("#bars");
    //width of external div element
    const width=parseInt(bars.clientWidth);
    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < count; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 3}px`;
       bar.style.width=`${width/count}px`
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bar.innerHTML=Math.floor(parseInt(bar.style.height)/3);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

//to get user input algo
document.querySelector('.go').addEventListener('click',(e)=>{
    const Algo=document.querySelector('#algo');
console.log(Algo.value);
const val=Algo.value;
if(val=='linearSerach')
{document.querySelector('.Search').addEventListener('click',async function(){
   
    document.querySelector('.Search').disabled=true;
    await  LinearSearch(delay);
   document.querySelector('.Search').disabled=false;
   

});}
else
if(val=='binarySearch')
{document.querySelector('.Search').addEventListener('click',async function(){
   
    document.querySelector('.Search').disabled=true;
    createNewArray(sizeEle.value,true);
    console.log("array sorted");
    await  BinarySearch(delay);
   document.querySelector('.Search').disabled=false;
   

});}

});