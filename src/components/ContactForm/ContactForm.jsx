import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";

const validation = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short!")
    .max(30, "Too long!")
    .required("Required"),
  number: Yup.number().required("Required"),
});

const handleSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();

  return (
    <div>
      <Formik onSubmit={handleSubmit} validationSchema={validation}>
        <Form className={css.form}>
          <label htmlFor={nameId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={nameId}
          />

          <label htmlFor={numberId}>Number</label>
          <Field className={css.field} type="tel" name="number" id={numberId} />

          <button type="submit" className={css.submitBtn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
