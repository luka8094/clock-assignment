const express = require("express")

const cors = require('cors')
const app = express()


const fileSystem = require("fs")



const clockPage = fileSystem.readFileSync("./public/time-assignment.html")

//dirname giver Direkte global adgang til den stig hvor projektet kører fra
//console.log(__dirname)

app.get("/", (req, res) => {
    res.redirect("/time-assignment")
})

app.get("/time-assignment", (req,res) => {
    res.send(""+clockPage)
})

const PORT = process.env.PORT || 8080 

app.listen(PORT, () => console.log("running on server", PORT))