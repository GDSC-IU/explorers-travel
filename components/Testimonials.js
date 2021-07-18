import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import classes from "../styles/testimonials.module.scss";
import test1 from "../public/images/test1.jpg";
import test2 from "../public/images/test2.jpg";

const Testimonials = () => {
  return (
    <div className={classes.testimonial_container}>
      <p className={classes.topline}>Testimonials</p>
      <p className={classes.description}>What people are saying....</p>
      <div className={classes.content_wrapper}>
        <div className={classes.column_one}>
          <div className={classes.testimonial}>
            <IoMdCheckmarkCircleOutline
              style={{
                color: "#3fffa8",
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            />
            <h3>Adam West</h3>
            <p>
              "Lorem ipsum dolor sit amet consectetur", adipisicing elit. Atque
              ab architecto unde impedit quas recusandae voluptates rerum, porro
              facilis sunt!
            </p>
          </div>
          <div className={classes.testimonial}>
            <FaRegLightbulb
              style={{
                color: "#f9b19b",
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            />
            <h3>Daniel Dani</h3>
            <p>
              "Ducimus aperiam cum expedita sint laboriosam", amet temporibus
              alias magni architecto possimus saepe doloremque suscipit nesciunt
              dolorem nobis earum atque impedit! Corporis.
            </p>
          </div>
        </div>
        <div className={classes.column_two}>
          <Image src={test1} className={classes.img} />
          <Image src={test2} className={classes.img} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
