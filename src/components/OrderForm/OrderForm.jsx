import { FaTshirt } from "react-icons/fa";
import css from "./OrderForm.module.css";
import { useState } from "react";

const initialValues = {
  size: "md",
  color: "blue",
};

export default function OrderForm({ onSelect }) {
  const [selectShirt, setSelectShirt] = useState(initialValues);

  const handleChangeShirt = (event) => {
    setSelectShirt({
      ...selectShirt,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitShirt = (event) => {
    event.preventDefault();
    onSelect(selectShirt);
    setSelectShirt(initialValues);
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={css.form}
      onSubmit={handleSubmitShirt}
    >
      <FaTshirt size="160" color={selectShirt.color} />

      <div className={css.group}>
        <label>Size</label>
        <select
          name="size"
          value={selectShirt.size}
          onChange={handleChangeShirt}
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div className={css.group}>
        <label>Color</label>
        <select
          name="color"
          value={selectShirt.color}
          onChange={handleChangeShirt}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
