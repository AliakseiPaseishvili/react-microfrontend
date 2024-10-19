import React, { useMemo } from "react";
import userData from "./user-list.json";

export const UserList = () => {
  const users = useMemo(
    () => userData.filter(({ name }) => name.startsWith("A")),
    []
  );

  return (
    <ul>
      {users.map(({ name, age, city }, index) => (
        <li key={index}>
          {name} {age} {city}
        </li>
      ))}
    </ul>
  );

  return null;
};
