import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function LinkFilters() {
  return (
    <div className="grid w-full rounded-md bg-white px-5 lg:divide-y lg:divide-gray-300">
      <div className="grid gap-3 py-6">
        <div className="flex items-center justify-between">
          <h3 className="ml-1 mt-2 font-semibold">Filter Links</h3>
        </div>
      </div>
      <PriceFilter />
    </div>
  );
}

const PriceFilter = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <fieldset className="overflow-hidden py-6">
      <div className="flex h-8 items-center justify-between">
        <button
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          className="flex items-center space-x-2"
        >
          <ChevronRight
            className={`${collapsed ? "" : "rotate-90"} h-5 w-5 transition-all`}
          />
          <h4 className="font-medium text-gray-900">Domains</h4>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.div
            className="mt-4 grid gap-2"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <div
              key={"test"}
              className="relative flex cursor-pointer items-center space-x-3 rounded-md bg-gray-50 transition-all hover:bg-gray-100"
            >
              <input
                id={"test"}
                name={"test"}
                checked={() => {}}
                onChange={() => {}}
                type="checkbox"
                className="ml-3 h-4 w-4 cursor-pointer rounded-full border-gray-300 text-black focus:outline-none focus:ring-0"
              />
              <label
                htmlFor={"test"}
                className="flex w-full cursor-pointer justify-between px-3 py-2 pl-0 text-sm font-medium text-gray-700"
              >
                {"2000 - 4000"}
              </label>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </fieldset>
  );
};
