const curtesy = 'Hello, How are you man.';

function reverceString(text){
    let reverce = '';
    for(const letter of text){
        reverce = letter + reverce;
    }
}

const myString = reverceString(curtesy);
console.log(myString);