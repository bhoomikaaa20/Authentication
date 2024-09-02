const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AuthModel = require("./Models/Schema");

const app = express();
app.use(express.json());
app.use(cors());

app.listen(8082, () => {
    console.log("running at 8082");
});

mongoose.connect("mongodb://localhost:27017/authentication")
.then(() => console.log("MongoDB connected"))


app.post("/signup", (req, res) => {
    AuthModel.create(req.body)
        .then((auth) => res.json(auth))
        .catch((err) => res.status(500).json(err));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    AuthModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.status(401).json({ message: "Incorrect password" });
                }
            } else {
                res.status(404).json({ message: "User not found" });
            }
        })
        .catch(err => res.status(500).json({ message: "Server error", error: err }));
});
