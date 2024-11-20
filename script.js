function insert_Row() {
    //Write your code here
	let table=document.getElementById('sampleTable')
	let row=table.insertRow(0);
	let col1=row.insertCell(0)
	let col2=row.insertCell(1)
	col1.innerText='New Cell1'
	col2.innerText='New Cell2'
	
  
  
}
