import React, { useState, useEffect } from 'react';
import dummy from './dummy';
import { FaShoppingCart, FaSearch, FaPlus, FaMinus, FaTrash, FaTimes } from 'react-icons/fa';

const Products = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutDetails, setCheckoutDetails] = useState({ name: '', phone: '', address: '', pincode: '' });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) setCart(JSON.parse(storedCart));

    const storedProducts = localStorage.getItem('products');
    const parsedProducts = storedProducts ? JSON.parse(storedProducts) : null;
    if (Array.isArray(parsedProducts) && parsedProducts.length > 0) {
      setProducts(parsedProducts);
    } else {
      setProducts(dummy);
      localStorage.setItem('products', JSON.stringify(dummy));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.productName === product.productName);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.productName === product.productName ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productName) => {
    setCart(cart.filter((item) => item.productName !== productName));
  };

  const updateQuantity = (productName, change) => {
    setCart(
      cart.map((item) =>
        item.productName === productName
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item
      )
    );
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (Object.values(checkoutDetails).some((val) => val.trim() === '')) {
      alert('Please fill all details.');
      return;
    }
    alert('Order placed successfully!');
    setCart([]);
    localStorage.removeItem('cart');
    setSearchTerm('');
    setSelectedCategory('All');
    setShowCheckout(false);
    setCheckoutDetails({ name: '', phone: '', address: '', pincode: '' });
    setProducts(dummy);
    localStorage.setItem('products', JSON.stringify(dummy));
  };

  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.productName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.productType === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
    <div><h1 className='text-center text-green-900 text-3xl font-bold md:text-5xl m-5'>OUR PRODUCTS</h1></div>
    
    <div className="p-4 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div className="flex items-center border rounded-lg flex-1 min-w-[200px]">
          <FaSearch className="ml-3 text-gray-500 text-xl md:text-2xl" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 w-full outline-none"
          />
        </div>
        <button
          onClick={() => setShowCart(!showCart)}
          className="relative text-xl md:text-2xl text-blue-700"
        >
          <FaShoppingCart />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      <div className="flex gap-3 flex-wrap justify-center mb-8">
        {['All', 'Headphone', 'Watch', 'Charger', 'Tempered Glass', 'Powerbank'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black hover:bg-blue-100'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((d, index) => (
          <div key={index} className="border p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow relative">
            <img src={d.img} alt={d.productName} className="w-full h-52 object-cover mb-3 rounded-lg" />
            <div className="text-blue-700 font-semibold text-lg mb-1 truncate">{d.productName}</div>
            <p className="text-gray-500 text-sm mb-2 line-clamp-2">{d.idea}</p>
            <p className="text-green-700 font-bold text-md mb-3">₹{d.price}</p>
            <button
              onClick={() => addToCart(d)}
              className="absolute bottom-4 right-4 text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full"
            >
              <FaShoppingCart />
            </button>
          </div>
        ))}
      </div>

      {showCart && (
        <div className="fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-2xl p-6 overflow-y-auto z-50">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-xl font-bold">Cart</h2>
            <button onClick={() => setShowCart(false)} className="text-gray-600 hover:text-black text-xl">
              <FaTimes />
            </button>
          </div>
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            cart.map((item, idx) => (
              <div key={idx} className="mb-4 border-b pb-3">
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.productName} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{item.productName}</p>
                    <p className="text-sm text-gray-600">₹{item.price} × {item.quantity}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button onClick={() => updateQuantity(item.productName, -1)} className="p-1 bg-gray-200 rounded">
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.productName, 1)} className="p-1 bg-gray-200 rounded">
                        <FaPlus />
                      </button>
                      <button onClick={() => removeFromCart(item.productName)} className="ml-auto text-red-500">
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
          {cart.length > 0 && (
            <>
              <p className="text-right font-bold text-lg text-gray-800 mt-2">Total: ₹{totalPrice}</p>
              <button onClick={() => setShowCheckout(true)} className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
                Checkout
              </button>
            </>
          )}
        </div>
      )}

      {showCheckout && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Checkout Details</h2>
            <input type="text" placeholder="Name" value={checkoutDetails.name} onChange={(e) => setCheckoutDetails({ ...checkoutDetails, name: e.target.value })} className="w-full mb-3 p-2 border rounded" />
            <input type="tel" placeholder="Phone Number" value={checkoutDetails.phone} pattern="[0-9]*" inputMode="numeric" onChange={(e) => setCheckoutDetails({ ...checkoutDetails, phone: e.target.value.replace(/[^0-9]/g, '') })} className="w-full mb-3 p-2 border rounded" />
            <input type="text" placeholder="Address" value={checkoutDetails.address} onChange={(e) => setCheckoutDetails({ ...checkoutDetails, address: e.target.value })} className="w-full mb-3 p-2 border rounded" />
            <input type="text" placeholder="Pincode" value={checkoutDetails.pincode} pattern="[0-9]*" inputMode="numeric" onChange={(e) => setCheckoutDetails({ ...checkoutDetails, pincode: e.target.value.replace(/[^0-9]/g, '') })} className="w-full mb-4 p-2 border rounded" />
            <div className="flex gap-4 justify-between">
              <button onClick={() => setShowCheckout(false)} className="w-1/2 bg-gray-400 text-white py-2 rounded">Cancel</button>
              <button onClick={handleCheckout} className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">Place Order</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Products;

