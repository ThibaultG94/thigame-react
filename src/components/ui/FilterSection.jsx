import { cn } from "../../utils/cn";

const FilterSection = ({ title, options, value, onChange, className }) => {
  return (
    <div className={cn("flex gap-4 items-center", className)}>
      <span className="text-sm font-medium min-w-24">{title}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(value === option ? "" : option)}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm border transition-all",
              value === option
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
