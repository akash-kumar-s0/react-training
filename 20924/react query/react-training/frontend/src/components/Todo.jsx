export const Todo = ({ todo, deleteExistingTodo, editExistingTodo }) => {
  const { mutate: editMutate, isPending: isEditing } = editExistingTodo();
  const { mutate: deleteMutate, isPending: isDeleting } = deleteExistingTodo();
  return (
    <div className="flex items-center">
      <input
        checked={todo.done}
        type="checkbox"
        onChange={(e) => editMutate({ ...todo, done: e.target.checked })}
      />
      <span className="flex-grow">{todo.task}</span>
      <button
        disabled={isDeleting}
        onClick={() => deleteMutate(todo.id)}
        className="color-danger"
      >
        Delete
      </button>
    </div>
  );
};
