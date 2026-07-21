function Button({ children }) {
  return (
    <div className="bg-cyan-500 cursor-pointer text-white text-sm rounded-sm px-2 py-1 inline-block">
      {children}
    </div>
  );
}

export default Button;
