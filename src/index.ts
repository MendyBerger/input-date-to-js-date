export function toInputDatetimeLocal (date: Date, includeSeconds = true): string {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit"
	};
	if(includeSeconds) options.second = "2-digit";
	return date.toLocaleString("sv-SE", options).replace(" ", "T");
}
export function fromInputDatetimeLocal (s: string): Date {
	return new Date(s);
}

export function toInputTime(date: Date, includeSeconds = true): string {
	const options: Intl.DateTimeFormatOptions = {
		hour: "2-digit",
		minute: "2-digit"
	};
	if(includeSeconds) options.second = "2-digit";
	return date.toLocaleString("sv-SE", options);
}
export function fromInputTime(s: string, day = new Date): Date {
	const dayString = day.toLocaleString("sv-SE", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	});
	return new Date(dayString + "T" + s);
}

export function toInputDate(date: Date): string {
	return date.toLocaleString("sv-SE", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	});
}
export function fromInputDate(s: string): Date {
	return new Date(s + "T00:00");
}

export function toInputMonth(date: Date): string {
	return date.toLocaleString("sv-SE", {
		year: "numeric",
		month: "2-digit"
	});
}
export function fromInputMonth(s: string): Date {
	return new Date(s + "-01T:00:00");
}
