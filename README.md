# input-date-to-js-date

Functionality for converting html-date-inputs to JS-date-objects.

## The problem
HTML supports multiple time-related input types like: time, date, week, month, and datetime-local. All this is great, however, there can be one small problem: we need a way to set the value of the input from a JavaScript Date object, as well as a way to get the value from the input into a JavaScript date object.
View [the problem on codepen](https://codepen.io/MendyBerger/pen/zYBvOKW).

## Example usage
```html
<input type="datetime-local">
```
```JavaScript
import { fromInputDatetimeLocal, toInputDatetimeLocal } from 'input-date-to-js-date';

let date = new Date();
let input = document.querySelector('input');

input.addEventListener('input', () => {
	date = fromInputDatetimeLocal(input.value);
	console.log(date);
});

input.value = toInputDatetimeLocal(date);
```

## Docs
```JavaScript
// type=datetime-local
// if you don't include seconds in your input set includeSeconds to false
toInputDatetimeLocal(date: Date, includeSeconds?: boolean = true): string;
fromInputDatetimeLocal(s: string): Date;

// type=time
// if you don't include seconds in your input set includeSeconds to false
toInputTime(date: Date, includeSeconds?: boolean = true): string;
// if you want the time to be in a specific date add the day parameter otherwise it will default to 1970-01-01
fromInputTime(s: string, day?: Date = new Date): Date;

// type=date
toInputDate(date: Date): string;
fromInputDate(s: string): Date;

// type=month
toInputMonth(date: Date): string;
fromInputMonth(s: string): Date;
```