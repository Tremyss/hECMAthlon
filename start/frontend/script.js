
class hECMAthlon {
	// todo reduce
	/* getMaxValue = (input) => {
		const maxValues = input.split(",");
		let maxValue = 0;
		for (let i = 0; i < maxValues.length; i++) {
			let tempValue = parseInt(maxValues[i]);
			if (tempValue > maxValue) {
				maxValue = tempValue;
			}
		}
		return [maxValue];
	} */

	/* getMaxValue = (input) => {
		return input.split(",").reduce((max, item) => {
			return max < item ? item : max;
		});
	} */

	getMaxValue = (input) => {
		return input.split(",").reduce((maxValue, currentValue) => {
			return Number(maxValue) < Number(currentValue) ? currentValue : maxValue;
		}, -Infinity);
	}

	// ? Filter
	getGreaterThan = (input) => {
		return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(
			(num) => num > parseInt(input)
		);
	}

	// ? map
	fizzBuzz = (input) => {
		const output = [];
		[...Array(parseInt(input) + 1).keys()].slice(1).map((k) => {
			let value;
			if (k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
			else if (k % 3 === 0) value = "Fizz";
			else if (k % 5 === 0) value = "Buzz";
			else value = k;
			output.push(value);
		});
		return output;
	}
}

function loadEvent() {

	const maxValueBtn = document.querySelector(".maxValue__btn");
	const greaterThanBtn = document.querySelector(".greaterThan__btn");
	const fizzBuzzBtn = document.querySelector(".fizzBuzz__btn");

	const maxValueInput = document.querySelector(".maxValue__input");
	const greaterThanInput = document.querySelector(".greaterThan__input");
	const fizzBuzzInput = document.querySelector(".fizzBuzz__input");

	const maxValueRoot = document.querySelector(".maxValue__container");
	const greaterThanRoot = document.querySelector(".greaterThan__container");
	const fizzBuzzRoot = document.querySelector(".fizzBuzz__container");

	const hECMA = new hECMAthlon();

	maxValueBtn.addEventListener("click", () => {
		let maxValue = getOutput([hECMA.getMaxValue(maxValueInput.value)]);
		logResult(maxValueRoot, maxValue);
	});
	greaterThanBtn.addEventListener("click", () => {
		const greaterValues = getOutput(
			hECMA.getGreaterThan(greaterThanInput.value)
		);
		logResult(greaterThanRoot, greaterValues);
	});
	fizzBuzzBtn.addEventListener("click", () => {
		const result = getOutput(hECMA.fizzBuzz(fizzBuzzInput.value));
		logResult(fizzBuzzRoot, result);
	});

	// ? spread

	const getOutput = (output) => {
		return ["The function starts", ...output, "The function ends"]
	}

	const logResult = (place, values) => {
		while (place.firstChild) {
			place.firstChild.remove();
		}
		for (let j = 0; j < values.length; j++) {
			place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
		}
	}
}
window.addEventListener("load", loadEvent);
