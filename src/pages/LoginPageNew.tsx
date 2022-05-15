import React, { useCallback, useState } from "react";
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/loginPageNew.scss";
import { YoutubeSearchedFor, YouTube, Instagram, WhatsApp } from "@material-ui/icons";

//enum for showing area
enum Area {
  step1 = "step1",
  step2 = "step2"
}

//form step 1
type Values = Yup.InferType<typeof validationSchema>;
const validationSchema = Yup.object({
  phoneNumber: Yup.string()
    .required("شماره تلفن را وارد کنید")
    .matches(
      /(09[0-3][0-9]-?[0-9]{3}-?[0-9]{4})/,
      "شماره موبایل را صحیح وارد کنید"
    ),
});
const initialValues: Values = {
  phoneNumber: "",
};

//form step 2
type Values2 = Yup.InferType<typeof validationSchema2>;
const validationSchema2 = Yup.object({
  verifyCode: Yup.string()
    .required("کد تایید را وارد کنید")
    .matches(/^[0-9]{5}$/, "کد پنج رقمی را وارد کنید"),
});
const initialValues2: Values2 = {
  verifyCode: "",
};

const LoginPageNew = () => {
  const [area, setArea] = useState<Area>(Area.step1);

  const changeStep = useCallback(() => {
    setArea(Area.step1)
  }, [])

  return (
    <main id="login-page-new" className="light">
      <div className="login-container">
        <img className="logo" src="/images/logo.svg" alt="bad-teacher-logo" />
        {area === "step1" && (
          <>
            <h2>برای ورود یا ثبت نام شماره موبایل خود را وارد کنید</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                setTimeout(() => {
                  console.log(values);
                  initialValues.phoneNumber = values.phoneNumber;
                  setArea(Area.step2);
                  setSubmitting(false);
                }, 500);
              }}
            >
              <Form className="form-step1">
                <label className="form-group">
                  <Field
                    type="tel"
                    placeholder="09123456789"
                    name="phoneNumber"
                    id="phoneNumber"
                  />
                  <i className="fas fa-phone-alt"></i>
                </label>
                <ErrorMessage
                  component={"p"}
                  className="error"
                  name="phoneNumber"
                />
                <input type="submit" value="تایید" />
              </Form>
            </Formik>
          </>
        )}
        {area === "step2" && (
          <>
            <i className="fas fa-long-arrow-alt-right" onClick={changeStep}></i>
            <p>کد تایید ارسالی به شماره موبایل</p>
            <p>{initialValues.phoneNumber} را وارد کنید</p>
            <Formik
              initialValues={initialValues2}
              validationSchema={validationSchema2}
              onSubmit={(
                values: Values2,
                { setSubmitting }: FormikHelpers<Values2>
              ) => {
                setTimeout(() => {
                  console.log(values);                  
                  setSubmitting(false);
                }, 500);
              }}
            >
              <Form className="form-step2">
                <Field type="number" placeholder="کد تایید"  name="verifyCode" />
                <ErrorMessage
                  component={"p"}
                  className="error"
                  name="verifyCode"
                />
                <button type="submit">تایید</button>
              </Form>
            </Formik>
            <a href="">
              کدی دریافت نکردید؟ <strong>ارسال مجدد</strong>
            </a>
          </>
        )}
      </div>
      <div className="login-page-new-footer">
        <a href="#"><YouTube className="icon" /></a>
        <a href="#"><Instagram className="icon" /></a>
        <a href="#"><WhatsApp className="icon" /></a>
        <p>آکادمی زبان Bad Teacher</p>
      </div>
    </main>
  );
};

export default LoginPageNew;
