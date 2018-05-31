//Create JS function that converts array of objects like that: example:

var pets = [
	{id: 1, name: "dog", parentId: null},
	{id: 2, name: "Buddy", parentId: 1},
	{id: 3, name: "Daisy", parentId: 1},
	{id: 4, name: "cat", parentId: null},
	{id: 5, name: "Smokey", parentId: 4},
	{id: 6, name: "Oscar", parentId: 4}
]

// {
// 	dog: [
// 		{name: "Buddy"},
// 		{name: "Daisy"}
// 	],
// 	cat: [
// 		{name: "Smokey"},
// 		{name: "Oscar"}
// 	]
// }


function convertArray(arr){
	var newPets = {};
	var dogs = [];
	var cats = [];
	var j = 0;
	var k = 0;
	for (var i = 0; i < arr.length; i++){
		if(arr[i].parentId == arr[0].id) {
			dogs[j] = arr[i].name;
			j++;
		} 
		if(arr[i].parentId == arr[3].id){
			cats[k] = arr[i].name;
			k++;
		}
	}
	newPets[arr[0].name] = dogs;
	newPets[arr[3].name] = cats;
	return newPets;
}


// function covertArray(arr){
// 	var newPets = {};
// 	for ( var i = 0; i < arr.length; i++){
// 		if (arr[i].parentId ==  null){
// 			for( var j = 0; j < arr.length; j++){
// 				if(arr[j].parentId == arr[0].id){
// 					newPets[arr[0].name] = arr[j].name;
// 				} 
// 				if(arr[j].parentId == arr[3].id){
// 					newPets[arr[3].name] == arr[j].name;
// 				}
// 			}
// 		}
// 	}
// 	return newPets;
// }


