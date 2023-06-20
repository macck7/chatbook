const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectToMongo = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
dotenv.config();
connectToMongo();

app.use(express.json());

app.get("/" ,(req,res)=>{
    res.send("API is running sucessfully");
});

// app.get("/api/chat" ,(req,res)=>{
//     res.send(chats);
// });

// app.get("/api/chat/:id" , (req,res)=>{
//     // console.log(req)
//     // console.log(req.params)
//     // console.log(req.params.id)

//     // sending chats of only whose id matches with req.id
//     const singleChat = chats.find((c)=>c._id === req.params.id)
//     res.send(singleChat);
// })


app.use("/api/user", userRoutes);

// for handling error if url types is not present
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`));