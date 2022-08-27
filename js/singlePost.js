"use strict";

function myDisplayerForSinglePost(response) {
  const postContainer = document.getElementById("singlePost");
  const post = JSON.parse(response);

  let singlePostTemplate = `<div class="d-flex justify-content-center card-body">
    <div class="card w-50 text-center text-white bg-secondary">
      <div class="card-body">
        <h4 class="card-title">${post.title}</h4>
        <p class="card-text">${post.body}</p>
        <div class="d-md-flex justify-content-md-between">
          <input type="button" class="btn btn-danger" onclick="onclickDeleteBtn()" value="Delete">
          <a href="/updatePost.html?postIdForUpdatePage=${post.id}" class="btn btn-success">Update</a>
        </div>
      </div>
    </div>
  </div>`;

  postContainer.innerHTML = singlePostTemplate;
}
// <a href="/index.html?postIdForDeletePost=${post.id}" class="delete btn btn-danger">Delete</a>
// <button class="delete btn btn-danger">Delete</button>

function getSinglePost(myCallback) {
  const postId = new URLSearchParams(window.location.search).get(
    "postIdForSinglePost"
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

const result = getSinglePost(myDisplayerForSinglePost);

// const deleteBtn = document.querySelector(".delete");

// function onclickDelete() {
//   const postId = new URLSearchParams(window.location.search).get(
//     "postIdForDeletePost"
//   );

//   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
//     method: "DELETE",
//   });

//   window.location.replace("index.html");
// }

// deleteBtn.addEventListener("click", onclickDelete);
