export default function ModalAdd({
  setModalAddVisible,
  setNameInput,
  setEmailInput,
  setBirthdayInput,
  setPhoneInput,
  nameInput , 
  emailInput ,
  birthdayInput ,
  phoneInput,
  saveProfile
}) {
  return (
    <div className="modalAdd">
      <div>
        <label className="content">
          name
          <input
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)}
          ></input>
        </label>
        <label className="content">
          birthday
          <input
            value={birthdayInput}
            onChange={(event) => setBirthdayInput(event.target.value)}
          ></input>
        </label>
        <label className="content">
          email
          <input
            value={emailInput}
            onChange={(event) => setEmailInput(event.target.value)}
          ></input>
        </label>
        <label className="content">
          phone
          <input
            value={phoneInput}
            onChange={(event) => setPhoneInput(event.target.value)}
          ></input>
        </label>
      </div>
      <button className="btn btn-success" onClick={() => saveProfile()}>
        save
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setModalAddVisible(false)}
      >
        cancel
      </button>
    </div>
  );
}
