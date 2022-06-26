import React from 'react';

const TodoList = (props) => {
  const { items } = props;

  const output = 'testOutput';
  return (
    <table className="table text-white mb-0">
      <thead>
        <tr>
          <th scope="col">Due</th>
          <th scope="col">Action</th>
          <th scope="col">Notes</th>
          <th scope="col">Status</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </table>
  );
};

export default TodoList;
