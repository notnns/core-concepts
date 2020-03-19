import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Photo shop', price: '$ 90.99' },
    { name: 'Illustrator', price: '$ 61.99' },
    { name: 'PDF Reader', price: '$ 35.99' },
    { name: 'Adobe XD', price: '$ 40.99' },
    { name: 'In Design', price: '$ 50.99' },
    { name: 'Lightroom', price: '$ 39.99' },
    { name: 'Premiere Pro', price: '$ 100.99' },
    { name: 'Flash', price: '$ 10.99' },
    { name: 'Pingpong Pro', price: '$ 8.99' },

  ]



  return (
    <div className="App">

      <Counter></Counter>
      <Users></Users>



      {
        products.map(product => <Product product={product}></Product>)
      }



    </div>
  );

}

function Product(props) {


  const productStyle = {
    border: '1px solid gray',
    borderRadius: '8px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '20px',
  }
  const { price, name } = props.product;

  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>

    </div>
  );
}

function Counter() {

  const [count, setCount] = useState(10);

  return (
    <div>
      <h1>Value: {count}</h1>
      <button onMouseOver={() => setCount(count - 1)}>Decrease Value</button>
      <button onClick={() => setCount(count + 1)}>Increase Value</button>
    </div>

  );
}

function Users() {

  const userStyle = {
    border: '1px solid gray',
    borderRadius: '8px',
    backgroundColor: 'lightsalmon',
    color: 'white',
    width: '600px',
    margin: '40px auto 40px auto',
    padding: '30px',
    textAlign: 'left',
  }

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));

  }, []);



  return (
    <div>
      {
        users.map(user => <div style={userStyle}>
          <h3>Name: {user.name}</h3>
          <h4>Email: {user.email}</h4>
          <h4>Phone: {user.phone}</h4>
          <h4>Website: {user.website}</h4>

        </div>)
      }
      <h3>Dynamic User: {users.length}</h3>
    
    </div>
  );
}

export default App;
