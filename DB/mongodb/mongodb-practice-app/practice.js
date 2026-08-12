const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/SQLPractice');

  const productSchema = new mongoose.Schema({
    ProductID: Number,
    ProductName: String,
    CategoryID: Number,
    Price: Number
  });

  const Product = mongoose.model('Product', productSchema);

  await Product.deleteMany({});

  const created = await Product.create({
    ProductID: 1,
    ProductName: 'Chai',
    CategoryID: 1,
    Price: 18
  });
  console.log('Created:', created);

  const allProducts = await Product.find();
  console.log('All products:', allProducts);

  const oneProduct = await Product.findOne({ ProductID: 1 });
  console.log('One product:', oneProduct);

  const updated = await Product.findOneAndUpdate(
    { ProductID: 1 },
    { $set: { Price: 100 } },
    { new: true }
  );
  console.log('Updated:', updated);

  const deleted = await Product.deleteOne({ ProductID: 1 });
  console.log('Deleted:', deleted);

  await mongoose.disconnect();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});