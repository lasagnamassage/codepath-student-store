import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  setShoppingCart,
  shoppingCart,
}) {
  const productElements = products
    ? products.map((productObj) => {
        return (
          <ProductCard
            key={productObj.id}
            showDescription={false}
            setShoppingCart={setShoppingCart}
            shoppingCart={shoppingCart}
            product={productObj}
          />
        );
      })
    : [];

  return (
    <div
      className="product-grid"
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        height: "auto",
      }}
    >
      {productElements}
    </div>
  );
}