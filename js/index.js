"use strict";

function myDisplayer(response) {
  const container = document.getElementById("melvina");
  const posts = JSON.parse(response);

  let template = `<section class="container b-display">
  <div class="d-md-flex justify-content-md-end create-btn">
    <a href="create.html"
      ><button class="btn btn-md btn-primary me-md-4" type="button">
        create
      </button>
    </a>
  </div>
  <table class="table table-sm table-bordered border-primary">
    <thead class="table-light table-margin">
      <tr>
        <th scope="col-1">id</th>
        <th scope="col-3">title</th>
        <th scope="col-3">body</th>
        <th scope="col-5">actions</th>
      </tr>
    </thead>`;

  let index = 1;
  posts.forEach((post) => {
    template += `<tbody>
      <tr>
        <th scope="row">${index++}</th>
        <td class="col-4">${post.title}</td>
        <td class="col-4">${post.body.slice(0, 65)} 
          <a href="/singlePost.html?postIdForSinglePost=${
            post.id
          }"> Read more...
          </a> 
        </td>
        <td class="col-4">
          <a href="/singlePost.html?postIdForSinglePost=${post.id}">
            <button type="button" class="btn btn-primary" id="modalDisplayer" data-toggle="modal" data-target="#exampleModal">
              read
            </button>
          </a>

          <a href="/updatePost.html?postIdForUpdatePage=${post.id}"
          ><button class="btn btn-sm btn-success me-md-2" type="button">
          update
          </button></a
          >
          
          <a href="/index.html?postIdForDeletePost=${post.id}"
          ><button class="btn btn-sm btn-danger me-md-2" type="button">
          delete
          </button></a
          >
        </td>
      </tr>
    </tbody>`;
  });

  container.innerHTML = template;
}

function getPosts(myCallback) {
  const url = "https://jsonplaceholder.typicode.com/posts";
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

const result = getPosts(myDisplayer);

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
