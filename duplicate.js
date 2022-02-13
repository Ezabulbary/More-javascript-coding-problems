// Unique names 

const names = ['abul', 'babul', 'hablu', 'abul', 'babul', 'kakul', 'hablu', 'abul', 'babul', 'kakul', 'hablu', 'kashem', 'abul', 'babul', 'kakul', 'hablu', 'kashem', 'abul', 'babul', 'kakul', 'hablu', 'kashem',];

function uniqueName(names){
    const unique = [];
    for(const element of names){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const uniqueMan = uniqueName(names);
console.log(uniqueMan);


// unique numbers 

const numbers = [11, 12, 13, 14, 11, 15, 16, 12, 18, 17, 19, 15, 22, 25, 24, 12, 25, 26, 29, 23, 32, 25, 47, 98, 87, 85, 74, 45, 96, 65, 56, 63, 52, 69, 96, 52, 41, 12, 25, 65, 54, 32, 21, 87, 54, 65, 32];

function uniqueNumbers(numbers){
    const unique = [];
    for(const element of numbers){
        if(unique.indexOf(element)  == -1){
            unique.push(element);
        }
    }
    return unique;
}

const myUniqueNumbers = uniqueNumbers(numbers);
console.log(myUniqueNumbers);

