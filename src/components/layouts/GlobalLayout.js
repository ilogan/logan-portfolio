import React from "react";
import Helmet from "react-helmet";
import { Global } from "@emotion/core";
import useSiteMetadata from "../../hooks/useSiteMetadata";
import globalStyle from "../../utils/globalStyle";

import Navbar from "../Navbar";
import Footer from "../Footer";

export default ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Global styles={globalStyle} />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
