import express from "express";
import kunmanga from "./routes/KunManga/KunManga.js";
import manganato from "./routes/Manganato/Manganato.js";
import asurascans from "./routes/AsuraScans/AsuraScans.js";
import homepage from "./routes/HomePage/HomePage.js";
import Welcome from "./routes/Welcome.js";

const port =8081;
const app = express();

app.use("/kunmanga", kunmanga);
app.use("/manganato", manganato);
app.use("/asurascans", asurascans);
app.use("/homepage", homepage);
app.use("/", Welcome);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
