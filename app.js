var arr = [
    "TK",
    [

        "TK",

        "booking",

        ["flight", " TK"],

        ["TK", " flight"],

        ["booking", " TK", ["booking", " TK"], ["booking"]]

    ]

];

function returnCount(myArr, searchVal) {
    myArr = myArr.flat(Infinity);
        return myArr.filter(function(e) {
            return e.indexOf(searchVal) >= 0;
        }).length;
}

console.log(returnCount(arr,"TK"));