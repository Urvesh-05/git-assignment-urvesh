//4: Product Filter & Transform

const products = [
  { name: 'Laptop', price: 1500 },
  { name: 'Phone', price: 800 },
  { name: 'Headphones', price: 1200 },
];

const filteredProducts = products.filter((product) => product.price > 1000);

const discountedProducts = filteredProducts.map((product) => {
  const discountedPrice = product.price - product.price * 0.1;
  return { ...product, discountedPrice };
});

console.log(discountedProducts);
