import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
  id: 'p1',
  title: 'My Book',
  price: 6,
  description: "First Book I have written",
  quantity: 1,
  total: 6
},{
  id: 'p2',
  title: 'My Book 2',
  price: 5,
  description: "Second Book I have written",
  quantity: 2,
  total: 10 
}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => 
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        )}
      </ul>
    </section>
  );
};

export default Products;
