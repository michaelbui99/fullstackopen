import axios from "axios";
export default function personService() {
  return {
    url: "http://localhost:8080/persons",
    getAll: async function () {
      const response = await axios.get(this.url);
      return response.data;
    },

    createPerson: async function (person) {
      const response = await axios.post(this.url, person);
      return response.data;
    },

    update: async function (id, person) {
      const response = await axios.put(`${this.url}/${id}`, person);
      return response.data;
    },
  };
}
