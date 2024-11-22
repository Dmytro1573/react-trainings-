import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <>
      <div className={css.contact}>
        <div className={css.contactInfo}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
        </div>

        <button type="button" onClick={() => onDelete(contact.id)}>
          Delete
        </button>
      </div>
    </>
  );
}
