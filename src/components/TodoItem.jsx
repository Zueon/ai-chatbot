import React from 'react';

const TodoItem = (props) => {
  const item = {
    dueDate: 2022,
    action: 'todoSample',
    id: 1,
    note: 'sampleNote',
    stat: 'done',
  };

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2" id="due-date">
          {item.dueDate}
        </span>
      </th>
      <td className="align-middle" id="action">
        <span>{item.action}</span>
      </td>
      <td className="align-middle" id="note">
        <h6 className="mb-0">
          <span>{item.note === null ? '' : item.note}</span>
        </h6>
      </td>
      <td className="align-middle" id="status">
        <h6 className="mb-0">
          <span className="badge badge-secondary badge-pill">{item.stat}</span>
        </h6>
      </td>
      <td className="align-middle">
        <a href="#!" data-mdb-toggle="tooltip" title="Done">
          <i className="fas fa-check fa-lg text-success"></i>
        </a>
        <a href="#!" data-mdb-toggle="tooltip" title="Remove">
          <i className="fas fa-trash-alt fa-lg text-warning"></i>
        </a>
        <a href="#!" data-mdb-toggle="tooltip" title="Edit">
          <i class="fa-solid fa-pen-to-square text-primary"></i>
        </a>
      </td>
    </tr>
  );
};

export default TodoItem;
