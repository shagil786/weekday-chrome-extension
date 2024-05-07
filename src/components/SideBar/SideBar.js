import React, { useState } from "react";
import CommonSideBar from "../../common/Components/CommonSIdeBar/CommonSideBar";
import { makeStyles } from "@material-ui/core";
import logoIcon from "../../assets/images/logo.png";
import Icons from "../../common/Components/Icons/Icons";
import logoSmallIcon from "../../assets/images/logoSmall.png";
import linkedinLogo from "../../assets/images/linkedin-logo.png";
import {
  Edit,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LocalAtm,
  QueryBuilder,
} from "@material-ui/icons";
import profile from "../../assets/images/msn007.jpg";
import CommonChoose from "../../common/CommonChoose/CommonChoose";
import { form, nav, recommend } from "./data";
import { Payments } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: (props) => `${props?.checkLeftSmall ? "5.5vmin" : "15vmin"}`,
    marginLeft: (props) => `${props?.checkLeftSmall ? "-20px" : ""}`,
  },
  leftClass: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    borderRadius: 12,
    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
    background: "rgb(255, 255, 255)",
    display: "flex",
    flexDirection: "column",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    zIndex: 15,
  },
  wrapper: {
    padding: (props) => `20px ${props?.checkLeftSmall ? "0" : "25"}px`,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    gap: 24,
    alignItems: (props) => `${props?.checkLeftSmall ? "center" : ""}`,
  },
  wrapperRight: {
    padding: (props) => `20px ${props?.checkRightSmall ? "10" : "25"}px`,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    gap: 24,
    alignItems: (props) => `${props?.checkRightSmall ? "center" : ""}`,
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconWrapperRight: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "16px",
    alignItems: "center",
    marginTop: 2,
    marginTop: (props) => (props?.checkRightSmall ? "-2px" : ""),
  },
  iconStyle: {
    position: "relative",
    right: 0,
    marginRight: (props) => `${props?.checkLeftSmall ? "-60px" : "-20px"}`,
    transform: (props) => `${props?.checkLeftSmall ? "rotate(180deg)" : ""}`,
  },
  iconStyleRight: {
    left: 0,
    position: "relative",
    marginLeft: (props) => `${props?.checkRightSmall ? "-60px" : "-36px"}`,
    transform: (props) => `${props?.checkRightSmall ? "rotate(180deg)" : ""}`,
    zIndex: 2,
  },
  rightClass: {
    position: "fixed",
    top: 0,
    right: 0,
    borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
    outline: 0,
    height: "100%",
    zIndex: 15,
    display: "flex",
    flexDirection: "column",
    boxShadow: "none",
    transition: "boxShadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    color: "rgba(0, 0, 0, 0.87)",
    background: "rgb(188, 252, 234)",
  },
  borderStyle: {
    background: "rgb(246, 246, 246)",
    height: 2,
  },
  navbarStyle: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  navbar: {
    display: "flex",
    flexDirection: "column",
    gap: 22,
  },
  eachNav: {
    display: "flex",
    gap: 5,
    justifyContent: (props) => `${props?.checkLeftSmall ? "center" : ""}`,
    alignItems: "center",
    cursor: "pointer",
    "& span": {
      color: "rgb(117, 117, 117)",
      fontFamily: "inter",
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "-.28px",
    },
  },
  header: {
    margin: "0px 0px 4px",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "rgb(117, 117, 117)",
    fontFamily: "Inter",
    fontSize: 10,
    padding: "0px 5px",
    textAlign: "left",
    textTransform: "uppercase",
  },
  profileWrapper: {
    position: "absolute",
    bottom: 20,
    left: 25,
    display: "flex",
    alignItems: "center",
    gap: 10,
    justifyContent: "flex-start",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "20px",
    fontFamily: "Inter",
  },
  profileIcon: {
    userSelect: "none",
    overflow: "hidden",
    borderRadius: "50%",
    height: 40,
    width: 40,
  },
  linkedin: {
    fontSize: 16,
    fontWeight: 600,
    color: "#000",
    display: "flex",
    alignItems: "center",
  },
  linkedinStyle: {
    width: "16px",
    marginLeft: "4px",
  },
  formContainer: {
    height: "calc(100vh - 90px)",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  eachContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  eachContenr: {
    display: "flex",
    gap: 6,
  },
  headerText: {
    color: "#000",
    fontSize: 13,
    fontWeight: 500,
  },
  hashTick: {
    color: "red",
    fontSize: 15,
  },
  profileIconRight: {
    userSelect: "none",
    overflow: "hidden",
    borderRadius: "50%",
    height: 40,
    width: 40,
    marginLeft: 10,
  },
  smallRight: {
    borderTop: "1px solid rgb(196, 196, 196)",
    padding: "40px 0px 20px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    color: "rgb(117, 117, 117)",
    "& p": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      fontSize: 14,
    },
  },
  editProfile: {
    borderTop: "1px solid rgb(196, 196, 196)",
    padding: "40px 0px",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    textAlign: "center",
    color: "rgb(117, 117, 117)",
    fontSize: 13,
    cursor: "pointer",
  },
}));

const SideBar = ({ children, width, handleClick }) => {
  const checkSmall = (check, isWidth) => check < isWidth;
  const classes = useStyles({
    checkLeftSmall: checkSmall(width?.leftWidth, 30),
    checkRightSmall: checkSmall(width?.rightWidth, 44),
  });
  const [formData, setFormData] = useState({});
  const handleChange = (each) => {
    const { name, value } = each;
    setFormData((prev) => {
      const updatedData = { ...prev };

      if (value !== "") {
        updatedData[name] = value;
      } else {
        delete updatedData[name];
      }

      return updatedData;
    });
  };

  return (
    <>
      <CommonSideBar width={width?.leftWidth} className={classes?.leftClass}>
        <div className={classes?.wrapper}>
          <div className={classes?.iconWrapper}>
            <img
              src={checkSmall(width?.leftWidth, 30) ? logoSmallIcon : logoIcon}
              className={classes?.imageStyle}
            />
            <Icons
              id="leftButton"
              icon={<KeyboardArrowLeft />}
              className={classes?.iconStyle}
              onClick={(e) => handleClick(e)}
            />
          </div>
          <div className={classes?.borderStyle} />
          <div className={classes?.navbarStyle}>
            <p className={classes?.header}>
              {checkSmall(width?.leftWidth, 30)
                ? "get jobs"
                : "looking for a job"}
            </p>
            <div className={classes?.navbar}>
              {nav?.map((each, index) => (
                <div className={classes?.eachNav} key={index}>
                  {each?.icon}{" "}
                  {checkSmall(width?.leftWidth, 30) ? null : (
                    <span>{each?.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={classes?.borderStyle} />
          <div className={classes?.navbarStyle}>
            <p className={classes?.header}>
              {checkSmall(width?.leftWidth, 30)
                ? "refer"
                : "recommend and earn"}
            </p>
            <div className={classes?.navbar}>
              {recommend?.map((each, index) => (
                <div className={classes?.eachNav} key={index}>
                  {each?.icon}{" "}
                  {checkSmall(width?.leftWidth, 30) ? null : (
                    <span>{each?.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={classes?.profileWrapper}>
            <img src={profile} alt="img" className={classes?.profileIcon} />
            {checkSmall(width?.leftWidth, 30) ? null : <span>Md Shagil</span>}
          </div>
        </div>
      </CommonSideBar>
      {children}
      <CommonSideBar width={width?.rightWidth} className={classes?.rightClass}>
        <div className={classes?.wrapperRight}>
          <div className={classes?.iconWrapperRight}>
            <Icons
              id="rightButton"
              icon={<KeyboardArrowRight />}
              className={classes?.iconStyleRight}
              onClick={(e) => handleClick(e)}
            />
            {checkSmall(width?.rightWidth, 44) ? (
              <img
                src={profile}
                className={classes?.profileIconRight}
                alt="profile"
              />
            ) : (
              <>
                <div className={classes?.linkedin}>
                  Your Profile
                  <img src={linkedinLogo} className={classes?.linkedinStyle} />
                </div>
                <p>
                  <span>{Object.keys(formData)?.length}</span> /
                  <span>{form?.length}</span>
                </p>
              </>
            )}
          </div>
          {checkSmall(width?.rightWidth, 44) ? (
            <>
              <div className={classes?.smallRight}>
                <p>
                  <Payments />
                  <span>{formData?.fixed ?? 0} LPA</span>
                </p>
                <p>
                  <LocalAtm />
                  <span>{formData?.variable ?? 0} LPA</span>
                </p>
                <p>
                  <QueryBuilder />
                  <span>{formData?.stocks ?? 0} LPA</span>
                </p>
              </div>
              <div
                className={classes?.editProfile}
                onClick={() =>
                  handleClick({
                    currentTarget: {
                      id: "rightButton",
                    },
                  })
                }
              >
                <Edit />
                <span>Edit Profile</span>
              </div>
            </>
          ) : (
            <>
              <div className={classes?.formContainer}>
                {form?.map((each, index) => (
                  <div className={classes?.eachContainer} key={index}>
                    <p className={classes?.headerText}>
                      {each?.name} <span className={classes?.hashTick}>*</span>
                    </p>
                    <div className={classes?.eachContenr}>
                      {each?.forms?.map((e, i) => (
                        <CommonChoose
                          key={i}
                          choice={each?.type}
                          data={e}
                          store={{ onChange: handleChange, value: formData }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </CommonSideBar>
    </>
  );
};

export default SideBar;
