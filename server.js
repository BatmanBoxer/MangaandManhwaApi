import express from "express";
import kunmanga from "./routes/KunManga/KunManga.js";
import manganato from "./routes/Manganato/Manganatoo.js";

const port = process.env.PORT || 1000;
const app = express();

app.use("/kunmanga", kunmanga);
app.use("/manganato", manganato);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
