const SearchFilter = ({ handleFilterInputChange }) => {
  return (
    <div>
      <p>
        Filter shown with:{" "}
        <span>
          <input type="text" onChange={handleFilterInputChange} />
        </span>
      </p>
    </div>
  );
};

export default SearchFilter;
