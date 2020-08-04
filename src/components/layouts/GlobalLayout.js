import React from "react";
import { Global } from "@emotion/core";
import globalStyle from "../../utils/globalStyle";

import Navbar from "../Navbar";

export default ({ children }) => (
  <div>
    <Global styles={globalStyle} />
    <Navbar />
    <div>{children}</div>
  </div>
);
