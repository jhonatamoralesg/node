
import "dotenv/config";
import express from 'express';
import todoRoute from "./routes/todo.routes.js"

const app= express();

app.use(express.json());
//el express.json habilita que ustedes puedan leer el req.body

app.use("/api/todos", todoRoute);  // use es para middwelare , esta es una ruta base.




const PORT =process.env.PORT || 5000;
app.listen(PORT, ()=>{


    console.log("server listenning on port", PORT);
});