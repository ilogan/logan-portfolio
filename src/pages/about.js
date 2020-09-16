import React from "react";
import GlobalLayout from "../components/layouts/GlobalLayout";
import Heading from "../components/Heading";
import { About } from "../components/About";

export default () => (
  <GlobalLayout>
    <Heading title="About Me">
      I hold a B.S. in Computer Science, but there's a lot more to my story than
      that.
    </Heading>
    <About />
  </GlobalLayout>
);
