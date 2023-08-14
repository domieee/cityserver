import express from "express"

const app = express()

app.use(express.json())

// We use this server to provide city locations for Duelist Arena.
// Since vervel is not allowing http requests, and the geonames api dont have a https endpoint, we us this server as a tunnel 

const PORT = 4300

app.get('/', async (req, res) => {
    res.send('asasdsd')
})

try {
    app.listen(PORT, () => console.log(`Server listening on ${PORT} 👍`))
} catch (err) {
    console.log(`Server not able to run on ${PORT} 👎, Error: ${err}`)
}