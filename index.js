
import "dotenv/config";
import express from 'express';
import todoRoute from "./routes/todo.routes.js"

const app= express();

//app.use(express.json());

app.use("/api/todos", todoRoute);  // use es para middwelare , esta es una ruta base.




const PORT =process.env.PORT || 5000;
app.listen(PORT, ()=>{


    console.log("server listenning on port", PORT);
});