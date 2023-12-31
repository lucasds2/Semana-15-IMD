const express = require('express');
const { sequelize } = require('./models');

const app = express();


const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  await sequelize.sync();
  console.log('Database synced');
});
