import { useState, useEffect } from "react";
import InputBar from "../InputBar";
import OptionsBar from "../OptionsBar";
import Todo from "../Todo";
import { Todos, Wrapper } from "./AppDivider.styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppDivider = () => {
  const [entries, setEntries] = useState([]);
  const [crossed, setCrossed] = useState(false);

  useEffect(() => {
    console.log(crossed);
    console.log("changed");
  }, [crossed]);

  //create a method that gets the value of crossed
  const checkStatus = (id) => {
    console.log(id);
  };

  return (
    <Wrapper>
      <Router>
        <h1>#todo</h1>

        <OptionsBar />
        <InputBar
          getValues={(value, count) => {
            setEntries(
              entries.concat({
                description: value,
                id: count,
                completed: crossed,
              })
            );
          }}
        />

        <Switch>
          <Route exact path="/">
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
                      key={`entrynum${index}`}
                      seeChange={checkStatus}
                    />
                  );
                return null;
              })}
            </Todos>
          </Route>

          <Route exact path="/active">
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
                      key={`entrynum${index}`}
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
                  entry.description.trim() !== ""
                )
                  return (
                    <Todo
                      entry={[entry.description]}
                      id={[entry.id]}
                      key={`entrynum${index}`}
                    />
                  );
                return null;
              })}
            </Todos>
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default AppDivider;
