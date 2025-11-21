import express from "express";
import dotenv from "dotenv"
dotenv.config();

const app = express()
const PORT = process.env.PORT 
app.use(express.json());

app.get("/", (req,res) => {
    try {
        res.status(200).json({ msg: "WELCOME"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})

app.post("/reg", (req,res) => {
    try {
        res.status(200).json({ msg: "logine Successfull"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})

app.put("/update", (req,res) => {
    try {
        let updatingData = req.body;
        console.log(updatingData);

        res.status(200).json({ msg: "Account Updated "})
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})

app.delete("/delete", (req,res) => {
    try 
    {
        let updatingData = req.body
        let userEmail = updatingData.email
        console.log(userEmail)

        res.status(200).json({ msg: "User Account Deleted "})
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})

app.listen(PORT, () =>{
    console.log(`Server is live on http://localhost:${PORT}`);
})
