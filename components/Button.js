import Link from "next/link";
import classes from "../styles/button.module.scss";

const Button = ({ primary, children, big, path, type }) => {
  return (
    <Link href={path}>
      <button
        type={type}
        className={`${classes.nav_link} 
        ${primary ? classes.bgcolor1 : classes.bgcolor2} 
        ${big ? classes.big : classes.small} `}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
