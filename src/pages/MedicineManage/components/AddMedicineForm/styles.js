import { makeStyles } from "@material-ui/core";
export default makeStyles({
  form: {
    paddingTop: "1em",
    width: "100%",
  },
  header: {
    marginBottom: "4rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 600,
    color: "#7D4AD9",
    borderBottom: "2px solid #7D4AD9",
    letterSpacing: "0.065em",
  },
  body: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gridGap: "3em",
  },
  text: {
    fontSize: "1.2rem",
    fontWeight: 500,
    color: "#828282",
    lineHeight: "24px",
    letterSpacing: "0.065em",
    marginBottom: "10px",
  },
  input: {
    fontSize: "1.25rem",
    borderRadius: "5px",
    width: "400px",
    height: "60px",
    paddingLeft: "0.75em",
    border: "1px solid #BDBDBD",
    "&:hover": {
      border: "2px solid #7D4AD9",
    },
    "&:focus": {
      border: "2px solid #7D4AD9",
    },
  },
  inputghichu: {
    width: "1036px",
    height: "125px",
  },
  dropdownmenu: {
    marginLeft: "2rem",
    fontSize: "1.25em",
    borderRadius: "5px",
    padding: "1rem",
    width: "100px",
    height: "60px",
    border: "1px solid #BDBDBD",
    "&:hover": {
      border: "2px solid #7D4AD9",
    },
    "&:focus": {
      border: "2px solid #7D4AD9",
    },
  },
  sidetype: {
    paddingLeft: "2rem",
    width: "150px",
    fontSize: "1.2rem",
    fontWeight: 500,
    color: "#7D4AD9",
    lineHeight: "24px",
    letterSpacing: "0.065em",
  },
  buttongroup: {
    marginTop: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  savebutton: {
    margin: "1rem",
    "&>button": {
      border: "2px solid #35DAB2",
      color: "#35DAB2",
      width: "215px",
      height: "61px",
      fontSize: "24px",
      letterSpacing: "0.22em",
      display: "flex",
      justifyContent: "space-between",
      paddingRight: "2em",
      "&:hover": {
        borderColor: "black",
      },
    },
  },
  span2: {
    gridColumn: "span 2",
  },
  span3: {
    gridColumn: "span 3",
  },
  span4: {
    gridColumn: "span 4",
  },
  dFlex: {
    display: "flex",
    alignItems: "center",
  },
});
