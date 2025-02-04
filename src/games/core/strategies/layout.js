import { useMemo } from "react";

export const layoutStrategies = {
  grid: (items) => ({
    calculateLayout: () => {
      const columns = Math.ceil(Math.sqrt(items.length));
      return {
        className: `grid grid-cols-${columns} gap-4`,
        itemClassName: "aspect-square",
      };
    },
  }),

  list: () => ({
    calculateLayout: () => ({
      className: "flex flex-col gap-4",
      itemClassName: "w-full",
    }),
  }),
};

export const useLayout = (strategyType, items) => {
  return useMemo(() => {
    const strategy = layoutStrategies[strategyType];
    if (!strategy) throw new Error(`Layout strategy ${strategyType} not found`);
    layoutStrategies[strategy](items);
  }, [strategyType, items]);
};
