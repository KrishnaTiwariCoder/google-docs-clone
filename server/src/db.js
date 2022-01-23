import mongoose from "mongoose";

const connection =
  "mongodb+srv://Krishna:eFnCOqC8oRqsrUuR@cluster0.jek4t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const Connect = () => {
  mongoose
    .connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
};

export default Connect;
