import React from "react";

export interface DragonTilingProps {
  label: string;
}

const DragonTiling = (props: DragonTilingProps) => {
  return (
  <button>
    {props.label}
    </button>
);
};

export default DragonTiling;