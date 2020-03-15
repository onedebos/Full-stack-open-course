import React from "react";

export const Numbers = ({ persons }) => {
  return (
    <div>
      <h1>Numbers</h1>
      {persons.map((person, i) => (
        <div key={i}>
          <li>
            {person.name} &nbsp;
            <span>{person.number}</span>
          </li>
        </div>
      ))}
    </div>
  );
};
