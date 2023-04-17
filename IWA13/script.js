let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


// This function converts the calculated variable to a number and increments it by 1, regardless of whether it was originally a number or a string that represents a number.
const logCalc = () => { 
    const isString = typeof calculated === 'numerical-string'; 
    const calculatedAsNumber = isString ? calculated : parseInt(calculated);
    calculated = calculatedAsNumber + 1; 
}

/*This function performs a calculation on a variable, sets the user and 
state variables based on certain conditions, and updates the 
state variable based on a different condition.*/
const calcUser = () => {
  logCalc();
  if (calculated > 2 && !user){ 
    user = 'John';
    state = 'requesting';
  }
  if (calculated > 3){ 
  state = 'idle';
  }
};

/*this function logs a message to the console with 
the user and calculated variables, and sets the user 
variable to null.*/
const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`);
    user = null;
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()