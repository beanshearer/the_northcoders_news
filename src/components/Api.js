import axios from "axios";

const getRequests = (data, uri = data) => {
  const baseApi = `https://bens-northcoders-news.herokuapp.com/api/`;
  return axios.get(`${baseApi}${uri}`).then(response => {
    return response.data[data];
  });
};

export default getRequests;
