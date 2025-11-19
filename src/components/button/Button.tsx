import React from "react";
import { Box } from "@mui/material";

type ButtonProps = {
    children: React.ReactNode;
    onClick : () => void;
    variant :  'primary' | 'secondary' | 'tertiary';
    size : 'sm' | 'md' | 'lg';
    iconName? : React.ReactNode; 
}

const Button = ({children, variant , size ,  onClick , iconName }:ButtonProps ) => {

  const variantStyles = {
    primary :{
      backgroundColor : "blue",
      color : "white"
    },
    secondary : {
      backgroundColor : "green",
      color : "white"
    },
    tertiary : {
      backgroundColor : "gray",
      color : "white"
    } 
  }

  const sizeStyles = {
     sm : {
      padding : "5px 10px",
      fontSize : "12px"
     },
     md : {
      padding : "10px 15px",
      fontSize : "14px"
     },
     lg :{
      padding : "15px 20px",
      fontSize : "16px"
     },
  }



  return (
  <Box>
    <button
     style={{
       border : 'none',
       backgroundColor : variantStyles[variant].backgroundColor,
       color : variantStyles[variant].color,
       padding : sizeStyles[size].padding,
       fontSize : sizeStyles[size].fontSize,
       cursor : 'pointer',
        borderRadius : '2px',
        boxShadow : '0 2px 4px rgba(0,0,0,0.1)',
        transition : 'background-color 0.3s ease',
        margin : '5px',
        outline : 'none',
    }}
    onClick={onClick}
    >
      <span style={{ marginRight : "6px"}}>{iconName}</span> 
      {children}
      </button>
  </Box>);
};

export default Button;
