import React from "react";

import { useParams, UseLocation, useLocation } from "react-router-dom";
const PostPages = () => {
  
  const location = useLocation();
 console.log(location.content)
  const { id } = useParams();
  return (
    <>
    adaaa
      {/* {array.map((value, index) => {
        return <div>{value.title}</div>;
      })} */}
    </>
  );
};
export default PostPages;
