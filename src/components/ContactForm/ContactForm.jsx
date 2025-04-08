import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
const formSchema = Yup.object({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().min(3).max(50).required("Required"),
});
export default function ContactForm({ onAddContact }) {
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.cform}>
        <div className={css.group}>
          <label>Name </label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />
        </div>
        <div className={css.group}>
          <label>Number </label>
          <Field type="tel" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            style={{ color: "red" }}
          />
        </div>

        <button className={css.group} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
