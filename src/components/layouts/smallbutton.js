import React from "react";
import { Link } from 'react-router-dom';

const CustomButton = ({
  title,
  outline,
  onPress,
  bG,
  color,
  borderColor,
  disabled,
  style,
  goTo,
}) => {
  const btnStyle = {
    backgroundColor: bG,
    borderColor: bG,
  };

  const styles = {
    btn: {
      paddingVertical: 20,
      width: 50,
    },
    outlineBtn: {
      borderRadius: 10,
      paddingVertical: 15,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    fullBtn: {
      borderRadius: 10,
      paddingVertical: 4,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
    },
    textBtn: {
      fontWeight: "300",
      fontSize: 12,
    },
    disbledBtn: {
      borderRadius: 10,
      paddingVertical: 15,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "grey",
    },
    textDisabled: {
      color: "grey",
      fontWeight: "700",
      fontSize: 16,
    },
  };

  return (
    <>
      {disabled ? (
        <div style={{ ...styles.disbledBtn, ...style }}>
          <span style={styles.textDisabled}>{title}</span>
        </div>
      ) : (
        <button
        onClick={() => onPress()}
          style={
            outline
              ? { ...styles.outlineBtn, borderColor: borderColor || "orange", ...style }
              : { ...btnStyle, ...styles.fullBtn, ...style }
          }
        >
          <span style={{ ...styles.textBtn, color: color }}>
          <Link to={goTo} className="nav-link text-nowrap">{title}</Link>
          </span>
        </button>
      )}
    </>
  );
};

export default CustomButton;
