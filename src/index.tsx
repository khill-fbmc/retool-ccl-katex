import React from "react";
import "katex/dist/katex.min.css";

import TeX from "@matejmazur/react-katex";
import { Retool } from "@tryretool/custom-component-support";

export const Katex: React.FC = () => {
  const [math] = Retool.useStateString({
    name: "Math",
    description: "KaTeX input to be rendered",
  });

  const [block] = Retool.useStateBoolean({
    name: "Block",
    description:
      "Display math in a separated block, with larger font and symbols",
  });

  const [errorColor] = Retool.useStateString({
    name: "Error Color",
    initialValue: "#cc0000",
  });

  const [katexSettings] = Retool.useStateObject({
    name: "Katex Settings",
  });

  return (
    <TeX
      math={math}
      block={block}
      errorColor={errorColor}
      settings={katexSettings}
    />
  );
};
