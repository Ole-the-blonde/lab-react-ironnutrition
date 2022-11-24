import './App.css';
import foodJson from './foods.json';
import { useState } from 'react';
import { Row, Divider } from 'antd';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [food, setFood] = useState(foodJson);
  const [searchString, setSearchString] = useState('');

  function removeFood(name) {
    const remainingFood = food.filter((item) => item.name !== name);
    setFood(remainingFood);
  }

  return (
    <div className="App">
      <AddFoodForm setFood={setFood} />
      <button>Hide Form/ Add New Food</button>

      {/* <Button> Hide Form / Add New Food </Button> */}

      {/* Display Search component here */}
      <Search searchString={searchString} setSearchString={setSearchString} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {food
          .filter((item) =>
            item.name.toLowerCase().includes(searchString.toLocaleLowerCase())
          )
          .map((item) => (
            <FoodBox
              key={item.name + item.calories}
              food={item}
              removeFood={removeFood}
            />
          ))}
      </Row>
    </div>
  );
}
export default App;
