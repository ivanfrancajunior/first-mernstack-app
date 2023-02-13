const express = require('express'); 
const userRoute = require('./src/routes/user.route');
const authRoute = require('./src/routes/auth.route');
const connectDatabase = require('./src/database/db');


const app = express();
const port = process.env.PORT||3001;


connectDatabase()
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen(port, () => console.log(`Server up on port ${port} 🚀`))