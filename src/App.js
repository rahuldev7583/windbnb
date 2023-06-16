import React, { useState } from "react";

import Stays from "./components/Stays";
import Search from "./components/Search";
import { currentCity, currentGuest } from "./components/Search";

function App() {
  const [form, setForm] = useState(false);
  const [filter, setFilter] = useState(false);
  const showForm = () => {
    return !form ? setForm(true) : setForm(false);
  };
  return (
    <div className="">
      <Search
        showForm={showForm}
        form={form}
        showResults={() => {
          setForm(false);
          setFilter(true);
          //console.log(currentCity, currentGuest);
        }}
      />
      {!form && !filter ? (
        <Stays filterOut={false} />
      ) : filter ? (
        <Stays filterOut={true} city={currentCity} guest={currentGuest} />
      ) : null}
    </div>
  );
}
export default App;
