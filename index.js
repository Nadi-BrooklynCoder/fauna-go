const inform = console.log;
const  {writeJsonFile, readJsonFile } = require('./src/helpers');
const { create, index, show, destroy, edit } = require('./src/animalsController.js')

const run = () => {
    const action = process.argv[2];
    const animal = process.argv[3];
    let animals = readJsonFile("./data", "animals.json");
    let writeToFile = false;
    let updatedAnimals = [];

    switch(action) {
        case "index":
            const animalsView = index(animals)
            inform(animalsView);
            break;
        case "create":
            updatedAnimals = create(animals, animal);
            writeToFile = true;
            break;
        case "show":
            const singleAnimal = show(animals, animal);
            inform(singleAnimal)
            break;
        case "update":
            updatedAnimals = edit(animals, animal, process.argv[4]);
            writeToFile = true;
            break;
        case "destroy":
            updatedAnimals = destroy(animals, animal);
            writeToFile = true;
            inform(updatedAnimals)
            break;
        case "score":
            const score = animals.reduce((acc, currentAnimal) =>acc += currentAnimal.points, 0);
            inform(`Your grand total for all the animals is: ${score}`)
            break;
        default:
            inform("There was an error")
    }
    if(writeToFile) {
        writeJsonFile('./data', 'animals.json', updatedAnimals);
    }
}

run();