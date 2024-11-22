import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./UserForm.module.css";
import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  username: Yup.string().min(3, "Too Short").required(),
  email: Yup.string().email().required(),
  role: Yup.string().oneOf(["guest", "user", "admin"]),
  comment: Yup.string().max(35, "Too long"),
});

export default function UserForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          role: "guest",
          comment: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label>Username:</label>
            <Field className={css.input} type="text" name="username" />
            <ErrorMessage name="username" />
          </div>

          <div className={css.formGroup}>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <label>Role:</label>
            <Field as="select" name="role">
              <option value="guest">Guest</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Field>
          </div>

          <div className={css.formGroup}>
            <label>Comment:</label>
            <Field as="textarea" name="comment" />
            <ErrorMessage name="comment" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
