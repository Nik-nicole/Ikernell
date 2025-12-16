export const Button = ({ children, size = "md", variant = "solid", className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all shadow-sm";
  
  const sizeClasses = {
    sm: "px-3 py-2 text-sm h-9",
    md: "px-5 py-3 text-base h-10",
    lg: "px-8 py-3 text-lg h-12",
  };

  const variantClasses = {
    solid: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100",
  };

  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
