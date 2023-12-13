const express = require("express")
const app = express();

app.get("/sales", (req, res) => {
    res.send("Hello World");
})

app.listen(8080, () => {
    console.log(`Listening on port 8080`);
})