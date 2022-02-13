function animalsCount(mile){
    const animalDensityFirst10Mile = 10;
    const animalDensitySecond10Mile = 50;
    const animalDensityRestmile = 100;
    if(mile <= 10){
        const count = mile * animalDensityFirst10Mile;
        return count;
    }
    else if(mile <= 20){
        const firstDensAnimal = 10 * animalDensityFirst10Mile;
        const restMile = mile - 10;
        const secondDensAnimal = restMile * animalDensitySecond10Mile;
        const totalAnimal = firstDensAnimal + secondDensAnimal;
        return totalAnimal;
    }
    else{
        const firstDensAnimal = 10 * animalDensityFirst10Mile;
        const secondDensAnimal = 10 * animalDensitySecond10Mile;
        const restMile = mile - 20;
        const restDensAnimal = restMile * animalDensityRestmile;
        const totalAnimal = firstDensAnimal + secondDensAnimal + restDensAnimal;
        return totalAnimal;
    }
}

const totalAnimalDensity = animalsCount(67);
console.log(totalAnimalDensity);