const express = require('express');
const path = require('path');
const app = express();

// Serve the static HTML tool
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Glovo Tool running on port ${PORT}`));
