import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";
import fileUpload from 'express-fileupload';
import cors from 'cors'

const PORT = 5600;
const DB_URL = `mongodb+srv://developerar4y:Ar4ycool@cluster0.m3budbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
    console.log(e);
  }
}
console.log("work");
startApp()
