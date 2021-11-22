const NewEntryInput = ({
  onSubmit,
  handleNumberInputChange,
  handleNameInputChange,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input type="text" onChange={handleNameInputChange} />
      </div>
      <div>
        number: <input type="text" onChange={handleNumberInputChange} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default NewEntryInput;
