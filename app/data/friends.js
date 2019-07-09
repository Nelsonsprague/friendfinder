var friendArray = [{
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }

];
var userArray = [{
    "name": "Frank",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        3,
        4,
        3,
        2,
        5,
        2,
        2,
        4,
        4,
        5
    ]
}]


function compare(friendArray, userArray) {
    const finalarray = [];
    friendArray.forEach((e1)=> userArray.forEach((e2) => 
            {
                if (e1.scores === e2.scores) {
                    finalarray.push(e1.scores)
                }
                console.log(e1.scores);
                console.log(e2.scores);
            }
        ));
        console.log(finalarray)
}

compare(friendArray, userArray);
module.exports = friendArray;