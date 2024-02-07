import React from "react";
import { nanoid } from 'nanoid';
import { Forma, Button, Label } from "./Form.styled";
import { Formik, Field, ErrorMessage} from "formik";
import * as yup from 'yup'; 

  const nameId = nanoid();
  const telId = nanoid();
  const initialValues = {
    name: '',
    number: '',
} 
const schema = yup.object().shape({
  name: yup.string().max(16).required(),
  number: yup.string().min(3).max(16).required(),
});
  
const Form = ({ onSubmit }) => {
  
  const handleSubmit = (values, {resetForm}) => {
    onSubmit(values);
    resetForm();
};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      <Forma>
        <Label htmlFor={nameId}>Name
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="div"/>
        </Label>
        <Label htmlFor={telId}>Number
          <Field type="tel" name="number" id={telId} />
          <ErrorMessage name="number" component="div"/>
        </Label>
        <Button type="submit">Add contact</Button>
      </Forma>
    </Formik>
  )
}

export default Form;