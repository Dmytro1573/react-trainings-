import { Formik, Field, Form } from "formik";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    onSubmit(values.query);
    actions.resetForm();
  };

  return (
    <>
      <header>
        <div>
          <Formik
            initialValues={{
              query: "",
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <Field
                type="text"
                placeholder="Search images and photos"
                name="query"
              />
              <button type="submit">Search</button>
            </Form>
          </Formik>
        </div>
      </header>
    </>
  );
}
