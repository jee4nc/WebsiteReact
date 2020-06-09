import React from "react";
import "../../sass/Plans.scss";

class PlanBasic extends React.Component {
  render() {
    return (
      <div className="PlanBasic">
        <div className="PlanBasic__title">
          <h1>Plan Basic</h1>
        </div>
        <div className="PlanBasic__options">
          <div className="task__1 task">
            <p>Analisis de requerimientos</p>
          </div>
          <div className="task__2 task">
            <p>Consultoria del negocio</p>
          </div>
          <div className="task__3 task">
            <p>Hasta 4 secciones</p>
          </div>
          <div className="task__4 task">
            <p>Ejemplo 1</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PlanBasic;
