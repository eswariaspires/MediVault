function Input({ label, type = 'text', placeholder, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-green-600"
        {...props}
      />
    </div>
  );
}

export default Input;
