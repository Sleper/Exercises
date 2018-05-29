function sumArray(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
    	sum += arr[i];
	}
	return sum;
}

var array = [1,2,3,4,5,6,7];
sumArray(array);