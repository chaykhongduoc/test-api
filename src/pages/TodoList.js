import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosSeletor } from "../redux/selector";

TodoList.propTypes = {};

export default function TodoList(props) {
  const dispatch = useDispatch();
  const data = useSelector(todosSeletor);
  console.log(data);
  return (
    <ul>
      {data &&
        data.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
    </ul>
  );
}
