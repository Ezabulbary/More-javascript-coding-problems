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