import { Router } from "express";
import { todoController } from "../controllers/todo.controller.js";


const router= Router();



router.get('/', todoController.getAll);


export default router;

