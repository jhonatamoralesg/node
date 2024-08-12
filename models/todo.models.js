import { pool } from "../database/connection.js";


const findAll = async ()=>  {

 try {
    const result= await pool.query("select * from  todos");
    console.log(result);
return result.rows;

 } catch (error) {
     console.log('Error al consultar', error);
     throw error; // Vuelve a lanzar el error para manejo adicional si es necesario

 }
};






export const todoModel={

    findAll,
    
    
    };
    
    
