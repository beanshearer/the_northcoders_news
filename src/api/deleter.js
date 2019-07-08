import axios from "axios";

const deleter = uri => {
  const baseApi = `https://bens-northcoders-news.herokuapp.com/api/`;
  return axios.delete(`${baseApi}${uri}`);
};

export default deleter;
