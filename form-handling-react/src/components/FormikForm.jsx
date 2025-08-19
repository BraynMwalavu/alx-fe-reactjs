import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Min 6 characters").required("Password required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Form submitted:", values);

    // Mock API simulation
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => console.log("User registered (Formik):", data))
      .catch((err) => console.error("Error:", err));

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="p-4 border rounded w-80">
        <h2 className="text-xl mb-3">Register (Formik)</h2>

        <div className="mb-2">
          <label>Username:</label>
          <Field name="username" type="text" className="border p-1 w-full" />
          <ErrorMessage name="username" component="div" className="text-red-500" />
        </div>

        <div className="mb-2">
          <label>Email:</label>
          <Field name="email" type="email" className="border p-1 w-full" />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>

        <div className="mb-2">
          <label>Password:</label>
          <Field name="password" type="password" className="border p-1 w-full" />
          <ErrorMessage name="password" component="div" className="text-red-500" />
        </div>

        <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
}
