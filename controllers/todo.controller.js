import { todoModel } from "../models/todo.models.js";



// probar promesa

const getAll = async (_, res) => {
    
    try {
     const    response = await todoModel.findAll();
        res.json(response);

    } catch (error) {
        console.log('Error al testear', error); // votantes estará definido, pero puede ser undefined si ocurrió un error.
    }
};



const  create = async (req, res) =>  {
try {
    const {title} = req.body
const response=await todoModel.create(title);
res.json(response);

} catch (error) {
    console.log(error);
}


};
export const todoController=  {

getAll,
create

}




