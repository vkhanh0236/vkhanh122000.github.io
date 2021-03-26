import { useState } from "react";
import { PRODUCTS } from "./mockData";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  const [products, setProducts] = useState(PRODUCTS);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const removeProduct = (id) => {
    setModalVisible(true);
    setDeleteId(id)
  };


  function updateQuantity(event, productId) {
    const inputvalue = event.target.value;
    const newsProduct = products.map((product) => {
      if (product.id === productId) {
        product.quantity = Number(inputvalue);
      }
      return product;
    });
    setProducts(newsProduct);
  }

  let totalItems = products.reduce(
    (total, product) => (total += product.quantity),
    0
  );

  return (
    <main>
      <Header totalItems={totalItems} />

      <Content
        products={products}
        updateQuantity={updateQuantity}
        removeProduct={removeProduct}
      />

      <Footer products={products} PRODUCTS={PRODUCTS} setProducts={setProducts} />
      {modalVisible && (
        <Modal
          setModalVisible={setModalVisible}
          products={products}
          setProducts={setProducts}
          deleteId={deleteId}
        />
      )}
    </main>
  );
}

export default App;
