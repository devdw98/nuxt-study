import mongo from "./mongo";

async function handleCall(req, res, next) {
  if (req.url !== "/date") {
    return next;
  }
  await mongo.connect();
  await mongo
    .db("test-node")
    .collection("test-nuxt")
    .replaceOne(
      {
        _id: "mydoc"
      },
      {
        date: new Date()
      },
      { upsert: true }
    );
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ date: new Date() }));
}

export default function(req, res, next) {
  handleCall(req, res, next).then(n => {
    if (n) n();
  });
}
