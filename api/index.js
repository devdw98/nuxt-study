export default function(req, res, next) {
  if (req.url === "/date") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ date: new Date() }));
    return;
  }
  next();
}
