const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dbConnect = async () => {
  console.log(process.env);
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Connection failed", error.message);
  }
};

dbConnect();
