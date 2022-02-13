/* 
bedWood = 10cft/bed
tableWood = 3cft/table
selfWood = 15cft/self
*/

function newLifePlan(bedQuantity,  tableQuantity, selfQuantity){
    const bedWood = 10;
    const tableWood = 3;
    const selfWood = 15;

    const totalBedQuantity = bedQuantity * bedWood;
    const totalTableQuantity = tableQuantity * tableWood;
    const totalSelfQuantity = selfQuantity * selfWood;

    const totalWoodQuantity = totalBedQuantity + totalTableQuantity + totalSelfQuantity;

    return totalWoodQuantity;
}

const totalQuantity = newLifePlan(2, 3, 1);
console.log('total Wood Quantity', totalQuantity);