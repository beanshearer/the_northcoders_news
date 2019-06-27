import axios from "axios";

const Delete = uri => {
  const baseApi = `https://bens-northcoders-news.herokuapp.com/api/`;
  return axios.delete(`${baseApi}${uri}`);
};

export default Delete;
