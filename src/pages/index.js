import React, { useState } from "react";

import Layout from "../components/Layout";

import WritingMain from "../components/writing/WritingMain";
import Portfolio from "../components/portfolio/Portfolio";
import ProjectMain from "../components/project/ProjectMain";
import { useRandomize } from "../utils/useRandomize";

export default () => {
  const [transitionDownActivated, setTransitionDownActivated] = useState(false);
  const [transitionRightActivated, setTransitionRightActivated] = useState(
    false
  );

  useRandomize();

  // if (!location.state) {
  //   // document.querySelector("body").style.backgroundImage = "none";
  //   // document.querySelector(".bg-doodle").style.display = "block";
  //   randomizeElements();
  // } else if (!location.state.fromWriting) {
  //   if (!location.state.fromProject) {
  //     randomizeElements();
  //   } else {
  //     window.history.replaceState(
  //       { ...window.history.state, fromProject: false },
  //       document.title
  //     );
  //   }
  // } else {
  //   window.history.replaceState(
  //     { ...window.history.state, fromWriting: false },
  //     document.title
  //   );
  // }
  // }, []);

  return (
    <Layout className="portfolio-layout-body">
      <Portfolio
        decorative={false}
        setTransitionDownActivated={setTransitionDownActivated}
        setTransitionRightActivated={setTransitionRightActivated}
      />
      {transitionDownActivated ? (
        <WritingMain decorative className="decorative-writing-main" />
      ) : null}
      {transitionRightActivated ? <ProjectMain decorative /> : null}
    </Layout>
  );
};
