import classes from "../styles/hero.module.scss";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className={classes.hero_container}>
      <div className={classes.hero_bg}>
        <video autoPlay loop muted className={classes.video_bg}>
          <source src="/videos/hero_video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={classes.hero_content}>
        <div className={classes.hero_items}>
          <h1>Fabulous Destinations</h1>
          <p className={classes.hero_p}>Out of this World!</p>
          <Button path="/" big={true} primary={true} type="button">
            Travel Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
