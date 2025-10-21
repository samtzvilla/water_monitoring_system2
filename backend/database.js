//import {Client} from 'pg'	//Esto solo funciona para métodos???
import pg from 'pg'	// Se importa todo el modulo con un montón de clases (Client, Pool, etc), cada una con sus métodos
import {config} from 'dotenv'

const {Client} = pg	// Se obtiene la clase Client

config()	// Carga las variables de entorno

async function connectionDB() {

	// Se instancía un cliente con las variables de entorno definidas, a través del constructor
    const client = new Client({
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        database: process.env.PGDB,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD
    });
    await client.connect()
    
    /* --- INICIO DE CÓDIGO DE DIAGNÓSTICO ---
    const dbName = await client.query('SELECT current_database()');
    const dbUser = await client.query('SELECT current_user');
    console.log('--- INFO DE CONEXIÓN DEL BACKEND ---');
    console.log('Conectado a la base de datos:', dbName.rows[0].current_database);
    console.log('Conectado como usuario:', dbUser.rows[0].current_user);
    console.log('Host:', client.host);
    console.log('Puerto:', client.port);
    console.log('------------------------------------');
    --- FIN DE CÓDIGO DE DIAGNÓSTICO ---*/
    
    //console.log("Conexión con db exitosa")
    const resultset = await client.query('select * from sistemas.dispositivos')
    client.end()
    //console.log(resultset.rows)
    return resultset.rows
}

async function addDeviceDB(device) {

	// Se instancía un cliente con las variables de entorno definidas, a través del constructor
    const client = new Client({
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        database: process.env.PGDB,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD
    });
    await client.connect()
    const {id, nombre, ubicacion, coordenadas, potencia, voltaje, intensidad, flujo, presion, temp, humedad, fecha_registro} = device;
     const parameters =[nombre, ubicacion, coordenadas, potencia, voltaje, intensidad, flujo, presion, temp, humedad];
    console.log("Registro insertado correctamente en la DB:)");
    const resultset = await client.query(`INSERT INTO sistemas.dispositivos(nombre, ubicacion, coordenadas, potencia, voltaje, intensidad, flujo, presion, temp, humedad) VALUES 
        ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10) returning *;`, parameters)
    // Returning permite regresar con seguridad el id del dispositivo recién ingresado
    // Hacer un inster y luego un select truena si hay 2 dispositivos con el mismo nombre
    //returning regresa solo las columnas que le digas
    client.end()
    console.log(resultset.rows)
    return resultset.rows;       
}

export default{
	connectionDB,
    addDeviceDB,
}
