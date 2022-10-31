const header = new Headers({
  Accept: "application/json",
  // ContentType: "multipart/form-data",
});

let requestHeaders = new Headers();
requestHeaders.append("Accept", "application/json");

function get(endpoint) {
  return fetch(endpoint.url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then((res) => {
    console.log("[GET]: ", res);
    return handleResponse(res, endpoint.url);
  });
}

function post(endpoint, data) {
  console.log(data);
  return fetch(endpoint.url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: endpoint.isProtected ? getJWT() : null,
    },
    body: data,
  }).then((res) => {
    console.log("[POST]: ", res);
    return handleResponse(res, endpoint.url);
  });
}

async function handleResponse(response, url) {
  if (200 === response.status) {
    let data = await response.json();
    return Promise.resolve(data);
  } else {
    console.error(`Request failed. URL= ${url}`);
    return Promise.reject({
      code: response.status,
      message: "Request failed due to your network error, please try later.",
      error: "Request failed due to your network error, please try later.",
    });
  }
}

export { get, post };
