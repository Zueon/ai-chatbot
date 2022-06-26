import React from 'react';
import Edit from './components/Edit';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

const items = [
  {
    dueDate: 2022,
    action: 'todoSample',
    id: 1,
    note: 'sampleNote',
    stat: 'done',
  },
  {
    dueDate: 2023,
    action: 'todoSample2',
    id: 2,
    note: 'sampleNote3',
    stat: 'done',
  },
  {
    dueDate: 2022,
    action: 'todoSample3',
    id: 3,
    note: 'sampleNote3',
    stat: 'done',
  },
];

const todoItems =
  items.length > 0 &&
  items.map((item, idx) => <TodoItem item={item} key={idx} />);

const App = () => {
  return (
    <div>
      <Header />
      <TodoList items={todoItems} />
      <Edit />
    </div>
  );
};

export default App;
