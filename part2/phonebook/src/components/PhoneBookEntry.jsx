const PhoneBookEntry = ({ person }) => {
  return (
    <div>
      <p>
        {person.name} {person.number}
      </p>
    </div>
  );
};

export default PhoneBookEntry;
