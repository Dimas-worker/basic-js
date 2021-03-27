const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
let sampleAge;
module.exports = function dateSample(sampleActivity) {
  if ((typeof(sampleActivity) === "string") 
  && (typeof(+sampleActivity) === "number") 
  && (+sampleActivity !== 0) 
  && (!isNaN(sampleActivity)) 
  && (+sampleActivity < 15.1) 
  && (sampleActivity[0] !== '-')) {
    let radioactiveDecay = 0.693 / HALF_LIFE_PERIOD;
    sampleAge = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / radioactiveDecay)
  } else {
    return false
  } return sampleAge
}