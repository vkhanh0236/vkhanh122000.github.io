export default function Modal({ setModalVisible,  products , deleteId , setProducts}) {
  function checkRemoveItem(id) {
    setProducts(products.filter((product) => product.id !== id));
    setModalVisible(false);
  }

  return (
    <div className="modal" >
      <p> ban co muon xoa san  pham nay k </p>
      <button onClick={() => checkRemoveItem(deleteId)}>Ok</button>
      <button onClick={() => setModalVisible(false)}>Cancel</button>
    </div>
  );
}
