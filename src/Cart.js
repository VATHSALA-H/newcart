import { useCart } from "react-use-cart";
import { useState } from "react";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const [receipt, setReceipt] = useState(null);

  // Format the total price
  const formattedCartTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cartTotal);

  const handleBuyNow = () => {
    // Generate the receipt
    const receiptData = {
      items: items,
      totalPrice: formattedCartTotal,
      date: new Date().toLocaleString(),
    };

    // Set the receipt state
    setReceipt(receiptData);

  };

  if (isEmpty) return <h1 className="text-center">Your cart is Empty</h1>;

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                const formattedPrice = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(item.price);

                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} alt={item.title} style={{ height: '6rem' }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{formattedPrice}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        aria-label="Decrease quantity"
                        onClick={() => {
                          if (item.quantity > 1) {
                            updateItemQuantity(item.id, item.quantity - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        aria-label="Increase quantity"
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        aria-label="Remove item"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total Price: {formattedCartTotal}</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={emptyCart} disabled={isEmpty}>
            Clear Cart
          </button>
          <button className="btn btn-primary" onClick={handleBuyNow} disabled={isEmpty}>
            Buy Now
          </button>
        </div>
      </div>

      {/* Conditionally Render Receipt */}
      {receipt && (
        <div className="receipt-container mt-4 p-4 border rounded">
          <h3>Receipt</h3>
          <p><strong>Date:</strong> {receipt.date}</p>
          <h4>Items:</h4>
          <ul>
            {receipt.items.map((item, index) => (
              <li key={index}>
                {item.title} (x{item.quantity}) - {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(item.price * item.quantity)}
              </li>
            ))}
          </ul>
          <p><strong>Total Price: </strong>{receipt.totalPrice}</p>
          <button className="btn btn-success" onClick={() => setReceipt(null)}>
            Close Receipt
          </button>
        </div>
      )}
    </section>
  );
}

export default Cart;
