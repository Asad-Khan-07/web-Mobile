import axios from "axios";
import React, { useState } from "react";
import { useLoaderData, useOutletContext } from "react-router";

const Data = () => {
  const book = useOutletContext();
  console.log(book);

  return (
    <div>
      <ul>
        {book.slice(0, 5).map((book, index) => (
          <li key={index}>{book.author_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
