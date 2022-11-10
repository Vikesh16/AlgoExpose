

// Asynchronous BinarySearch function
async function BinarySearch(delay = 300) {
    let bars = document.querySelectorAll(".bar");
    let output=document.querySelector("#text");
    const num=document.querySelector("#serachEle").value;


output.innerText = "";

// BinarySearch Algorithm

let start = 0;
let end =document.querySelectorAll(".bar").length;
let flag = 0;
while (start <= end) {
	//Middle index
	let mid = Math.floor((start + end) / 2);
	bars[mid].style.backgroundColor = "#FF4949";

	//Value at mid index
	let value = Number(bars[mid].innerHTML);

	
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);

	//Current element is equal to the element
	//entered by the user
	if (value == num) {
	output.innerText = "Element Found";
	bars[mid].style.backgroundColor = "#13CE66";
	flag = 1;
	break;
	}
	//Current element is greater than the element
	//entered by the user
	if (value > num) {
	end = mid - 1;
	bars[mid].style.backgroundColor = "#6b5b95";
	} else {
	start = mid + 1;
	bars[mid].style.backgroundColor = "#6b5b95";
	}
}
if (flag === 0) {
	output.innerText = "Element Not Found";
}
}


