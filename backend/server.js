import express, { json } from 'express'
import db from './database.js'
import cors from 'cors'
const app = express()


// Se da permiso explícito de que el front acceda a los recursos del sistema
/*app.use(cors(
{   
    origin:"http://localhost:5173/init"
}))*/

app.use(cors())
app.use(express.json())	// Para menejar los json que manda el front

app.get("/devices", async (req, res) =>
{
	const data = await db.connectionDB()
	res.json(data)	// Se regresa la lista de dispositivos
})

app.post("/addDevice", async (req, res) =>
{
	//console.log(req.body)
	const data = await db.addDeviceDB(req.body)
	res.send(data);
})

app.listen(8080)
