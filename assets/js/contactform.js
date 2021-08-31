import * as params from '@params';

export let handleSubmit = (formid) => {
    const form = document.querySelector('form');
    if(form) form.addEventListener('submit', handle);
};

export const postJson = (formdata) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", params.api, true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log("Successful");
        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
            console.log("Something went wrong");
        }
    }
    xhr.send(JSON.stringify(formdata));
}

const handle = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log({ value });
    console.log(params.api);
    postJson(value);
};



handleSubmit("contactform");
