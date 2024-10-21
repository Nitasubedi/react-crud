import { useState } from "react";
import Card from "./components/card";
import { IoMdCloseCircle } from "react-icons/io";
import Modal from "./components/modal";
import AddProductForm from "./forms/addProduct";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  console.log("modal....", openModal);
  return (
    <>
      {openModal ? (
        <Modal>
          {/* //children */}
          <div className="bg-white w-2/6 rounded-md p-4">
            <div className="flex justify-end">
              <IoMdCloseCircle
                onClick={() => setOpenModal(false)}
                className="text-red-500 text-xl cursor-pointer"
              />
            </div>
            <AddProductForm />
          </div>
        </Modal>
      ) : null}
      <h1>Hello</h1>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-red-600 m-5 text-white px-3 py-2 rounded-md "
      >
        Add new item
      </button>
      <Card />
    </>
  );
};
export default App;
