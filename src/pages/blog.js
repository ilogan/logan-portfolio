import React from "react";
import GlobalLayout from "../components/layouts/GlobalLayout";
import Heading from "../components/Heading";
import { Blog } from "../components/Blog";

export default () => (
  <GlobalLayout>
    <Heading title="Blog" backgroundColor="#99eaff">
      I like to write about what tech I'm using so others can learn with me.
    </Heading>
    <Blog />
  </GlobalLayout>
);
