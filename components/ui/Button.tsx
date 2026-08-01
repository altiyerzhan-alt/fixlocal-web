type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-xl px-8 py-4 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-red-600 text-white hover:bg-red-500 hover:scale-105",
    secondary:
      "border border-white/20 text-white hover:border-red-500 hover:text-red-500",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}