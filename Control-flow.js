const PI = 3.14145;
// ** The area in which the plants are contained is circular, with a radius of 5 meters. ** //

const initialRadius = 5; 

// ** The formula for calculating the area of a circle is PI multiplied by the radius, squared ** //

const calculateArea = (radius) => {
return PI * radius * radius;
}
// ** The area is starting with 20 plants **//
const initialPlantCount = 20; 

// * Each plant requires a minimum space of 0.8 square meters * //
const plantSpaceRequirement = 0.8;

// * The plants double in number every week. * //
const power = (base, exponent) => {
let result = 1;
for (let i = 0; i < exponent; i++) {
result *= base;
}
return result; 
};

const predictPlantGrowth = (initialCount, weeks) => {
return initialCount * power(2, weeks);
}

// ** Implement control flow to make decisions on whether the plants should be: Pruned, Monitored, or planted. ** //
const decision = (plantCount, gardenArea) => {
const maxCapacity = gardenArea / plantSpaceRequirement;
const fiftyPercentCapacity = 0.5 * maxCapacity; 
const eightyPercentCapacity = 0.8 * maxCapacity;

if (plantCount > eightyPercentCapacity) {
return 'Prune'; 
}
if (plantCount >= fiftyPercentCapacity) { 
return 'Monitor';
}
else { 
return 'Plant more'; 
}
}

const gardenArea = calculateArea(initialRadius);
const weeks = [1, 2, 3];

weeks.forEach(week => {
const plantCount = predictPlantGrowth(initialPlantCount, week);
const action = decision(plantCount, gardenArea);
console.log(`Week ${week}: Plant count = ${plantCount}, Action = ${action}`);
});

// **Part 2**//
const predictPlantGrowthMultipleGardens = (initialCount, weeks) => {
return initialCount * power(2, weeks);
}

const initialPlantsLarge = 100;
const weeksLarge = 10;

let spaceRequiredLarge = predictPlantGrowthMultipleGardens(initialPlantsLarge, weeksLarge);
console.log(`With 100 initial plants, after ${weeksLarge} weeks, ${spaceRequiredLarge.toFixed(2)} square meters required.`);

if (spaceRequiredLarge > gardenArea) {
let additionalSpace = spaceRequiredLarge - gardenArea;
let newRadius = Math.sqrt(additionalSpace / PI);
console.log(`Additional space required: ${additionalSpace.toFixed(2)} square meters.`);
console.log(`New garden radius required: ${newRadius.toFixed(2)} meters.`);
} else {
console.log(`No additional space required.`);
}

// **Part 3**//
const checkSpaceRequirement = (plantCount, radius) => {
const area = calculateArea(radius);
const spaceRequired = plantCount * plantSpaceRequirement;
if (spaceRequired > area) {
throw new Error(`Insufficient space: Required ${spaceRequired.toFixed(2)} square meters but only ${area.toFixed(2)} square meters available.`);
}
console.log(`Sufficient space: ${spaceRequired.toFixed(2)} square meters required.`);
}

try {
const initialPlantsError = 100;
const radiusError = 5;
const plantCountError = initialPlantsError * power(2, 10);

checkSpaceRequirement(plantCountError, radiusError);
} catch (error) {
console.error(error.message);
}

// ** SOURCES **//
// https://gist.github.com/CodeJewelPro/68fe55e6aec0bdc8ec3ff79a12a093c7 - Worked with a friend who is tutoring me he shared some of the stuff we disscused on github 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch