import { useState } from "react";
import Body from "./components/Body";
import { STUDENTS } from "./mockData";
import Modal from "./components/modalDelete";
import ModalAdd from "./components/modalAdd";

function App() {
  const [students, setStudents] = useState(STUDENTS);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [modalAddVisible, setModalAddVisible] = useState(false);

  const openModalDelete = (studentId) => {
    setModalVisible(true);
    setDeleteId(studentId);
  };

  const openModalAdd = () => {
    setModalAddVisible(true);
  };

  const [nameInput, setNameInput] = useState("");
  const [birthdayInput, setBirthdayInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const saveProfile = () => {
    const newStudent = {id : 500 , name : nameInput , birthday : birthdayInput , email : emailInput }
    const news = [...students]
    setStudents(news.unshift(newStudent))
    console.log(news)
  }

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossOrigin="anonymous"
      />
      <Body
        students={students}
        openModalDelete={openModalDelete}
        openModalAdd={openModalAdd}
      />
      {modalVisible && (
        <Modal
          students={students}
          setStudents={setStudents}
          setModalVisible={setModalVisible}
          deleteId={deleteId}
        />
      )}
      {modalAddVisible && (
        <ModalAdd
          setModalAddVisible={setModalAddVisible}
          setBirthdayInput={setBirthdayInput}
          setEmailInput={setEmailInput}
          setNameInput={setNameInput}
          setPhoneInput={setPhoneInput}
          nameInput={nameInput}
          emailInput={emailInput}
          birthdayInput={birthdayInput}
          phoneInput={phoneInput}
          saveProfile={saveProfile}
        />
      )}
    </div>
  );
}

export default App;
