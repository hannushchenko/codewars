// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


const validatePIN = (pin) => (pin.length === 4 || pin.length === 6) && pin.split("").map(item => item.match(/[0-9]/g)).join("") === pin

//const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin)

console.log(validatePIN("1234"))