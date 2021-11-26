import axios from "axios";
export default function personService() {
  return {
    url: "http://localhost:8080/persons",
    getAll: async function () {
      const response = await axios.get(this.url);
      return response.data;
    },

    createPerson: async function (
      person = { name: undefined, number: undefined, id: undefined }
    ) {
      if (
        person.name === null ||
        person.name === undefined ||
        person.number === null ||
        person.number === undefined
      ) {
        throw "Name or number was null or undefined";
      }

      const allPersons = await this.getAll();
      allPersons.forEach((p) => {
        if (p.name === person.name) {
          throw "Person already exists";
        }
      });

      let maxId = 0;
      allPersons.forEach((p) => {
        if (p.id > maxId) {
          maxId = p.id;
        }
      });

      const newPerson = { ...person, id: maxId + 1 };
      const response = await axios.post(this.url, newPerson);
      return response.data;
    },

    update: async function (id, person) {
      const response = await axios.put(`${this.url}/${id}`, person);
      return response.data;
    },

    delete: async function (id) {
      await axios.delete(`${this.url}/${id}`);
    },
  };
}
