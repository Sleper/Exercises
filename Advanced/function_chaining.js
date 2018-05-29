//Create JS program with function chaining (example: name("John").go("Shop").buy("Food") => expected output: "John goes to shop to buy food");
var obj = function()  {
	var i = "";

	var name = function(name) {
		i += name;
		return this;
	}
	var go = function(location) {
		i += ' goes to ' + location;
		return this; 
	}
	var buy = function(item) {
		i += ' to buy ' + item;
		console.log(i);
		return this;
	}

	return {name:name, go:go, buy:buy};
}
var x = new obj();
x.name('John').go('Shop').buy('Food');
