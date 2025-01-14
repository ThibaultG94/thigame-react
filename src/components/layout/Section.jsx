import { cn } from "../../utils/cn";

const Section = ({ children, className, centered = false }) => (
  <section className={cn("py-8", centered && "text-center", className)}>
    {children}
  </section>
);

export default Section;
