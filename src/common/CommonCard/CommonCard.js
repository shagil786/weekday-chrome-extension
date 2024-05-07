import { makeStyles } from "@material-ui/core";
import React from "react";
import men from "../../assets/images/men.jpeg";
import women from "../../assets/images/woman.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    position: "relative",
    borderRadius: 20,
    padding: 20,
    color: "#000",
    transition: "boxShadow 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    overflow: "hidden",
    maxWidth: "300px",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
    gap: 10,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    "& img": {
      borderRadius: "50%",
    },
  },
  jobDetails: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    "& h6": {
      color: "#8b8b8b",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "1px",
    },
    "& p:first-of-type": {
      fontSize: 14,
      lineHeight: "1.5",
      fontWeight: 400,
    },
    "& p:last-of-type": {
      fontSize: 11,
      fontWeight: 500,
      textTransform: "capitalize",
    },
  },
  salary: {
    fontWeight: 400,
    fontSize: 14,
    color: "rgb(77, 89, 106)",
    lineHeight: "1.43",
    textAlign: "center",
  },
  about: {
    height: "250px",
    overflow: "hidden",
    color: "rgba(0, 0, 0, 0.87)",
    maskImage:
      "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
  },
  text1: {
    fontSize: "1rem",
    lineHeight: "1.5",
    fontWeight: 500,
  },
  text2: {
    whiteSpace: "pre-wrap",
    fontSize: 14,
    fontWeight: "bold",
  },
  gradient: {
    whiteSpace: "pre-wrap",
    fontSize: 14,
    fontWeight: 400,
  },
  viewMore: {
    textAlign: "center",
    marginBottom: "0.5rem",
    position: "relative",
    top: "20px",
    color: "#4943da",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 400,
    cursor: "pointer",
  },
  minExp: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "1px",
    color: "#8b8b8b",
  },
  easyApply: {
    backgroundColor: "rgb(85, 239, 196)",
    color: "#000",
    fontWeight: 500,
    padding: "8px 18px",
    textTransform: "none",
    borderRadius: 8,
    margin: "5px 0px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    outline: "none",
    border: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    appearance: "none",
    textDecoration: "none",
    lineHeight: "1.75",
    minWidth: "64px",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    fontSize: 16,
  },
  referral: {
    gap: 8,
    backgroundColor: "#4943DA",
    color: "#000",
    fontWeight: 500,
    padding: "8px 18px",
    textTransform: "none",
    borderRadius: 8,
    margin: "5px 0px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    outline: "none",
    border: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    appearance: "none",
    textDecoration: "none",
    lineHeight: "1.75",
    minWidth: "64px",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    fontSize: 16,
    color: "#fff",
  },
  profileContainer: {
    display: "flex",
    gap: 8,
    "& img": {
      borderRadius: "50%",
      filter: "blur(1px)",
    },
  },
}));

const CommonCard = ({ job }) => {
  const classes = useStyles();
  return (
    <div className={classes?.root}>
      <div className={classes?.header}>
        <img src={job?.logoUrl} alt="logo" width={50} height={50} />
        <div className={classes?.jobDetails}>
          <h6>{job?.companyName}</h6>
          <p>{job?.jobRole}</p>
          <p>{job?.location}</p>
        </div>
      </div>
      <p className={classes?.salary}>
        Estimated Salary: {job?.salaryCurrencyCode} {job?.minJdSalary} -
        {job?.maxSalary} LPA
        <span> ✅</span>
      </p>
      <div className={classes?.about}>
        <p className={classes?.text1}>About Company:</p>
        <p className={classes?.text2}>About Us</p>
        <p className={classes?.gradient}>{job?.jobDetailsFromCompany}</p>
      </div>
      <div className={classes?.viewMore}>
        <a>View Job</a>
      </div>
      <div className={classes?.minExp}>
        <p>Minimum Experince</p>
        <p>{job?.minExp} years</p>
      </div>
      <div className={classes?.easyApply}>⚡ Easy Apply</div>
      <div className={classes?.referral}>
        <div className={classes?.profileContainer}>
          <img src={men} alt="logo" width={20} height={20} />
          <img src={women} alt="logo" width={20} height={20} />
        </div>
        <p className={classes?.referralText}>Unlock referral asks</p>
      </div>
    </div>
  );
};

export default CommonCard;
