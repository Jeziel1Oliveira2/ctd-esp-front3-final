import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Link } from "@mui/material";

const GeneralFooter = () => {
  return (
    <Box
      component={"footer"}
      display={"flex"}
      p={"1rem 0"}
      alignItems="center"
      justifyContent={"center"}
      borderTop={"1px solid #eaeaea"}
      sx={{ backgroundColor: "#000000" }}
    >
      <Link
        href="https://www.digitalhouse.com"
        target="_blank"
        rel="noopener noreferrer"
        display={"flex"}
        flexGrow={1}
        alignItems={"center"}
        justifyContent={"center"}
        color={"#fff"}
        sx={{ textDecoration: "none" }}
      >
        Powered by DH {" "}
        <Box
          ml={"0.5rem"}
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          color={"#F0FFF0"}
        >
          Jeziel Oliveira de Paula
        </Box>
      </Link>
    </Box>
  );
};
export default GeneralFooter;
