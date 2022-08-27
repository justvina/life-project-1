"use strict";

function onclickDeleteBtn() {
  const postId = new URLSearchParams(window.location.search).get(
    "postIdForDeletePost"
  );

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "DELETE",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
  window.location.replace("index.html");
}
