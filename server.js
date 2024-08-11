import express from "express";
import kunmanga from "./routes/KunManga/KunManga.js";
import manganato from "./routes/Manganato/Manganatoo.js";
import Welcome from "./routes/Welcome.js";
const port =8081;
const app = express();

app.use("/kunmanga", kunmanga);
app.use("/manganato", manganato);
app.use("/", Welcome);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
