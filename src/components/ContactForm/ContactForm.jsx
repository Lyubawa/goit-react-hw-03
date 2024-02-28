import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const userSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
    number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format").required("Required!"),
});

const initialValues = {
    username: "",
    number: "",
};


export default function ContactForm({ onAdd }) {
    const usernameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            username: values.name,
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
            <Form>
            <div>
                <label htmlFor={usernameFieldId}>Name</label>
                    <Field type="text" name="username" id={usernameFieldId} />
                    <ErrorMessage name="username" component="span" />
            </div>
            <div>
                <label htmlFor={numberFieldId}>Number</label>
                    <Field type="text" name="number" id={numberFieldId} />
                    <ErrorMessage name="number" component="span" />
            </div>
            <button type="submit">Add contact</button>
            </Form>
        </Formik>

    )
}


// const userSchema = Yup.object().shape({
//     username: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
//     number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format").required("Required!"),
// });

// export default function ContactForm({ onAdd }) {
//     const usernameFieldId = useId();
//     const numberFieldId = useId();

//     return (
//         <Formik initialValues={{
//             username: "",
//             number: "",
//         }}
//             validationSchema={userSchema}
//             onSubmit={(values, actions) => {
//             const model = { ...values, id: nanoid() };
//             onAdd(model);
//             actions.resetForm();
//         }}>
//             <Form>
//             <div>
//                 <label htmlFor={usernameFieldId}>Name</label>
//                     <Field type="text" name="username" id={usernameFieldId} />
//                     <ErrorMessage name="username" component="span" />
//             </div>
//             <div>
//                 <label htmlFor={numberFieldId}>Number</label>
//                     <Field type="text" name="number" id={numberFieldId} />
//                     <ErrorMessage name="number" component="span" />
//             </div>
//             <button type="submit">Add contact</button>
//             </Form>
//         </Formik>

//     )
// }