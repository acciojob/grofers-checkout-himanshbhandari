const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const table=document.getElementByTagsName("table")
	const tdArr=document.getElement.querySelector.All('.price');
	let sum=tdArr.reduce((preve,element)=>[
		return preve+element;
	])
	const tr=document.createElement('tr');
	const td=document.createElement('td');
	tr.appendChild(td);
	
  
};

getSumBtn.addEventListener("click", getSum);

