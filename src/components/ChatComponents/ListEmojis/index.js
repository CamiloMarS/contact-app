import React from "react";

const myEmojis = [
  "&#128512;",
  "&#128513;",
  "&#128518;",
  "&#128514;",
  "&#129299;",
  "&#128517;",
  "&#128521;"
];
const ListEmojis = ({ clickOnEmoji }) => {
  return (
    <div>
      {myEmojis.map(e => (
        <b>{e}</b>
      ))}
    </div>
  );
};

export default ListEmojis;
