import React from "react";
import PlanBasic from "../atoms/PlanBasic";
import PlanMedium from "../atoms/PlanMedium";
import PlanExpert from "../atoms/PlanExpert";
import "../../sass/Plans.scss";
import Zoom from "react-reveal/Zoom";

class ContainerPlans extends React.Component {
  render() {
    return (
      <div className="ContainerPlans">
        <Zoom>
          <PlanBasic />
          <PlanExpert />
          <PlanMedium />
        </Zoom>
      </div>
    );
  }
}
export default ContainerPlans;
