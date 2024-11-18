import { useId } from "react";
import css from "./UserForm.module.css";

export default function UserForm({ onAdd }) {
  const fieldId = useId();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAdd({
      username: evt.target.elements.username.value,
      role: evt.target.elements.role.value,
    });
    evt.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.group}>
        <label htmlFor={`${fieldId}-username`}>Username</label>
        <input type="text" name="username" id={`${fieldId}-username`} />
      </div>

      <div className={css.group}>
        <label htmlFor={`${fieldId}-role`}>Role</label>
        <select name="role" id={`${fieldId}-role`}>
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
