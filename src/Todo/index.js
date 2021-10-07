import { Checkbox, Wrapper, Trash } from "./Todo.styles";

const Todo = ({
  entry,
  id,
  seeChange,
  completed,
  trashOption,
  deleteEntry,
}) => {
  return (
    <Wrapper>
      <Checkbox
        defaultChecked={completed}
        type="checkbox"
        id={id}
        onChange={() => {
          seeChange(id);
        }}
      />
      <label htmlFor={id}>{entry}</label>
      <span className="material-icons check">check</span>
      {trashOption && (
        <Trash
          onClick={() => {
            deleteEntry(id);
          }}
        >
          <span className="material-icons-outlined delete">delete</span>
        </Trash>
      )}
    </Wrapper>
  );
};

export default Todo;
