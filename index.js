const express = require('express'); 
const userRoute = require('./src/routes/user.route');
const app = express();
const db = require("./src/database/db");
const connectDatabase = require('./src/database/db');
const port = 3001;

connectDatabase()
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server up on port ${port} 🚀`))