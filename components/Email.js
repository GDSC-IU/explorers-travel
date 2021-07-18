import Image from "next/image";
import Button from "../components/Button";
import classes from "../styles/email.module.scss";
const Email = () => {
  return (
    <div className={classes.email_container}>
      <div className={classes.email_content}>
        <h1>Get access to exclusive offers</h1>
        <p>Sign Up for our newsletter to get $150 off on your first trip.</p>
        <form action="">
          <div className={classes.form_wrap}>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your E-mail"
              />
            </label>
            <div className={classes.signup_btn}>
              <Button path="/" primary="true" big="true" type="submit">
                Sign Up
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Email;
