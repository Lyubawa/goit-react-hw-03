import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './ContactForm.module.css'

const userSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
    number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format").required("Required!"),
});

const initialValues = {
    name: "",
    number: "",
};


export default function ContactForm({ onAdd }) {
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        })
        actions.resetForm();
}

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={userSchema}
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
            <div className={css.field}>
                <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name="name" id={nameFieldId} />
                    <ErrorMessage className={css.error} name="name" component="span" />
            </div>
            <div className={css.field}>
                <label htmlFor={numberFieldId}>Number</label>
                    <Field type="text" name="number" id={numberFieldId} />
                    <ErrorMessage className={css.error} name="number" component="span" />
            </div>
            <button type="submit" className={css.btn}>Add contact</button>
            </Form>
        </Formik>

    )
}
