const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
}

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  reveiw: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
	name: "Apple",
	rating: 7,
	review: "Great!"
});

fruit.save();
