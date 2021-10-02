import { useEffect, useState } from "react";
import InputBar from "../InputBar";
import OptionsBar from "../OptionsBar";
import Todo from "../Todo";
import { Todos, Wrapper } from "./AppDivider.styles";

const AppDivider = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState(null);

  useEffect(() => {
    console.log(newEntry);
    setEntries(entries.concat(newEntry));
    console.log(entries);
  }, [newEntry]);

  return (
    <Wrapper>
      <h1>#todo</h1>
      <OptionsBar />
      <InputBar getValue={(value) => setNewEntry(value)} />
      <Todos>
        {entries.map((entry, index) => {
          if (entry) return <Todo entry={entry} key={`entrynum${index}`} />;
        })}
      </Todos>
    </Wrapper>
  );
};

export default AppDivider;
