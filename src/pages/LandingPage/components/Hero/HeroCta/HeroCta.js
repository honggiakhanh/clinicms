import PhoneIcon from '@material-ui/icons/Phone';
import useStyles from './styles';
const HeroCta = () => {
  const classes = useStyles();
  return (
    <button className={classes.button}>
      <div className={classes.buttonIconOuter}>
        <PhoneIcon className={classes.buttonIcon} />
      </div>
      <span className={classes.buttonText}>Liên hệ ngay</span>
    </button>
  );
};

export default HeroCta;
