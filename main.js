document.getElementById('getData').addEventListener('click'), getTheData)

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