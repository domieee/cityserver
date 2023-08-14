import express from "express"

const app = express()

app.use(express.json())

// We use this server to provide city locations for Duelist Arena.
// Since vervel is not allowing http requests, and the geonames api dont have a https endpoint, we us this server as a tunnel 

const PORT = 4300

app.get('/', async (req, res) => {
    try {
        const searchValue = req.query.searchValue;
        if (!searchValue) {
            return res.status(400).json({ error: "Missing searchValue parameter" });
        }

        const data = await fetch(`http://api.geonames.org/searchJSON?name=${searchValue}&username=domieee&maxRows=100`)
        const json = await data.json()

        res.send(json)
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "An error occurred" });
    }
})

try {
    app.listen(PORT, () => console.log(`Server listening on ${PORT} 👍`))
} catch (err) {
    console.log(`Server not able to run on ${PORT} 👎, Error: ${err}`)
}