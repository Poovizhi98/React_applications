import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import useHttp from '../../hooks/use-http';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {

  const { isLoading, error, sendRequest: fetchRequests } = useHttp();
  const [mealData, setMealData] = useState([]);

  const transformData = (data) => {
    let loadedMeals = []

    for(const key in data) {
      loadedMeals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price
      })
    }
    setMealData(loadedMeals);
  }

  useEffect(() => {
    fetchRequests(
      { 
        url: 'https://custom-hooks-create-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json',
        method: 'GET',
        headers: '',
        body: null
      }, transformData)
  }, [fetchRequests])

  if (isLoading) {
    return <section className={classes.mealsLoading}> 
        <p>Loading...</p>
      </section>
  } 

  if (error) {
    return <section className={classes.mealsError}> 
    <p>{error}</p>
  </section>
  }


  const mealsList = mealData.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>

      <Card>
        { !isLoading && <ul>{mealsList}</ul> }
      </Card>

    </section>  
  );
};

export default AvailableMeals;
