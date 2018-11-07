import Axios from "axios";

//Options for Request
const options = {
  method: "get",
  url: "http://redux.getsandbox.com/contacts"
};

async function getContacts() {
  const infor = await Axios(options)
    .then(result => {
      return result;
    })
    .then(data => {
      return data;
    })
    .then(final => {
      return final;
    })
    .catch(error => {
      console.log("ERROR REQUEST ==> ", error);
    });
  return await infor;
}

export { getContacts };
