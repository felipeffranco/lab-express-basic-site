const express = require("express")

const app = express()

app.set("view engine", "hbs")
app.set("views", `${__dirname}/views`)

app.get("/", (req, res, next) => {
    const name = "USER"
    res.render("home", {
        name:name
    })
})
app.get("/about", (req, res, next) => {
    const name = "USER"
    res.render("about", {
        name:name
    })
})
app.get("/works", (req, res, next) => {
    const name = "USER"
    res.render("works", {
        name:name
    })
})
app.get("/photo-gallery", (req, res, next) => {
    const name = "USER"
    res.render("photo-gallery", {
        name:name
    })
})

const port = 3001
app.listen(port, () => console.log(`Application running at port ${port}`))