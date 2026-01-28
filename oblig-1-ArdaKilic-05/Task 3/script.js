const METER_TO_YARD = 1.0936132983;

function convertMeterToYards(meters){
return meters * METER_TO_YARD;
}

meters = 300;
yards = convertMeterToYards(meters);

console.log (meters + " meters is equals to " + yards + " yards");

if (yards > 300){
console.log("That is a really long gold drive ");
}