import "dotenv/config"; // importando las variables de entorno
import pkg from "pg";  // es un import del paquete postgrest 
const { Pool } = pkg;  // lo asignamos a una constante
export const pool= new Pool({


allowExitOnIdle: true,  // este codigo es para que se haga una petición al bkacned y luego cierra esa petición


});  // esta es la conexion, es la creación de un pool


try {  // usamos el try catch para el manejo de erroes, y usamos lo que es asincronia en nuestra conexion
await pool.query("SELECT NOW()");  // usamos el await porque son metodos asincronos
console.log("conexione exitosa");


} catch (error) {
    console.log(error);
}


