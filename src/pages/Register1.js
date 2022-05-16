import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import axios from "axios";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    padding: 50px;
    border-radius: 10px;
    span {
      font-size: 1.3rem;
      font-weight: 700;
      color: #0d6efd;
    }
    .register-form {
      margin-top: 20px;
      display: flex;
      column-gap: 50px;
      .personal-details {
      }
    }
    .button {
      display: flex;
      justify-content: center;
      button {
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        text-transform: uppercase;
        padding: 10px 50px;
        border: none;
        background-color: #0d6efd;
        cursor: pointer;
        &:hover {
          background-color: #0d6dfddd;
        }
      }
    }
  }
  .flex-column {
    display: flex;
    flex-direction: column;
    margin: 15px 0;
  }
  label {
    margin-bottom: 5px;
  }
  input,
  select {
    outline: none;
    font-size: 1rem;
    padding: 5px 10px;
    width: 220px;
    border: 1px solid #3c3c3c;
    border-radius: 5px;
  }
  span.error {
    font-size: 1rem;
    font-weight: 400;
    /* text-align: center; */
    color: #ff3535;
  }
  .red-border1,
  .red-border2,
  .red-border3,
  .red-border4,
  .red-border5,
  .red-border6,
  .red-border7 {
    border-color: red;
  }
  .red-label1,
  .red-label2,
  .red-label3,
  .red-label4,
  .red-label5,
  .red-label6,
  .red-label7 {
    color: red;
  }
  .error {
    font-size: 0.5rem;
  }
`;

const Register1 = () => {
  const phoneRegExp =
    "/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/";

  return (
    <div>
      <Formik
        initialValues={{
          fullName: "",
          shopName: "",
          contactNo: "",
          shopContactNo: "",
          shopEmail: "",
          email: "",
          shopVatNo: "",
        }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .min(5, "FullName Must be 5 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          shopName: Yup.string()
            .min(5, "FullName Must be 5 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          contactNo: Yup.string()
            .required("This field is Required")
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              "Phone number is not valid"
            ),
          shopContactNo: Yup.string()
            .required("This field is Required")
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              "Phone number is not valid"
            ),
          shopEmail: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          shopVatNo: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          console.log(values);
          alert(JSON.stringify(values, null, 2));
          axios({
            method: "POST",
            url: "http://167.71.226.245:3005/api/vendors/signup",
            data: {
              fullName: values.fullName,
              shopName: values.shopName,
              contactNo: values.contactNo,
              shopContactNo: values.shopContactNo,
              shopEmail: values.shopEmail,
              email: values.email,
              shopVatNo: values.shopVatNo,
            },
          })
            .then((res) => {
              //API call successfull
              const {
                data: { token },
              } = res;
              console.log(res, "response");
            })
            .catch((err) => {
              // API call failed
              console.log(err, "err");
            });
        }}
      >
        {({ errors, resetForm, isSubmitting, ...props }) => {
          console.log(props);
          return (
            <Form>
              <Container>
                <div className="box">
                  <span>
                    please fill in the details to join in as a vendors!
                  </span>
                  <div className="register-form">
                    <div className="personal-details">
                      <h2>personal details</h2>
                      <div className="form">
                        <div className="fname flex-column">
                          <label
                            htmlFor="fname"
                            className={errors.fullName ? "red-label1" : ""}
                          >
                            Full name
                          </label>
                          <Field
                            name="fullName"
                            type="text"
                            id="fName"
                            className={errors.fullName ? "red-border1" : ""}
                          />
                          <ErrorMessage name="fullName">
                            {(msg) => <span className="error">{msg}</span>}
                          </ErrorMessage>
                        </div>
                        <div className="contact-number flex-column">
                          <label
                            htmlFor="contact-number"
                            className={errors.contactNo ? "red-label2" : ""}
                          >
                            Contact number
                          </label>
                          <Field
                            name="contactNo"
                            type="tel"
                            id="contact-number"
                            className={errors.contactNo ? "red-border2" : ""}
                          />
                          <ErrorMessage name="contactNo">
                            {(msg) => <span className="error">{msg}</span>}
                          </ErrorMessage>
                        </div>
                        <div className="email flex-column">
                          <label
                            htmlFor="email"
                            className={errors.email ? "red-label2" : ""}
                          >
                            email
                          </label>
                          <Field
                            name="email"
                            type="email"
                            id="email"
                            className={errors.email ? "red-border3" : ""}
                          />
                          <ErrorMessage name="email">
                            {(msg) => <span className="error">{msg}</span>}
                          </ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <div className="shop-details">
                      <h2>shop details</h2>
                      <div className="form">
                        <div className="shop-name flex-column">
                          <label
                            htmlFor="shop-name"
                            className={errors.shopName ? "red-label4" : ""}
                          >
                            shop name
                          </label>
                          <Field
                            name="shopName"
                            type="text"
                            id="shop-name"
                            className={errors.shopName ? "red-border4" : ""}
                          />
                          <ErrorMessage name="shopName">
                            {(msg) => <span className="error">{msg}</span>}
                          </ErrorMessage>
                        </div>
                        <div className="shop-contact-number flex-column">
                          <label
                            htmlFor="shop-contact-number"
                            className={errors.shopContactNo ? "red-label5" : ""}
                          >
                            Shop contact number
                          </label>
                          <Field
                            name="shopContactNo"
                            type="tel"
                            id="shop-contact-number"
                            className={
                              errors.shopContactNo ? "red-border5" : ""
                            }
                          />
                          <ErrorMessage name="shopContactNo">
                            {(msg) => <span className="error">{msg}</span>}
                          </ErrorMessage>
                        </div>
                        <div className="shop-email flex-column">
                          <label
                            htmlFor="shop-email"
                            className={errors.shopEmail ? "red-label6" : ""}
                          >
                            Shop email
                          </label>
                          <Field
                            name="shopEmail"
                            type="email"
                            id="shop-email"
                            className={errors.shopEmail ? "red-border6" : ""}
                          />
                          <ErrorMessage name="shopEmail">
                            {(msg) => <span className="error">{msg}</span>}
                          </ErrorMessage>
                        </div>
                        <div className="shop-vat flex-column">
                          <label
                            htmlFor="shop-vat"
                            className={errors.shopVatNo ? "red-label7" : ""}
                          >
                            Shop vat
                          </label>
                          <Field
                            name="shopVatNo"
                            type="number"
                            id="shop-vat"
                            className={errors.shopVatNo ? "red-border7" : ""}
                          />
                          <ErrorMessage name="shopVatNo">
                            {(msg) => <span className="error">{msg}</span>}
                          </ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <div className="categories-applied">
                      <h2>categories applied</h2>
                      <div className="form flex-column">
                        <label htmlFor="categories">categories</label>
                        <select id="categories">
                          <option value="Clothes">Clothes</option>
                          <option value="Food">Food</option>
                          <option value="Electronics">Electronics</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="button">
                    <button
                      type="submit"
                      //   onClick={handlePressJoinButton}
                    >
                      {isSubmitting ? "....." : "JOIN"}
                    </button>
                  </div>
                  <div>
                    <button onClick={(e) => resetForm()}>Reset</button>
                  </div>
                </div>
                {/* {props.isSubmitting && <span>is submitting..........</span>} */}
              </Container>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Register1;
