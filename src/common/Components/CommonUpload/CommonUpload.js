import { Button, makeStyles, styled } from "@material-ui/core";
import { CloudUpload, CloudUploadOutlined } from "@material-ui/icons";
import React, { useRef } from "react";

const VisuallyHiddenInput = styled("input")({
  width: "100%",
  height: "100%",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  position: "absolute",
  display: "none",
});

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px dashed #000",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "hsla(0, 0%, 95%, .4)",
    width: "100%",
    maxWidth: "300px",
    padding: "15px 10px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    "& h3": {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
  textStyle: {
    color: "#000",
    marginTop: 10,
    fontSize: 13,
    margin: "6px 0px",
    fontWeight: 500,
  },
  uploadIcon: {
    width: 20,
    maxWidth: "100%",
  },
  uploadWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    fontSize: 12,
  },
  uploaded: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& iframe": {
      outline: "none !important",
      border: "none !important",
      overflow: "hidden !important",
    },
  },
  buttons: {
    display: "flex",
    gap: 10,
    cursor: "pointer",
  },
}));

const CommonUpload = ({ data, store }) => {
  const classes = useStyles();
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const handleUpload = (e) => {
    const file = e.target?.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const pdfUrl = event.target.result;
      const pdfElement = document.createElement("iframe");
      pdfElement.src = pdfUrl;
      pdfElement.width = 200;
      pdfElement.height = 250;
      if (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
      containerRef.current.appendChild(pdfElement);
    };

    if (file) {
      reader.readAsDataURL(file); // Read the file as a data URL
    }
    store?.onChange({ name: data?.store, value: e?.target?.files });
  };

  if (!store?.value?.[data?.store])
    return (
      <div
        className={classes?.root}
        tabIndex={0}
        onClick={() => inputRef?.current?.click()}
      >
        <div className={classes?.wrapper}>
          <CloudUploadOutlined className={classes?.uploadIcon} />
          <h3>Click to upload</h3>
        </div>
        <p className={classes?.textStyle}>Upload only .pdf or .doc files</p>
        <VisuallyHiddenInput
          ref={inputRef}
          type="file"
          onChange={(e) => handleUpload(e)}
        />
      </div>
    );
  else
    return (
      <div className={classes?.uploadWrapper}>
        <div className={classes?.uploaded} ref={containerRef}></div>
        <div className={classes?.buttons}>
          <VisuallyHiddenInput
            ref={inputRef}
            type="file"
            onChange={(e) => handleUpload(e)}
          />
          <span onClick={() => inputRef.current.click()}>Update Resume</span>
          <span
            onClick={() => {
              store?.onChange({ name: data?.store, value: "" });
              containerRef.current.removeChild(
                containerRef?.current?.childNodes[0],
              );
            }}
          >
            Delete Resume
          </span>
        </div>
      </div>
    );
};

export default CommonUpload;
