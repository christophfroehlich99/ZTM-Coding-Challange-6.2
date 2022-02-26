

function addingNumbers (num1,num2,target){
	if (num1+num2 === target){
		return true
	}
	else {return false}

}


function getArrayAndIndex (arrayTarget){
	let array = arrayTarget[0];
	let target = arrayTarget[1];
	getTwoNumbers(array);
}

const looper = (array,index,target) => {
	let num1 =array[index];
		for (let i = index+1; i < array.length; i++){
			num = array[i];
    		console.log(num);
				if (addingNumbers(num1,num,target) === true) {
					endArray.push([num1,num]);
				}
			}
		}

let endArray = [];
function getTwoNumbers(array,target) {
	let index = 0;
	while((array.length-1) != index){	
		looper(array,index,target);
		if (endArray.length > 0){
			return endArray;
		}
		index++;
		console.log(`yeye ${index}`);

	}
	console.log(`we cant reach ${target} with the numbers from ${array}`)
	
}







console.log(getTwoNumbers([1,3,5,8,2,5,9,6,2,7],20));