import mongo from "../api/mongo";

export default function() {
  this.nuxt.hook("render:setupMiddleware", async () => {
    await mongo.connect();
  });
}
