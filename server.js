import app from "./app.js";
import connectDB from "./config/db.js";





app.get("/", (req, res) => {
  res.send("API is running...");
})
connectDB();

app.listen(5000, () => {
  console.log("Server running on 5000");
})