import { useState } from "react";
import InputBar from "../InputBar";
import OptionsBar from "../OptionsBar";
import Todo from "../Todo";
import { Delete, Todos, Wrapper } from "./AppDivider.styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppDivider = () => {
  const [entries, setEntries] = useState([]);
  const [idCount, setIdCount] = useState(0);

  //create a method that gets the value of crossed
  const checkStatus = (id) => {
    const newEntries1 = entries.map((el) => {
      if (el.id === id[0]) {
        el.completed = !el.completed;
      }
      return el;
    });
    setEntries(newEntries1);
  };

  //remove entry in system
  const deleteEntry = (id) => {
    const newEntries2 = entries.filter((el) => el.id !== id[0]);
    setEntries(newEntries2);
  };

  //remove all completed entries
  const deleteAllCompleted = () => {
    const incompleteEntriesRemain = entries.filter(
      (el) => el.completed === false
    );
    setEntries(incompleteEntriesRemain);
  };

  return (
    <Wrapper>
      <Router>
        <h1>#todo</h1>

        <OptionsBar />

        <Switch>
          <Route exact path="/">
            <InputBar
              getValues={(value) => {
                setEntries(
                  entries.concat({
                    description: value,
                    id: idCount,
                    completed: false,
                  })
                );
                setIdCount(idCount + 1);
              }}
            />
            <Todos>
              {entries.map((entry, index) => {
                if (
                  entry.description !== null &&
                  entry.description.trim() !== ""
                )
                  return (
                    <Todo
                      entry={[entry.description]}
                      id={[entry.id]}
                      completed={entry.completed}
                      key={`entrynum${index}`}
                      seeChange={checkStatus}
                    />
                  );
                return null;
              })}
            </Todos>
          </Route>

          <Route exact path="/active">
            <InputBar
              getValues={(value) => {
                setEntries(
                  entries.concat({
                    description: value,
                    id: idCount,
                    completed: false,
                  })
                );
                setIdCount(idCount + 1);
              }}
            />
            <Todos>
              {entries.map((entry, index) => {
                if (
                  entry.description !== null &&
                  entry.description.trim() !== "" &&
                  entry.completed === false
                )
                  return (
                    <Todo
                      entry={[entry.description]}
                      id={[entry.id]}
                      completed={entry.completed}
                      key={`entrynum${index}`}
                      seeChange={checkStatus}
                    />
                  );
                return null;
              })}
            </Todos>
          </Route>

          <Route exact path="/completed">
            <Todos>
              {entries.map((entry, index) => {
                if (
                  entry.description !== null &&
                  entry.description.trim() !== "" &&
                  entry.completed === true
                )
                  return (
                    <Todo
                      entry={[entry.description]}
                      id={[entry.id]}
                      completed={entry.completed}
                      key={`entrynum${index}`}
                      seeChange={checkStatus}
                      trashOption={true}
                      deleteEntry={deleteEntry}
                    />
                  );
                return null;
              })}
            </Todos>
            {entries.filter((el) => el.completed === true).length > 1 && (
              <Delete onClick={deleteAllCompleted}>
                <span className="material-icons-outlined delete-all">
                  delete
                </span>
                delete all
              </Delete>
            )}
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default AppDivider;
