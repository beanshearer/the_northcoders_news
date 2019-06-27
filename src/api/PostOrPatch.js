import axios from "axios";

const PostOrPatchRequests = (type, key, uri, body) => {
  const baseApi = `https://bens-northcoders-news.herokuapp.com/api/`;
  return axios[type](`${baseApi}${uri}`, body).then(response => {
    return response.data[key];
  });
};

export default PostOrPatchRequests;
