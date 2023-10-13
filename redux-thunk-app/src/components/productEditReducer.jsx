import { useState } from "react";
import { addProduct, selectProducts } from "../redux/productReducer";
import { useSelector, useDispatch } from "react-redux";

const ProductEditReducer = () => {
  const emptyproduct = {
    id: -1,
    name: "",
    price: 0,
    quantity: 0,
  };
  const [product, setProduct] = useState(emptyproduct);
  const { id, name, price, quantity } = product;

  const oldProducts = useSelector(selectProducts);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const productValue = {
      id: parseInt(product.id),
      name: product.name,
      price: parseInt(product.price),
      quantity: parseInt(product.quantity),
    };

    dispatch(addProduct(oldProducts, productValue));
  };
  return (
    <div>
      <h4>Add Products</h4>
      <form onSubmit={() => {}}>
        <lable>id</lable>
        <input
          type="text"
          required
          onChange={handleChange}
          name="id"
          value={id}
        />
        <lable>name</lable>
        <input
          type="text"
          required
          onChange={handleChange}
          name="name"
          value={name}
        />
        <lable>price</lable>
        <input
          type="number"
          required
          onChange={handleChange}
          name="price"
          value={price}
        />

        <lable>quantity</lable>
        <input
          type="number"
          required
          onChange={handleChange}
          name="quantity"
          value={quantity}
        />
        <button type="Submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default ProductEditReducer;
