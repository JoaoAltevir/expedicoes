import "dotenv/config";
import "./conn.js"
import e from "express";
import explorerRouter from "./routers/explorerRouter.js";
import speciesRouter from "./routers/speciesRouter.js";
import expeditionsRouter from "./routers/expeditionsRouter.js"

const app = e();

app.use(e.json());

app.use("/explorer", explorerRouter);
app.use("/species", speciesRouter);
app.use("/expedition", expeditionsRouter);


app.listen(process.env.API_PORT, () => {
    console.log(`listening on port ${process.env.API_PORT}`);
})