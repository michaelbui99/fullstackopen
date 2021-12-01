import personService from "../services/PersonService";
const PhoneBookEntry = ({ person, setPersons }) => {
  const service = personService();
  const deletePerson = () => {
    try {
      service
        .delete(person.id)
        .then(async () => setPersons(await service.getAll()));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <p>
        {person.name} {person.number}
        <button onClick={deletePerson}>Delete</button>
      </p>
    </div>
  );
};

export default PhoneBookEntry;
