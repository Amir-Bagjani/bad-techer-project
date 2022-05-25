import { useCallback, useState } from "react";
import { useFormik, FormikProps, FormikHelpers } from "formik";
import { BsInstagram, BsWhatsapp, BsYoutube, BsArrowLeftCircle, BsFillTelephoneFill } from "react-icons/bs";
import * as Yup from "yup";
import "../styles/loginPageNew.scss";

//enum type area
enum Area {
  step1 = "step1",
  step2 = "step2",
}

//form step 1
type ValuesStep1 = Yup.InferType<typeof validationSchema1>;
const initialValuesStep1: ValuesStep1 = {
  phoneNumber: "",
};
const validationSchema1 = Yup.object({
  phoneNumber: Yup.string()
    .required("شماره تلفن را وارد کنید")
    .max(11, "شماره موبایل باید 11 رقم باشد")
    .matches(
      /(09[0-3][0-9]-?[0-9]{3}-?[0-9]{4})/,
      "شماره موبایل را صحیح وارد کنید"
    ),
});

//form step 2
type ValuesStep2 = Yup.InferType<typeof validationSchema2>;
const initialValuesStep2: ValuesStep2 = {
  verifyCode: "",
};
const validationSchema2 = Yup.object({
  verifyCode: Yup.string()
    .required("کد تایید را وارد کنید")
    .matches(/^[0-9]{5}$/, "کد پنج رقمی را وارد کنید"),
});

const LoginPageNew = () => {
  const [area, setArea] = useState<Area>(Area.step1);

  //form step one
  const formS1: FormikProps<ValuesStep1> = useFormik<ValuesStep1>({
    initialValues: initialValuesStep1,
    onSubmit: (values, { setSubmitting }: FormikHelpers<ValuesStep1>) => {
      setTimeout(() => {
        console.log(values);
        initialValuesStep1.phoneNumber = values.phoneNumber;
        setArea(Area.step2);
        setSubmitting(false);
      }, 500);
    },
    validationSchema: validationSchema1,
  });

  //form step two
  const formS2: FormikProps<ValuesStep2> = useFormik<ValuesStep2>({
    initialValues: initialValuesStep2,
    onSubmit: (values, { setSubmitting }: FormikHelpers<ValuesStep2>) => {
      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
      }, 500);
    },
    validationSchema: validationSchema2,
  });

  //handle change form
  const change = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, area: Area) => {
      e.preventDefault();
      const { value } = e.target;
      const regex = /[0-9]/;
      if (!value || regex.test(value)) {
        area === "step1"
          ? formS1.setFieldValue("phoneNumber", value)
          : formS2.setFieldValue("verifyCode", value);
      }
    },
    []
  );

  return (
    <main id="login-page-new" className="light">
      <div className="login-container">
        <img className="logo" src="/images/logo.svg" alt="bad-teacher-logo" />
        {area === "step1" && (
          <>
            <h2>برای ورود یا ثبت نام شماره موبایل خود را وارد کنید</h2>
            <form className="form-step1" onSubmit={formS1.handleSubmit}>
              <label className="form-group">
                <input
                  type="text"
                  maxLength={11}
                  placeholder="09123456789"
                  name="phoneNumber"
                  onChange={(e) => change(e, Area.step1)}
                  value={formS1.values.phoneNumber}
                  onBlur={formS1.handleBlur}
                />
                <BsFillTelephoneFill className="icon" />
              </label>
              {formS1.errors.phoneNumber && formS1.touched.phoneNumber && (
                <p className="error">{formS1.errors.phoneNumber}</p>
              )}
              <input type="submit" value="تایید" />
            </form>
          </>
        )}
        {area === "step2" && (
          <>
            <BsArrowLeftCircle className="icon" onClick={() => setArea(Area.step1)} />
            <p>کد تایید ارسالی به شماره موبایل</p>
            <p>{initialValuesStep1.phoneNumber} را وارد کنید</p>

            <form className="form-step2" onSubmit={formS2.handleSubmit}>
              <input
                type="text"
                maxLength={5}
                placeholder="کد تایید"
                name="verifyCode"
                onChange={(e) => change(e, Area.step2)}
                value={formS2.values.verifyCode}
                onBlur={formS2.handleBlur}
              />
              {formS2.errors.verifyCode && formS2.touched.verifyCode && (
                <p className="error">{formS2.errors.verifyCode}</p>
              )}
              <button type="submit">تایید</button>
            </form>
            <a href="">
              کدی دریافت نکردید؟ <strong>ارسال مجدد</strong>
            </a>
          </>
        )}
      </div>
      <div className="login-page-new-footer">
        <a href="#">
          <BsYoutube className="icon" />
        </a>
        <a href="#">
          <BsInstagram className="icon" />
        </a>
        <a href="#">
          <BsWhatsapp className="icon" />
        </a>
        <p>آکادمی زبان Bad Teacher</p>
      </div>
    </main>
  );
};

export default LoginPageNew;
