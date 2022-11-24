import './App.css';
import foodJson from './foods.json';
import { useState } from 'react';
import { Row, Divider } from 'antd';
import FoodBox from './components/FoodBox';

function App() {
  // const [foods, setFoods] = useState(foodJson);

  return (
    <div className="App">
      {/* Display Add Food component here */}

      {/* <Button> Hide Form / Add New Food </Button> */}

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foods.map((food) => (
          <>
            <Foodbox />
          </>
        ))}
      </Row>
    </div>
  );
}
export default App;
