import React from 'react'
import axios from "axios";
import Navbar from '../../Layout/Navbar/Navbar'
import {Helmet} from "react-helmet";
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
import "./Add.scss"
function Add() {
  return (
    <div>
       <Helmet>
        <title>Add</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <Navbar/>
    <Formik
        initialValues={{ name: "", job:"",description:"" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
            job: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Required"),
            description: Yup.string()
            .max(45, "Must be 45 characters or less")
            .required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
          axios.post("http://localhost:7777/cards", values);
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="job">job</label>
          <Field name="job" type="text" />
          <ErrorMessage name="job" />

          <label htmlFor="description">description</label>
          <Field name="description" type="text" />
          <ErrorMessage name="description" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Add
