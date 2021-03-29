export default function Modal({
  students,
  setStudents,
  setModalVisible,
  deleteId,
}) {
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
    setModalVisible(false);
  };
  return (
    <div className="modalDelete">
      <p>ban co muon xoa student nay khong</p>
      <button onClick={() => deleteStudent(deleteId)}>ok</button>
      <button onClick={() => setModalVisible(false)}>cancel</button>
    </div>
  );
}
