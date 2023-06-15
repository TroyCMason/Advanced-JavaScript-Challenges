//Q.1 Show rating

function showRating(rating){
    let ratings = "";
    for (let i = 0; i< Math.floor(rating); ++1){
        ratings = ratings + "*";
       if (i !== Math.floor(rating) - 1) {
        ratings += " ";
       }
    }

if (Number.isInteger(ratings)){
ratings = ratings + " .";
}
return ratings;
}

console.log (showRating(3.5));



function showRating(rating){
//intialise an empty string x

//loop through the rounded down ratingx
// add a star for every iteration x
//if its not the last iteration add a space
//if number is not an integer (whole number)
// add a full stop and return it

}

console.log(showRating(3.5));

function showRating(rating){
    let rating = " "
    for (let i = 0; i < Math.floor(rating); ++1) {
        rating = rating + "*";
        if (i !== Math.floor(rating) - 1) {
        }
    }
    if (Number.isInteger(rating)){
        rating = rating + " .";
        }
        return rating;
        }
    
    
    console.log(showRating(3.5));


    //Q.3 Sort by lowest to highest price

    function sortLowToHigh(numbers){
        return numbers.sort((a, b)=> b - a);
    }

    console.log(
    sortLowToHigh ([
        {id: 1, price: 50},
        {id: 2, price: 0},
        {id: 3, price: 500},
    ]))

    //Q4. Promises

//The Async Await Episode I Promised -Fireship
//Async Await JavaScript ES7- Techsith (1.5 Speed)
// Async JS Crash Course- Callbacks, Promises, Async Await - Travesery Media (1.5 Speed)


//Q5.Find all the posts for one person (Mock API)
async function postsByUser(userId){
    const promise = await fetch ("https://jsonplaceholder.typicode.com/posts");

    const result = await promise.json()

    const posts = result.filter(element => element.userId === userId)

    console.log (posts)
}

postsByUser(4);

//Q6 Return the first 6 incomplete todos from the result

async function firstSixIncomplete (){
    const Promises = await fetch ("https://jsonplaceholder.typicode.com/todos");
    let data = await Promises.json();
    const Results = await Promises.json()

    const todos = Results.filter (elem => elem.completed.slice (0.6));
firstSixIncomplete(6);
}

firstSixIncomplete(6);