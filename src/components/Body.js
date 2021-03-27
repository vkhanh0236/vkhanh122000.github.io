export default function Body({ students , openModalDelete ,openModalAdd }) {
  const listStudents = students.map((student) => (
    <tr key={student.id}>
      <th scope="row">{student.name}</th>
      <td>{student.birthday}</td>
      <td>{student.email}</td>
      <td>{student.phone}</td>
      <td>
        <p >
          <i  > </i> Chỉnh sửa
        </p>{" "}
        |
        <p onClick={() => openModalDelete(student.id)}>
          <i className="fas fa-trash-alt"> </i> Xóa{" "}
        </p>
      </td>
    </tr>
  ));

  return (
    <div className="all mx-auto">
      <h1 className="text-center">Danh sách học viên</h1>
      <p>
        <button type="button" className="btn btn-success " onClick={() => openModalAdd() }>
          <i className="fas fa-plus-circle" /> Thêm học viên
        </button>
      </p>
      <table className="table table-hover table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Họ tên</th>
            <th scope="col">Năm sinh</th>
            <th scope="col">Email</th>
            <th scope="col">Số điện thoại</th>
            <th />
          </tr>
        </thead>
        <tbody className="student">{listStudents}</tbody>
      </table>
    </div>
  );
}
