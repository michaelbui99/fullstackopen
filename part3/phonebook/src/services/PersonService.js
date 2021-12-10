import axios from "axios";
export default function personService() {
  return {
    url: "/api/persons",
    getAll: async function () {
      const response = await axios.get(this.url);
      return response.data;
    },

    getById: async function (id) {
      const response = await axios.get(`${this.url}/{id}`);
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

    update: async function (
      name,
      person = { name: undefined, number: undefined }
    ) {
      if (
        person.name === undefined ||
        person.number === undefined ||
        person.name === null ||
        person.number === null
      ) {
        throw "Invalid person";
      }
      try {
        const existingPerson = await this.getByName(person.name);
        console.log({ existingPerson });
        let replace = window.confirm(
          `${person.name} is already added to the phonebook, replace old number with new number? `
        );
        if (replace) {
          const updatedPerson = { ...existingPerson, number: person.number };
          const response = await axios.put(
            `${this.url}/${existingPerson.id}`,
            updatedPerson
          );
        } else {
          return;
        }
      } catch (err) {
        this.createPerson(person);
      }
    },

    getByName: async function (name) {
      const allPersons = await this.getAll();
      let existingPerson = null;
      allPersons.forEach((p) => {
        if (p.name.toLowerCase() === name.toLowerCase()) {
          existingPerson = p;
        }
      });

      if (existingPerson === null) {
        throw "Not found";
      }

      return existingPerson;
    },

    delete: async function (id) {
      await axios.delete(`${this.url}/${id}`);
    },
  };
}
