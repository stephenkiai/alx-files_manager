const express = require('express')
import { route } from './routes/index.js';
const app = express()
const port = process.env.PORT || 5000;
export default app;

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})
