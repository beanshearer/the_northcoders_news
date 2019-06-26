import axios from "axios";

const PostOrPatchRequests = (type, data, uri, body) => {
  const baseApi = `https://bens-northcoders-news.herokuapp.com/api/`;
  return axios[type](`${baseApi}${uri}`, body).then(response => {
    return response.data[data];
  });
};

export default PostOrPatchRequests;
