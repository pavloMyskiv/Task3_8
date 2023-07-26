import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './TodoList.scss';
import {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from '../../store/AppAPI/todoAPI.js';
import { setEditingTodoId } from '../../store/slices/todoListSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TodoList = () => {
  const [updateTodoMutation] = useUpdateTodoMutation();
  const [deleteTodoMutation] = useDeleteTodoMutation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const editingTodoId = useSelector((state) => state.todoList.editingTodoId);
  const {
    data: todosList = [],
    isLoading,
    error,
    isError,
  } = useGetTodosQuery(id);

  const handleComplete = async (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    await updateTodoMutation(updatedTodo);
  };
  const handleEditingTodoId = (todo) => {
    dispatch(setEditingTodoId(todo.id));
  };
  const handleEdit = async (event, todo) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      const updatedTodo = { ...todo, title: event.target.value };
      await updateTodoMutation(updatedTodo);
      dispatch(setEditingTodoId(null));
    }
  };
  const handleDelete = async (todo) => {
    await deleteTodoMutation(todo);
  };

  if (isLoading) {
    return (
      <div className="todo_list">
        <h1>Todos</h1>
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="todo_list">
        <h1>Todos</h1>
        <div className="error">
          <h3>ERROR:{error.status}</h3>
          <p>{JSON.stringify(error.data)}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="todo_list">
      <h1>Todos</h1>
      {todosList.map((todo) => (
        <div
          className={todo.completed ? 'todo completed' : 'todo'}
          key={todo.id}
        >
          {editingTodoId === todo.id ? (
            <input
              defaultValue={todo.title}
              onKeyDown={(event) => {
                handleEdit(event, todo);
              }}
            />
          ) : (
            <h2>{todo.title}</h2>
          )}

          <div className="todo_button">
            <button
              onClick={() => {
                handleComplete(todo);
              }}
            >
              <FontAwesomeIcon icon="fa-regular fa-circle-check" />
            </button>
            <button
              onClick={() => {
                handleEditingTodoId(todo);
              }}
            >
              <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
            </button>
            <button
              onClick={() => {
                handleDelete(todo);
              }}
            >
              <FontAwesomeIcon icon="fa-regular fa-trash-can" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
