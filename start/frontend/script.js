function loadEvent() {
	const hECMAthlon = {
		getMaxValue: function (input) {
			var maxValues = input.split(",");
			var maxValue = 0;
			for (var i = 0; i < maxValues.length; i++) {
				var tempValue = parseInt(maxValues[i]);
				if (tempValue > maxValue) {
					maxValue = tempValue;
				}
			}
			return [maxValue];
		},

		getGreaterThan: function (input) {
			var greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
			var greaterNums = [];
			for (var j = 0; j < greaterValues.length; j++) {
				if (greaterValues[j] > parseInt(input)) {
					greaterNums.push(greaterValues[j]);
				}
			}
			return greaterNums;
		},

		fizzBuzz: function (input) {
			var output = [];
			for (var k = 1; k <= parseInt(input); k++) {
				var value;
				if (k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
				else if (k % 3 === 0) value = "Fizz";
				else if (k % 5 === 0) value = "Buzz";
				else value = k;
				output.push(value);
			}
			return output;
		},
	};

	var maxValueBtn = document.querySelector(".maxValue__btn");
	var greaterThanBtn = document.querySelector(".greaterThan__btn");
	var fizzBuzzBtn = document.querySelector(".fizzBuzz__btn");

	var maxValueInput = document.querySelector(".maxValue__input");
	var greaterThanInput = document.querySelector(".greaterThan__input");
	var fizzBuzzInput = document.querySelector(".fizzBuzz__input");

	var maxValueRoot = document.querySelector(".maxValue__container");
	var greaterThanRoot = document.querySelector(".greaterThan__container");
	var fizzBuzzRoot = document.querySelector(".fizzBuzz__container");

	maxValueBtn.addEventListener("click", () => {
		var maxValue = getOutput(hECMAthlon.getMaxValue(maxValueInput.value));
		logResult(maxValueRoot, maxValue);
	});
	greaterThanBtn.addEventListener("click", () => {
		var greaterValues = getOutput(
			hECMAthlon.getGreaterThan(greaterThanInput.value)
		);
		logResult(greaterThanRoot, greaterValues);
	});
	fizzBuzzBtn.addEventListener("click", () => {
		var result = getOutput(hECMAthlon.fizzBuzz(fizzBuzzInput.value));
		logResult(fizzBuzzRoot, result);
	});

	function getOutput(output) {
		var returnValue = ["The function starts"];
		for (var i = 0; i < output.length; i++) {
			returnValue.push(output[i]);
		}
		returnValue.push("The function ends");
		return returnValue;
	}

	function logResult(place, values) {
		while (place.firstChild) {
			place.firstChild.remove();
		}
		for (var j = 0; j < values.length; j++) {
			place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
		}
	}
}
window.addEventListener("load", loadEvent);
