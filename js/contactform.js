(() => {
  // ns-params:@params
  var api = "http://localhost:7071/api/FormPost";

  // <stdin>
  var handleSubmit = (formid) => {
    const form = document.querySelector("form");
    if (form)
      form.addEventListener("submit", handle);
  };
  var postJson = (formdata) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", api, true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log("Successful");
      } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
        console.log("Something went wrong");
      }
    };
    xhr.send(JSON.stringify(formdata));
  };
  var handle = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log({ value });
    console.log(api);
    postJson(value);
  };
  handleSubmit("contactform");
})();
