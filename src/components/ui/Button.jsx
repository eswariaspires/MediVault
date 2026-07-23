import clsx from 'clsx';

function Button({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  ...props
}) {
  const baseClasses =
    'px-4 py-2 rounded-lg font-medium transition duration-200';

  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  return (
    <button
      type={type}
      className={clsx(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
