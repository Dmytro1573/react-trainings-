import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <>
      <div className={css.filter}>
        <label>
          Find contacts by name
          <input
            type="text"
            value={value}
            onChange={(e) => onFilter(e.target.value)}
          />
        </label>
      </div>
    </>
  );
}
