import classes from "../styles/stats.module.scss";
import { stats } from "../data/stats";
const Stats = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Why Choose Us ?</h1>
      <div className={classes.wrapper}>
        {stats.map((stat, index) => {
          return (
            <div key={index} className={classes.stat_box}>
              <div className={classes.stat_icon}>{stat.icon}</div>
              <p className={classes.stat_title}>{stat.title}</p>
              <p className={classes.stat_desc}>{stat.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
