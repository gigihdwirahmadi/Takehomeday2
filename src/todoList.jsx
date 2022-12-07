import { render } from "@testing-library/react";
import { useNavigate } from 'react-router-dom';
import React from "react";

function Todo(props) {
    const navigate = useNavigate();
  const navigater = () => {
    navigate(`/${props.key}`, {
      replace: true,
      state: { from: { title: props.title, description: props.deskripsi } },
    });
    return (
      <>
        <div
         
        >{props.title}
        </div>
        <button onClick={props.fungsi} class="btn btn-light ">
          Hapus
        </button>
      </>
    );
  };
}
export default Todo;
