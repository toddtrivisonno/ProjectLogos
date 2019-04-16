
document.getElementById('Search').addEventListener('click', getVerse);

function getVerse() {
   event.preventDefault();
   console.log('search button pressed')
}

// let results = fetch('https://bible-api.com/romans+12:1-2');
// results.then(
//    function(x) {
//        return x.json();
//    }
// ).then(
//    function(y){
//        response = y;
//        console.log(y);

//        let reference = y.reference;
//        document.getElementById('passage-left').innerHTML = reference;

//        let passage = y.verses[0].text;
//        document.getElementById('passage-left-verse').innerHTML = passage;
//    })



// const options = {
//    method: 'GET',
//    url: 'https://api.esv.org/v3/passage/text/' + '?q=' + 'John+11:35',
//    headers: {
//       'Authorization: Token 5663b143d5c6364d90ae31114387eac152a8dcc5'
//    },
//    json: true
// };

// curl -H 'Authorization: Token 5663b143d5c6364d90ae31114387eac152a8dcc5' 'https://api.esv.org/v3/passage/text/?q=John+11:35'


// let routes;
// let results = fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200424196-5fdf40349774a101d0c0d762b625f5b1');
// results.then(
//    function(x) {
//        return x.json();
//    }
// ).then(
//    function(y){
//        routes = y;
//        console.log(y);
//        let routename = y.routes[12].name;
//        console.log(routename);
//        document.getElementById('passage-left').innerHTML = routename;

//        ;
//    })




// fetch(5663b143d5c6364d90ae31114387eac152a8dcc5 'https://api.esv.org/v3/passage/text/?q=John+11:35').then(
// 	function(x){
// 	return x.json();
// 	}
// ).then(
// 	function(y){
// 		for(i = 0; i < y.results.length; i++) {console.log(y.results[i].name.first, y.results[i].name.last)}
//     }
// )



// const apiURL = 'https://www.themealdb.com/api/json/v1/1/random.php'

// function getTheData()   {
//    console.log('Button was pressed')

//    fetch(apiURL)
//       .then(function (response) {
//          return (response.json());
//       })
//       .then(function(data){
//          console.log(data);
//          let recipe = data.meals[0].strIngredient1
//          document.getElementById('myRecipe').innerHTML = recipe
//          let foodImage = data.meals[0].strMealThumb
//          document.getElementById('theImage').src = foodImage
//       })
// }