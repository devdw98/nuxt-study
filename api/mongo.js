import { MongoClient } from "mongodb";

const client = new MongoClient(
  process.env.MONGODB_URI || "mongodb://localhost",
  { useUnifiedTopology: true }
);

export default client;
