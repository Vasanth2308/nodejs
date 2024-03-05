const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dummy user data
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Render login form
app.get('/', (req, res) => {
    res.render('login');
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.send('Login successful!');
    } else {
        res.send('Invalid username or password.');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
