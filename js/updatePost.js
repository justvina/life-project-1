"use strict";

function myDisplayerForUpdatePost(response) {
  const postContainer = document.getElementById("update");
  const post = JSON.parse(response);

  let updatePostTemplate = `<div class="d-flex justify-content-center">
    <div class="form-body">
      <form action="#" method="post">
        <div class="mb-3 row">
          <label for="id" class="form-label">Id</label>
          <div class="col-100">
            <input
              type="number"
              class="form-control"
              id="post-id"
              value="${post.id}"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col-100">
            <label for="title" class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              id="postTitle"
              value="${post.title}"
            />
          </div>
        </div>

        <div class="mb-3 row">
          <div class="col-100">
            <label for="body" class="form-label">Body</label>
            <textarea class="form-control" id="post-body" aria-label="With textarea">${post.body}</textarea>
          </div>
        </div>
        
        <input type="button" class="btn btn-success" onclick="onclickUpdate()" value="Update">
      </form>
    </div>
  </div>`;

  // <button class="btn btn-primary" onclick="onclickUpdate" id="updateBtn" type="submit">Update</button>
  postContainer.innerHTML = updatePostTemplate;
}

function getUpdatePost(myCallback) {
  const postId = new URLSearchParams(window.location.search).get(
    "postIdForUpdatePage"
  );

  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  let req = new XMLHttpRequest();
  req.open("GET", url);
  req.onload = function () {
    if (req.status == 200) {
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  };
  req.send();
}

const result = getUpdatePost(myDisplayerForUpdatePost);

function onclickUpdate() {
  const postTitle = document.getElementById("postTitle");
  const postBody = document.getElementById("post-body");

  const postId = new URLSearchParams(window.location.search).get(
    "postIdForUpdatePage"
  );

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "PUT",
    body: JSON.stringify({
      id: postId,
      title: postTitle,
      body: postBody,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  window.location.replace("index.html");
}
