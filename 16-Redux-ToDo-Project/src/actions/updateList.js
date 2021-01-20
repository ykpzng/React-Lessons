export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const DELETE = 'DELETE';

export function addTodo(content) {
  return {
    type: ADD,
    content
  }

}

export function editTodo(index, content) {
  return {
    type: EDIT,
    index,
    content
  }

}

export function deleteTodo(index) {
  return {
    type: DELETE,
    index
  }

}