const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions= {
    origin: ["http://localhost:5173"]
};
app.use(cors(corsOptions));

app.get("/api", (req,res) => {
    res.json({fruits: ["Apple", "Mango", "Banana", "Kiwi"],
    persons: {
        name: "John Doe",
        age: 30,
        email: "johndoe@example.com"
    }});
});

app.listen(8080, () => {
    console.log("Fruits displayed");
});