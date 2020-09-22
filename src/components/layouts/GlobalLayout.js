import React from "react";
import Helmet from "react-helmet";
import { Global } from "@emotion/core";
import useSiteMetadata from "../../hooks/useSiteMetadata";
import globalStyle from "../../utils/globalStyle";

import Navbar from "../Navbar";
import Footer from "../Footer";

export default ({ children }) => {
  const { title, description, siteUrl, image } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:image:secure_url" content={image} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="2526" />
        <meta property="og:image:height" content="1228" />
        <meta
          property="og:image:alt"
          content="The landing page for Ian Logan's website"
        />

        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
      </Helmet>
      <Global styles={globalStyle} />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
