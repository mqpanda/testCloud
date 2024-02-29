const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 1502;

// Разрешить все источники (*), вы можете настроить это для конкретных доменов
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, Express on Google Cloud!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
