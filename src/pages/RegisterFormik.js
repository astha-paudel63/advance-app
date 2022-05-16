import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: cursive;
color: #fff;
display: flex;
height:100vh;
justify-content: center;
align-items: center;
background: linear-gradient(135deg,#dfc2d5,#3d1d32);
padding: 10px;

.container{
  max-width: 700px;
  width:100%;
  padding:25px 30px;
  border-radius: 25px;
  background: linear-gradient(#ae8ea3,#412a3e);
}
.container .heading {
  font-size:25px;
  font-weight:500;
  position: relative;
  text-align: center;
  padding: 0 0 20px 0;
}

.container .heading::before{
  content: '';
  position: absolute;
  height:3px;
  left:0;
  bottom:0;
  width: 100%;
  background: linear-gradient(135deg,#c572a8,#412a3e);
}
.container form .card-details{
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

form .card-details .card-box{
  width:calc(100% / 2 - 20px);
  margin-bottom: 5px;
}
 .card-details .card-box .details{
   display:block;
   font-weight: 500;
   margin-bottom: 15px;
 }
.card-details .card-box .input{
  height:45px;
  width:100%;
  outline:none;
  border-radius: 5px;
  border:1px soild #ccc;
  padding-left: 15px;
  font-size: 16px;
  border-bottom-width:2px ;
  transition: all 0.3s ease;
}
.card-details .card-box .input:focus, .card-details .card-box .input:valid{
  border-color:#412a3e;
}
form .button-wapper{
  margin: 30px;
  padding-right: 80px;
}

form .button-wapper button{
  padding: 10px 0;
  margin-top:10px;
  height:40px;
  width:120%;
  outline: none;
  color: #fff;
  border: none;
  font-weight: 500;
  border-radius: 5px;
  letter-spacing: 5px;
  background: linear-gradient(#c572a8,#412a3e);
}
span.error{
  color: #fed503;
}




  
  
`;

const RegisterFormik = () => {
  const phoneRegExp =
    "/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/";
  return (
    <Container>
    <div className="container">
      <div className="heading">
      <h1>Sign Up</h1>
      </div>
      <Formik
        initialValues={{
          fullName: "",
          contactNo: "",
          email: "",
          shopName: "",
          shopContactNo: "",
          shopEmail: "",
          shopVatNo: "",
        }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .min(5, "FullName Must be 5 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          contactNo: Yup.string().matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Phone number is not valid"
          ).required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),

          shopName: Yup.string()
            .min(5, "FullName Must be 5 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("Required"),

          shopContactNo: Yup.string().matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              "Phone number is not valid"
            ).required("Required"),

          shopEmail: Yup.string()
            .email("Invalid email address")
            .required("Required"),

          shopVatNo: Yup.string().required("Required"),
        })}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
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
          <div className="card-details">
          <div className="card-box">
            <span className="details">FullName</span>
            <Field className="input" name="fullName" placeholder="FullName" type="text"/>
            <ErrorMessage name="fullName">
              {(msg) => <span className="error">{msg}</span>}
            </ErrorMessage>
          </div>

          <div className="card-box">
            <span className="details">contactNo</span>
            <Field className="input" name="contactNo" placeholder="ContactNo" type="tel"/>
            <ErrorMessage name="contactNo">
              {(msg) => <span className="error">{msg}</span>}
            </ErrorMessage>
          </div>
          <div className="card-box">
            <span className="details">Email</span>
            <Field
              className="input"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <ErrorMessage name="email">
              {(msg) => <span className="error">{msg}</span>}
            </ErrorMessage>
          </div>
          <div className="card-box">
            <span className="details">shopName</span>
            <Field
              className="input"
              name="shopName"
              placeholder="shopName"
              type="text"
            />
            <ErrorMessage name="shopName">
              {(msg) => <span className="error">{msg}</span>}
            </ErrorMessage>
            
          </div>
          <div className="card-box">
            <span className="details">shopContactNo</span>
            <Field
              className="input"
              name="shopContactNo"
              placeholder="shopContactNo"
              type="tel"
            />
            <ErrorMessage name="shopContactNo">
              {(msg) => <span className="error">{msg}</span>}
            </ErrorMessage>
          </div>
          <div className="card-box">
            <span className="details">shopEmail</span>
            <Field
              className="input"
              name="shopEmail"
              placeholder="shopEmail"
              type="email"
            />
            <ErrorMessage name="shopEmail">
              {(msg) => <span className="error">{msg}</span>}
            </ErrorMessage>
          </div>
          <div className="card-box">
            <span className="details">shopVatNo</span>
            <Field
              className="input"
              name="shopVatNo"
              placeholder="shopVatNo"
              type="text"
            />
             <ErrorMessage name="shopVatNo">
              {(msg) => <span className="error">{msg}</span>}
            </ErrorMessage>
          </div>
          <div className="button-wapper">
          <button type="submit">Submit</button>
          </div>
          </div>
        </Form>
          );
      }}
      </Formik>
    </div>
    </Container>
  );
  
};

export default RegisterFormik;
