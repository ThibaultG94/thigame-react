import { cn } from "@/utils/cn";

/**
 * Converts a number of columns into a Tailwind grid-cols class
 */
const getGridColsClass = (cols) => {
  if (!cols) return "";
  if (typeof cols === "number") return `grid-cols-${cols}`;
  return Object.entries(cols)
    .map(([breakpoint, value]) => {
      if (breakpoint === "xs") return `grid-cols-${value}`;
      return `${breakpoint}:grid-cols-${value}`;
    })
    .join(" ");
};

/**
 * Grid container component with responsive support
 * Used to create consistent grid layouts in the application
 */
function GridContainer({
  children,
  columns = { xs: 1, sm: 2, md: 3, lg: 4 },
  gap = "md",
  equalHeight = true,
  className,
  padded = false,
  contained = false,
  masonry = false,
}) {
  // Spacing configuration
  const gapClasses = {
    none: "gap-0",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  };

  // Classes for the grid container
  const gridClasses = cn(
    "grid",
    getGridColsClass(columns),
    gapClasses[gap],
    equalHeight && "grid-flow-row-dense",
    masonry && "grid-masonry", // Requires specific Tailwind configuration
    className
  );

  // Classes for the external container
  const containerClasses = cn(
    contained && "container mx-auto",
    padded && "p-4"
  );

  // If contained=true, a two-level structure is used
  if (contained) {
    return (
      <div className={containerClasses}>
        <div className={gridClasses}>{children}</div>
      </div>
    );
  }

  // Otherwise, the grid is returned directly
  return <div className={cn(containerClasses, gridClasses)}>{children}</div>;
}

export default GridContainer;
