import { Formik, Form, Field } from "formik";
import css from "./SearchForm.module.css";

export default function SearchForm({ onSearch }) {
  const handleSubmit = (values, actions) => {
    onSearch(values.query);
    actions.resetForm();
  };
  return (
    <>
      <div>
        <Formik
          initialValues={{
            query: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <Field type="text" name="query" className={css.input} />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
