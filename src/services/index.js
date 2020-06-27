import axios from "axios";

export default function fireAjax(method, URL, headers, data) {
  const url = URL;
  let config = {};
  if (headers != undefined && headers != "") {
    config = {
      headers
    };
  } else {
    config = {
      header: {
        "Content-Type": "application/json"
      }
    };
  }
  if (method === "GET") {
    return axios.get(url, config);
  }
   else if (method === "POST") {
    return axios.post(url, data, config);
  } else if (method === "PUT") {
    return axios.put(url, data, config);
  }
}
