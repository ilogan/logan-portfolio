import React from "react";
import GlobalLayout from "../components/layouts/GlobalLayout";
import Heading from "../components/Heading";
import { About } from "../components/About";

export default () => (
  <GlobalLayout>
    <Heading title="About" backgroundColor="#ff9ae9">
      I hold a B.S. in Computer Science from Loyola University Chicago, and I am
      a graduate of Fullstack Academy's Software Engineering Immersive Program.
    </Heading>
    <About />
  </GlobalLayout>
);
