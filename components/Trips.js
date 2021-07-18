import classes from "../styles/trips.module.scss";
import Image from "next/image";
import Button from "../components/Button";
import { ImLocation } from "react-icons/im";
import { trips } from "../data/trips";
const Trips = ({ heading }) => {
  return (
    <div className={classes.products_container}>
      <div className={classes.products_heading}>{heading}</div>
      <div className={classes.products_wrapper}>
        {trips.map((trip, index) => {
          return (
            <div key={index} className={classes.product_card}>
              <Image
                src={trip.img}
                alt={trip.name}
                layout="fill"
                objectFit="cover"
                className={classes.product_img}
              />
              <div className={classes.product_info}>
                <div className={classes.text_wrap}>
                  <ImLocation />
                  <div className={classes.product_title}>{trip.name}</div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "420px",
                    fontSize: "14px",
                  }}
                >
                  <Button path="/" primary={true}>
                    {trip.button}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trips;
