function buttonClick(){
    const inputText = document.getElementById('text-input').value;
    const url = `https://themealdb.com/api/json/v1/1/search.php?f=${inputText}`
    fetch(url)
    .then(res => res.json())
    .then(data => mealData(data.meals))
    document.getElementById('text-input').value = "";
}

const mealData = data =>{
    const displayMeal = document.getElementById('display-food');
        data.forEach(eachMealData => {
        const createDivForMeals = document.createElement('div');
        const displayMealData = `
            <div onclick="displayFoodDetails('${eachMealData.idMeal}')">
                <img src="${eachMealData.strMealThumb}">
                <h5 class="card-title">${eachMealData.strMeal}</h5>
            </div>
        `;
        createDivForMeals.innerHTML = displayMealData;
        displayMeal.appendChild(createDivForMeals)
    });
}

const displayFoodDetails = mealID =>{
    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    fetch(url)
    .then(res => res.json())
    .then(data => showDetails(data.meals[0]))
}

const showDetails = mealDetails =>{
    const parantDiv = document.getElementById('display-food-details');
    parantDiv.innerHTML = `
        <img src="${mealDetails.strMealThumb}">
        <h3>${mealDetails.strMeal}</h3>
        <h4>Ingredients</h4>
        <p>${mealDetails.strIngredient1}</p>
        <p>${mealDetails.strIngredient2}</p>
        <p>${mealDetails.strIngredient3}</p>
        <p>${mealDetails.strIngredient4}</p>
        <p>${mealDetails.strIngredient5}</p>
    `;
}