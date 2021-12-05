/*

Las promesas representa un resultado eventual de una operación asincrónica, la primera manera de interactuar con un una promesa o promise es a través del método then el cual registra el callback que recivirá la respuesta o la razón por la cual la promesa no a podido ser cumplida.
Estados

Las promesas pueden estar en 3 estados pending, fulfilled y rejected

Estados de una petición
Pending

Cuando una promesa no se haya terminado aún pero aún no ha sido rechazada. (a la espera), y la respuesta podrá ser fulfilled o rejected.
Fulfilled

Cuando la respuesta ha sido devuelta y procesada correctamente, no podrá cambiar de estado y el valor no debe cambiar (debido a la promesa, por otro procesamiento sí).
Rejected

Cuando ha ocurrido un error en la promesa, el estado de la transición no debe cambiar y debe tener una razón por la cual a sucedido el error la cual no debe cambiar. para obtener los resultados rejected utilizamos la palabra reservada catch





*/

const promesa:any = new Promise((resolve,reject)=>{
    resolve(123); //En el caso de tener exito, me devuelve 123. Aqui lo llamo directamente, solo es un ejemplo
    //Lo normal sería esperar a recibir una conexión

    //reject(new Error("Fallo de conexion"));

});

promesa.then((res)=>{
    console.log("Respuesta si tengo éxito: " + res);
});

promesa.catch((error)=>{
console.log("fallo: " + error);
})


