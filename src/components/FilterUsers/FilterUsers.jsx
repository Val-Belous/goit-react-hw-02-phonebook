export const FilterUsers = ({ filter, handlerFilter }) => {
  return (
    <form>
      <label>
        Find User by name
        <input
          type="text"
          name="name"
          value={filter}
          onChange={handlerFilter}
        />
      </label>
    </form>
  );
};
