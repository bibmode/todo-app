import { useEffect, useState } from "react";
import InputBar from "../InputBar";
import OptionsBar from "../OptionsBar";
import Todo from "../Todo";
import { Todos, Wrapper } from "./AppDivider.styles";

const AppDivider = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState(null);
  const [newId, setNewId] = useState(null);

  useEffect(() => {
    setEntries(
      entries.concat({
        description: newEntry,
        id: newId,
      })
    );
    console.log(entries);
  }, [newEntry]);

  return (
    <Wrapper>
      <h1>#todo</h1>
      <OptionsBar />
      <InputBar
        getValues={(value, count) => {
          setNewEntry(value);
          setNewId(`entry${count}`);
        }}
      />
      <Todos>
        {entries.map((entry, index) => {
          if (entry.description !== null)
            return (
              <Todo
                entry={[entry.description]}
                id={[entry.id]}
                key={`entrynum${index}`}
              />
            );
        })}
      </Todos>
    </Wrapper>
  );
};

export default AppDivider;
