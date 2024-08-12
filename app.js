const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));


// Set the view engine to EJS (optional, can also serve static HTML)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
