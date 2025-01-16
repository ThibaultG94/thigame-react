import { cn } from "@/utils/cn";

/**
 * Reusable flexible container component for page layout
 * Provides common flexbox configurations with a simple API
 */
function FlexContainer({
  children,
  preset = "row",
  gap = "md",
  className,
  innerClassName,
  padded = false,
  contained = false,
}) {
  // Spacing configuration
  const gapClasses = {
    none: "gap-0",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  };

  // Predefined layout configurations
  const presetClasses = {
    row: "flex flex-row",
    column: "flex flex-col",
    center: "flex items-center justify-center",
    start: "flex items-start justify-start",
    end: "flex items-end justify-end",
    space: "flex justify-between items-center",
    responsive: "flex flex-col md:flex-row",
  };

  // Classes for external container (manages padding and max width)
  const containerClasses = cn(
    contained && "container mx-auto", // Center and limit width if contained=true
    padded && "p-4", // Adds padding if padded=true
    className
  );

  // Classes for internal container (manages flex layout)
  const flexClasses = cn(
    presetClasses[preset],
    gapClasses[gap],
    innerClassName
  );

  // If contained=true, a two-level structure is used
  // to correctly manage padding and max width
  if (contained) {
    return (
      <div className={containerClasses}>
        <div className={flexClasses}>{children}</div>
      </div>
    );
  }

  // Otherwise, the flex container is returned directly
  return <div className={cn(containerClasses, flexClasses)}>{children}</div>;
}

export default FlexContainer;
