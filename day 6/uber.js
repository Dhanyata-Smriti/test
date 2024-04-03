class uber_distancePrice{
    constructor(distance,perMile){
        
        const PriceForDistance=distance*perMile;
        return PriceForDistance;
}}

class uber_durationPrice{
    constructor(duration,perMin){
        
        const PriceForDuration=duration*perMin;
        return PriceForDuration;
}}



const costPerMile = 0.50;
const costPerMinute = 0.10;
const baseFare = 2.50;
const distance=20;
const duration=2;
const disP= new uber_distancePrice(distance,costPerMile);
const duraP= new uber_durationPrice(duration,costPerMinute);
const price = baseFare + duraP + disP;
console.log("The total fare is: ",price);