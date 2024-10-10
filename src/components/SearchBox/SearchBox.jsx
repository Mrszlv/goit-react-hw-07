import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={s.wrapp}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={handleSearch}
          placeholder="Enter name..."
        />
      </label>
    </div>
  );
};

export default SearchBox;
