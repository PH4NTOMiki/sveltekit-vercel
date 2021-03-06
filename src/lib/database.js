const mongo = require("mongodb");

let client = null;
let db = null;

export async function init() {
  if(!client) {
    client = await mongo.MongoClient.connect("mongodb://localhost");
    db = client.db("sveltekit1");
  }
  return { client, db }
}