import { useState, useCallback } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import useMediaQuery from "./useMediaQuery";

const FooterAccordionCumList = ({ title, children }) => {
  const [isOpen, setOpenState] = useState(false);
  const { isDesktop } = useMediaQuery();

  const toggle = () => {
    setOpenState(!isOpen);
  };

  if (title) {
    return (
      <div className="p-4 sm:p-0">
        <p className="block sm:hidden mb-6">
          <button className="w-full text-left relative" onClick={toggle}>
            <span className="mb-3 uppercase text-white font-ntg text-[14px]">
              {title}
            </span>
            {!isOpen && (
              <FaPlus className="text-white absolute top-1 right-0 text-xs" />
            )}
            {isOpen && (
              <FaMinus className="text-white absolute top-1 right-0 text-xs" />
            )}
          </button>
        </p>
        {(isOpen || isDesktop) && <div>{children}</div>}
      </div>
    );
  } else {
    return <div className="p-4 sm:p-0">{children}</div>;
  }
};

export default FooterAccordionCumList;
