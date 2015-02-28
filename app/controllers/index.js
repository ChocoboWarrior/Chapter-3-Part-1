// Convert the model and make into a title property
function transform(model) {
	// Need to convert the model to a JSON object
	var carObject = model.toJSON();
	var output = 
	{
		"title" : carObject.model + " by " + carObject.make,
		"id" : model.cid
	};
	
	return output;
}

// Show only cars made by Honda
function filter(collection) {
	return collection.where({
		make : 'Honda'
	});
}

// Free model-view data binding resources when this view-controller closes
$.mainWindow.addEventListener("close", function() {
	$.destroy();
});

// add the data to the collection AFTER the window is opened. The generated data binding code
// is listening for specific events to force a redraw... reset is one of them.
$.mainWindow.addEventListener ("open", function () {
	Alloy.Collections.cars.reset([{
		"make" : "Honda",
		"model" : "Civic"
	}, {
		"make" : "Honda",
		"model" : "Accord"
	}, {
		"make" : "Ford",
		"model" : "Escape"
	}, {
		"make" : "Ford",
		"model" : "Mustang"
	}, {
		"make" : "Nissan",
		"model" : "Altima"
	}]);
});

$.mainWindow.open();