import "dotenv/config";
import "./conn.js"
import e from "express";


const app = e();

app.use(e.json());




app.listen(process.env.API_PORT, () => {
    console.log(`listening on port ${process.env.API_PORT}`);
})