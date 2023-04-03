const free_warning = 'Free shipping only applies to single customer orders'
const banned_warning = 'Unfortunately we do not ship to your country of residence'
const none_selected = 0

const customers = 1
let location = 'RSA'
let currency = null

if (location === "RSA") { 
    shipping = 400
    currency = "R" 
}

if (location === "NAM"){
shipping = 600
currency = "$"
}
else if (location === "North Korea"){
    console.warn(banned_warning)
}
 
else {
    shipping = 800
    currency = "$"
}

let shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * 5
const batteries = 35 * 2
const pens = 5 * 30

shipping = null
currency = "R"

if (shoes + batteries + pens + shirts >= 1000) {
	if (location === "NAM" && customers === 1) ;{
			if (location === "RSA")
		    shipping = 0
		}
	}


if (customers !== 1) { 
    console.warn(free_warning) 
}

console.log('Price', currency, shoes + batteries + pens + shirts + shipping)

