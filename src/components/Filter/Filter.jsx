export const Filter = ({ handlerFilter }) => {
  return (
    <form>
      <label>
        Find Contacts by name
        <input type="text" name="name" onChange={handlerFilter} />
      </label>
    </form>
  );
};
