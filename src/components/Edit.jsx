import React from 'react';

const Edit = () => {
  return (
    <div className="table text-white mb-0 edit-area">
      <div>
        <div>
          <span>Due</span>
          <input className="w-100" type="text" id="todo-duedate" />
        </div>
        <div>
          <span>Action</span>
          <input className="w-100" type="text" id="todo-duedate" />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <span>Note</span>
        <textarea
          id="todo-note"
          rows="3"
          cols="35"
          maxLength="5000"
          wrap="hard"
        ></textarea>
      </div>
    </div>
  );
};

export default Edit;
