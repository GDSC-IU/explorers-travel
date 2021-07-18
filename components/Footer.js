import classes from "../styles/footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.links_wrapper}>
        <div className={classes.footer_desc}>
          <h1>EXPLORER'S</h1>
          <p>We strive to provide the best experiences for our customers.</p>
        </div>
        <div className={classes.link_items}>
          <h2 className={classes.link_head}>Contact Us</h2>
          <Link href="/">
            <span className={classes.link}>Contact</span>
          </Link>
          <Link href="/">
            <span className={classes.link}>Destinations</span>
          </Link>
          <Link href="/">
            <span className={classes.link}>Sponsorships</span>
          </Link>
          <Link href="/">
            <span className={classes.link}>Support</span>
          </Link>
        </div>
      </div>
      <div className={classes.links_wrapper}>
        <div className={classes.link_items}>
          <h2 className={classes.link_head}>Videos</h2>
          <Link href="/">
            <span className={classes.link}>Submit Video</span>
          </Link>
          <Link href="/">
            <span className={classes.link}>Ambassador</span>
          </Link>
          <Link href="/">
            <span className={classes.link}>Agency</span>
          </Link>
          <Link href="/">
            <span className={classes.link}>Influencer</span>
          </Link>
        </div>
        <div className={classes.link_items}>
          <h2 className={classes.link_head}>Social Media</h2>
          <Link href="/">
            <span className={classes.link}>Instagram</span>
          </Link>
          <Link href="/">
            <span className={classes.link}>Facebook</span>
          </Link>
          <Link href="/">
            <span className={classes.link}>Youtube</span>
          </Link>
          <Link href="/">
            <span className={classes.link}>Twitter</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
