import {
	fromInputDate,
	fromInputDatetimeLocal,
	fromInputMonth,
	fromInputTime,
	toInputDate,
	toInputDatetimeLocal,
	toInputMonth,
	toInputTime
} from "./index.js";


// type=datetime
test("type=datetime in/out", () => {
	const origDate = new Date();
	origDate.setMilliseconds(0);

	const s = toInputDatetimeLocal(origDate);
	const newDate = fromInputDatetimeLocal(s);

	expect(newDate).toEqual(origDate);
});

test("type=datetime js to html", () => {
	const dateObject = new Date(2000, 0);
	const origDateString = "2000-01-01T00:00:00";

	const newDateString = toInputDatetimeLocal(dateObject);

	expect(newDateString).toEqual(origDateString);
});

test("type=datetime js to html without seconds", () => {
	const dateObject = new Date(2000, 0);
	const origDateString = "2000-01-01T00:00";

	const newDateString = toInputDatetimeLocal(dateObject, false);

	expect(newDateString).toEqual(origDateString);
});

test("type=datetime html to js", () => {
	const origDate = new Date(2000, 0);
	const htmlDateString = "2000-01-01T00:00:00";

	const newDate = fromInputDatetimeLocal(htmlDateString);

	expect(newDate).toEqual(origDate);
});



// type=time
test("type=time in/out", () => {
	const origDate = new Date();
	origDate.setMilliseconds(0);

	const s = toInputTime(origDate);
	const newDate = fromInputTime(s);

	expect(newDate).toEqual(origDate);
});

test("type=time js to html", () => {
	const dateObject = new Date(2000, 0);
	const origDateString = "00:00:00";

	const newDateString = toInputTime(dateObject);

	expect(newDateString).toEqual(origDateString);
});

test("type=time js to html without seconds", () => {
	const dateObject = new Date(2000, 0);
	const origDateString = "00:00";

	const newDateString = toInputTime(dateObject, false);

	expect(newDateString).toEqual(origDateString);
});

test("type=time html to js", () => {
	const origDate = new Date();
	origDate.setHours(0);
	origDate.setMinutes(0);
	origDate.setSeconds(0);
	origDate.setMilliseconds(0);
	const htmlDateString = "00:00:00";

	const newDate = fromInputTime(htmlDateString);

	expect(newDate).toEqual(origDate);
});

test("type=time html to js with base date", () => {
	const origDate = new Date(2020, 0);
	const htmlDateString = "00:00:00";

	const newDate = fromInputTime(htmlDateString, new Date(2020, 0));

	expect(newDate).toEqual(origDate);
});



// type=date
test("type=date in/out", () => {
	const today = new Date();
	const origDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
	origDate.setMilliseconds(0);

	const s = toInputDate(origDate);
	const newDate = fromInputDate(s);

	expect(newDate).toEqual(origDate);
});

test("type=date js to html", () => {
	const dateObject = new Date(2000, 0);
	const origDateString = "2000-01-01";

	const newDateString = toInputDate(dateObject);

	expect(newDateString).toEqual(origDateString);
});

test("type=date html to js", () => {
	const origDate = new Date(2000, 0);
	const htmlDateString = "2000-01-01";

	const newDate = fromInputDate(htmlDateString);

	expect(newDate).toEqual(origDate);
});



// type=month
test("type=month in/out", () => {
	const today = new Date();
	const origDate = new Date(today.getFullYear(), today.getMonth());
	origDate.setMilliseconds(0);

	const s = toInputMonth(origDate);
	const newDate = fromInputMonth(s);

	expect(newDate).toEqual(origDate);
});

test("type=month js to html", () => {
	const dateObject = new Date(2000, 0);
	const origDateString = "2000-01";

	const newDateString = toInputMonth(dateObject);

	expect(newDateString).toEqual(origDateString);
});

test("type=month html to js", () => {
	const origDate = new Date(2000, 0);
	const htmlDateString = "2000-01";

	const newDate = fromInputMonth(htmlDateString);

	console.log(newDate, origDate);

	expect(newDate).toEqual(origDate);
});
