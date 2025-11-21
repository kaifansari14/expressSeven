import express from "express";
import dotenv from "dotenv"
dotenv.config();

const app = express()
const PORT = process.env.PORT 
app.use(express.json());

app.post("/students/:id", (req,res) => {
    try 
    {
        let myStudent = req.params.id;
        console.log(myStudent)

        res.status(200).json({ msg: `I am ${myStudent} API`})
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})
// 3. req.query 
// Data will be send via value pair with ? 

app.post ("/user", (req,res) => {
    try 
    {
            let data = req.query;
            let myName =  req.query.fName;
            let age = req.query.age;
            let isAlive = req.query.isAlive;
            console.log(myName,age,isAlive);    

            res.status(200).json ({ msg: data})

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})

app.listen(PORT, () => {
    console.log(`Server is live on http://localhost:${PORT}`)
})