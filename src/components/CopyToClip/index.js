import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  createStyles,
  Button,
  ClickAwayListener,
} from "@material-ui/core";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { useCopyToClipboard } from "react-use";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: "pointer",
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);

export const CopyToClip = ({ text }) => {



  // const shortText = text.map((item => {
  //   if(item.length < 5) {
      
  //   }
    
  //   return {
      
  //   }

  // }))
  
  const styles = useStyles();
  const [, copyToClipBoard] = useCopyToClipboard();
  const [statusCopy, setStatusCopy] = useState("copy");

  const tootlipTitle = () => {
    switch (statusCopy) {
      case "copy":
        return "Copy";
      case "copied":
        return "Copied";
      default:
        return "";
    }
  };

  const onClickCopy = useCallback(() => {
    copyToClipBoard(text);
    setStatusCopy("copied");
  }, [copyToClipBoard, text]);

  const onClickAway = useCallback(() => {
    setStatusCopy("copy")
  }, [setStatusCopy])
  

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Tooltip title={tootlipTitle()}>
        <Button className={styles.root} onClick={onClickCopy} >
          <FileCopyOutlinedIcon fontSize="small" className={styles.icon} />
          {text}
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};

CopyToClip.propTypes = {
  text: PropTypes.string.isRequired,
};
