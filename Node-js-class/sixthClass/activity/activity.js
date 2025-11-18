
// create a simple http server that displays hello world in the browser
// query parameters
// parse json data from request method by creating express server
// parse url encoded form data that accepts form data like reads username and password
//create simple calculator accepts two numbers in json
// display information name, city , mobile in body
// create a route login details name = admin and password 1234 and returns error message for errors. 


const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Hello world
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

// Query parameters - Access: /search?name=John&age=25
app.get('/search', (req, res) => {
  const { name, age } = req.query;
  res.send(`<h1>Query Params: Name = ${name}, Age = ${age}</h1>`);
});

// Parse JSON data (POST)
app.post('/json', (req, res) => {
  const data = req.body;
  res.json({ message: 'JSON received', data: data });
});

// Test page for JSON
app.get('/json', (req, res) => {
  res.send('<h1>Send POST request with JSON to this endpoint</h1>');
});

// Parse form data - username and password (POST)
app.post('/form', (req, res) => {
  const { username, password } = req.body;
  res.send(`<h1>Form Data: Username = ${username}, Password = ${password}</h1>`);
});

// Form page
app.get('/form', (req, res) => {
  res.send(`
    <h1>Form Data Test</h1>
    <form method="POST" action="/form">
      <input name="username" placeholder="Username" required><br><br>
      <input name="password" type="password" placeholder="Password" required><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Calculator (POST)
app.post('/calculator', (req, res) => {
  const { num1, num2, operation } = req.body;
  let result;
  
  if (operation === 'add') result = parseFloat(num1) + parseFloat(num2);
  else if (operation === 'subtract') result = parseFloat(num1) - parseFloat(num2);
  else if (operation === 'multiply') result = parseFloat(num1) * parseFloat(num2);
  else if (operation === 'divide') result = parseFloat(num1) / parseFloat(num2);
  else result = 'Invalid operation';
  
  res.json({ num1, num2, operation, result });
});

// Calculator page
app.get('/calculator', (req, res) => {
  res.send(`
    <h1>Calculator</h1>
    <form method="POST" action="/calculator">
      <input name="num1" type="number" placeholder="Number 1" required><br><br>
      <input name="num2" type="number" placeholder="Number 2" required><br><br>
      <select name="operation">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select><br><br>
      <button type="submit">Calculate</button>
    </form>
  `);
});

// Display information (POST)
app.post('/info', (req, res) => {
  const { name, city, mobile } = req.body;
  res.send(`<h1>Information</h1><p>Name: ${name}</p><p>City: ${city}</p><p>Mobile: ${mobile}</p>`);
});

// Info page
app.get('/info', (req, res) => {
  res.send(`
    <h1>Information Form</h1>
    <form method="POST" action="/info">
      <input name="name" placeholder="Name" required><br><br>
      <input name="city" placeholder="City" required><br><br>
      <input name="mobile" placeholder="Mobile" required><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Login route (POST)
app.post('/login', (req, res) => {
  const { name, password } = req.body;
  
  if (name === 'admin' && password === '1234') {
    res.send('<h1 style="color:green">Login successful!</h1>');
  } else {
    res.send('<h1 style="color:red">Error: Invalid credentials</h1>');
  }
});

// Login page
app.get('/login', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form method="POST" action="/login">
      <input name="name" placeholder="Username" required><br><br>
      <input name="password" type="password" placeholder="Password" required><br><br>
      <button type="submit">Login</button>
    </form>
    <p>Hint: admin / 1234</p>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});