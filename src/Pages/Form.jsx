import "../App.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [submit, setSubmit] = useState(false);

  const doneSubmit = (data) => {
    if (
      data.Name.length >= 3 &&
      data.Name.length <= 30 &&
      data.email.includes("@") &&
      data.password.length >= 10 &&
      /[!@#$%^&*(),.?":{}|<>]/.test(data.password) &&
      data.password === data.confirmPassword
    ) {
      setSubmit(true);
    }
  };

  return (
    <div className={submit ? "success-message" : "formContainer"}>
      {submit ? (
        <>
        <p>Registration Successful!</p>
        <p>Thank you for your Registration!</p>
        </>
      ) : (
        <>
          <p style={{ fontStyle: "italic", fontSize: "27px" }}>
            Register here to take a book!
          </p>
          <form onSubmit={handleSubmit(doneSubmit)}>
            <h3>First Name</h3>
            <input
              type="text"
              placeholder="Name"
              {...register("Name", {
                required: "Enter your name",
                minLength: {
                  value: 3,
                  message: "Name must be more than 3 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Name cannot be more than 30 characters",
                },
              })}
            />
            <span className="ErrorMessage">{errors.Name?.message}</span>

            <h3>Email Address</h3>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Enter email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
            />
            <span className="ErrorMessage">{errors.email?.message}</span>

            <h3>Password</h3>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Enter password",
                minLength: {
                  value: 10,
                  message: "Password must be more than 10 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password cannot be more than 20 characters",
                },
                pattern: {
                  value: /[!@#$%^&*(),.?":{}|<>]/,
                  message: "Password must include special characters",
                },
              })}
            />
            <span className="ErrorMessage">{errors.password?.message}</span>

            <h3>Confirm Password</h3>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === watch("password") ||
                  "Confirm Password and Password are different",
              })}
            />
            <span className="ErrorMessage">
              {errors.confirmPassword?.message}
            </span>

            <button
              type="submit"
              style={{
                borderRadius: "40px",
                margin: "5px",
                backgroundColor: "azure",
              }}
            >
              Sign up
            </button>
          </form>
        </>
      )}
    </div>
  );
}
