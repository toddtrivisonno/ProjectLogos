
document.getElementById('Search').addEventListener('click', getVerse);

// function translate(selectTranslation) {
//    var value = selectTranslation.value;
//    console.log(value)
// }


function getVerse() {
   event.preventDefault();
   console.log('search button pressed')

   const apiURL = "https://bible-api.com/"
   let passage = document.getElementById("passage").value
   // let translation = document.getElementsByClassName("translation").value
   const url = apiURL + passage
   const kjv = apiURL + passage + "?translation=kjv"
   // const selectTranslation = document.querySelector('.translation');
   //    selectTranslation.addEventListener('change')
   // selectTranslation.addEventListener('change', (event) => {
      //    const result = document.querySelector('.translation');
      //    result.textContent = `You like ${event.target.value}`;
      //   });
      // const url = apiURL + passage + "?translation=" + selectTranslation
      // const url = apiURL + passage + "?translation=" + translation
      
      fetch(url)
      .then(
         function(x) {
            return x.json();
         }
         ).then(
            function(response){
               console.log(response);
               
       let reference = response.reference;
       document.getElementById('passage-left').innerHTML = reference;

       let passage = response.text;
       document.getElementById('passage-left-verse').innerHTML = passage;
   })

   fetch(kjv)
   .then(
      function(x) {
         return x.json();
      }
      ).then(
         function(response){
            console.log(response);
            
    let reference = response.reference;
    document.getElementById('passage-right').innerHTML = reference;

    let passage = response.text;
    document.getElementById('passage-right-verse').innerHTML = passage;
})
}


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