import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from "./store/cartSlice";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4"><i className="fa fa-shopping-cart"></i> Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div className="col-md-6 mb-4" key={item.id}>
                <div className="card shadow-sm p-3 h-100">
                  <div className="row g-3 align-items-center">
                    <div className="col-4 text-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid cart-image"
                      />
                    </div>
                    <div className="col-8">
                      <h5 className="mb-2">{item.title}</h5>
                      <p className="mb-1">
                        <strong>Price:</strong> ${item.price}
                      </p>
                      <p className="mb-1">
                        <strong>Quantity:</strong> {item.quantity}
                      </p>
                      <div className="d-flex gap-2 my-2">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => dispatch(decrementQuantity(item.id))}
                        >
                          -
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => dispatch(incrementQuantity(item.id))}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-end mt-4">
            <h4>Total: ${total.toFixed(2)}</h4>
            <button
              className="btn btn-outline-danger mt-2"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
