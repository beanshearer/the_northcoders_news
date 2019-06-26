import axios from "axios";

const PostRequests = (data, uri, body) => {
  const baseApi = `https://bens-northcoders-news.herokuapp.com/api/`;
  return axios.post(`${baseApi}${uri}`, body).then(response => {
    return response.data[data];
  });
};

export default PostRequests;
