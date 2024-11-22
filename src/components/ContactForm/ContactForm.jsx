import { Formik, Field, ErrorMessage, Form } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short").required(),
  number: Yup.string().required("This must be filed"),
});

export default function ContactForm({ onAdd }) {
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd(values), actions.resetForm();
  };

  return (
    <>
      <div>
        <Formik
          initialValues={{
            name: "",
            number: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={ValidationSchema}
        >
          <Form className={css.form}>
            <div>
              <label htmlFor={`${fieldId}-name`}>Name</label>
              <Field type="text" name="name" id={`${fieldId}-name`} />
              <ErrorMessage
                component="span"
                className={css.error}
                name="username"
              />
            </div>

            <div>
              <label htmlFor={`${fieldId}-number`}>Number</label>
              <Field type="text" name="number" id={`${fieldId}-number`} />
              <ErrorMessage
                component="span"
                className={css.error}
                name="number"
              />
            </div>

            <button type="submit">Add contact</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
