const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (hourOfDay !== null && minuteOfDay !== null && hourOfDay == 00 && minuteOfDay == 00) {

    // Converting a string to an integer
	const taxAsDecimal = parseInt(tax) / 100

    // Inducing tax as a percentage of a salary
    const startingAfterTax = salary * (1 - taxAsDecimal)

	const balance = startingAfterTax - transport - food - rent

    console.log('R', balance.toFixed(2))
}