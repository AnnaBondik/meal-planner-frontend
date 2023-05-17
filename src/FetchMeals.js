import axios from 'axios';

const URL = `https://meal-planner-nr3c.onrender.com`;
const getAllMeals = (setMeal)=>{
    axios.get(`${URL}`)
    .then(({data})=>{
        console.log(data);
        setMeal(data);
    })
}
const addMeal = (title, setTitle, setMeal)=>{
    axios.post(`${URL}/saveMeals`, {title})
    .then((data)=> {
        console.log(data);
        setTitle("");
        getAllMeals(setMeal);
    })
}

const editMeal = (mealId, title, setTitle, setMeal, setEditing)=>{
    axios.post(`${URL}/editMeal`, {_id: mealId, title})
    .then((data)=> {
        console.log(data);
        setTitle("");
        setEditing(false);
        getAllMeals(setMeal);
    })
}

const deleteMeal = (_id, setMeal)=>{
    axios.post(`${URL}/deleteMeal`, {_id})
    .then((data)=> {
        console.log(data);
        getAllMeals(setMeal);
    })
}
export { getAllMeals, editMeal, addMeal, deleteMeal};