var officers = [

    { id: 20, name: 'Captain Piett' },

    { id: 24, name: 'General Veers' },

    { id: 56, name: 'Admiral Ozzel' },

    { id: 88, name: 'Commander Jerjerrod' }

];

function createArray(arr) {
    newArr = [];
    arr.forEach((el) => {
        newArr.push(el.id);
    });

    return newArr;
}
console.log(createArray(officers));