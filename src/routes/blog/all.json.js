import * as mongo from 'mongodb';


export async function get() {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	//const { slug } = params;

	let client = await mongo.MongoClient.connect(process.env['VITE_MONGODB_URI'] || import.meta.env.VITE_MONGODB_URI);
    let db = client.db("sveltekit1");
	let collection = db.collection('blogposts');
	const articles = await collection.find({}).toArray();

	if (articles) {
		return {
			body: articles
		};
	}
}