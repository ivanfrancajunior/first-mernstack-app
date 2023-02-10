const express = require('express'); 
const userRoute = require('./src/routes/user.route');
const connectDatabase = require('./src/database/db');


const app = express();
const port = 3001;


connectDatabase()
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server up on port ${port} 🚀`))