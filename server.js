const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set the public directory as a static directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the path to the public directory
const publicPath = path.join(__dirname, 'public');

// Serve the index.html file directly
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: publicPath });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
