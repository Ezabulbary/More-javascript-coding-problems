const phones = [
    {name:'walton', price: 21000, ram: 8, came: 14},
    {name:'samsang A30', price: 41000, ram: 8, came: 14},
    {name:'nokia b2', price: 43000, ram: 8, came: 14},
    {name:'huwie 5t', price: 14000, ram: 8, came: 14},
    {name:'oppo a32', price: 10000, ram: 8, came: 14},
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(const phone of phones){
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const myCheapestPhone = cheapestPhone(phones);
console.log(myCheapestPhone);