const age = 30;
const isFemale = true;
const driverStatus = 'bob';
const firstName = 'sarah';
const totalAmount= 35;

if (age >= 18 && age <= 25) {
    console.log ('Je krijgt 50% korting!');
} else {
    console.log ('Je betaald de volle prijs');
}
console.log (age);

if (isFemale) {
    console.log ('Je bent een vrouw');
} else {
    console.log ('Je bent geen vrouw');
}
console.log (isFemale)

if (driverStatus === 'bob') {
    console.log ('Jij bent de bob');
} else {
    console.log ('Jij bent dronken');
}
console.log (driverStatus)

if (firstName === 'sarah' || firstName === 'bram') {
    console.log ('Jij krijgt een gratis biertje!');
} else {
    console.log ('Geen gratis bier voor jou');
}
console.log (firstName)

if (totalAmount >= 25) {
    console.log ('Jij krijgt gratis (vega)bitterballen!');
} if (totalAmount >= 50) {
    console.log ('Jij krijgt gratis Nachos!');
} if  (totalAmount >= 100) {
    console.log ('Jij krijgt gratis een fles champagne!');
} else {
    console.log ('Koop wat meer drankjes en je krijgt een cadeautje!');
}
console.log (totalAmount)