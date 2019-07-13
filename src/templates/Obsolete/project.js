import React, { useState, useEffect } from "react";
import { window } from "../../utils/browserMonads";

import Layout from "../components/Layout";
import ProjectMain from "../components/project/ProjectMain";
import Portfolio from "../components/portfolio/Portfolio";
import { useRandomize } from "../utils/useRandomize";

export default () => {
  const [transitionLeftActivated, setTransitionLeftActivated] = useState(false);

  useEffect(() => {
    function replaceVerticalScrollByHorizontal(e) {
      e.preventDefault();
      if (e.deltaY !== 0) {
        window.scroll(window.scrollX + e.deltaY * 5, 0);
      } else if (e.deltaX !== 0) {
        window.scroll(window.scrollX + e.deltaX * 3, 0);
      }
    }
    window.addEventListener("wheel", replaceVerticalScrollByHorizontal);
    return () =>
      window.removeEventListener("wheel", replaceVerticalScrollByHorizontal);
  });

  useRandomize();

  return (
    <Layout className="project-layout-body" style={{ paddingRight: "80px" }}>
      {transitionLeftActivated ? <Portfolio decorative="fromProject" /> : null}
      <ProjectMain setTransitionLeftActivated={setTransitionLeftActivated} />
    </Layout>
  );
};
