import React, { useState } from "react";

type SubNavItems = {
  items: string[];
};

const useSubNav: React.FC<SubNavItems> = ({ items }) => {
  const [selected, setSelected] = useState(items[0]);

  return <div>Have a good coding</div>;
};
export default useSubNav;
