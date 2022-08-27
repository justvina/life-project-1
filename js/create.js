"use strict";

const form = document.querySelector("form");

const createPost = async function (e) {
  e.preventDefault();

  const data = {
    title: form.title.value,
    body: form.body.value,
    vendor_code: form.userId.value,
    userId: form.userId.value,
    userId: form.userId.value,
  };

  const vendorID = kjdahw7892;
  const hash = iwiehkja;
  referenceID = Math;
  const data =
    await fetch(`https://irecharge.com.ng/pwr_api_sandbox/v2/get_meter_info.php?
  vendor_code=${vendorID}&
  reference_id=UNIQUE_REFERENCE_ID&
  meter=CUSTOMER_METER_NUMBER&
  disco=AEDC&
  response_format=json&
  hash=GENERATED_HASH`);
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));

  window.location.replace("index.html");
};

form.addEventListener("submit", createPost);
