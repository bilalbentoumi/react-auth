const Input = ({ label, name, type, placeholder, onChange, onBlur, value, error }) => {

  return (
    <>
      {label && <label htmlFor={name} className="block text-sm font-medium text-gray-400 mb-2">{label}</label>}
      <input type={type} id={name} name={name} placeholder={placeholder} onChange={onChange} onBlur={onBlur} value={value} className="block w-full p-4 shadow focus:shadow-blue-300 focus:ring ring-inset ring-blue-100 rounded duration-75" />
      {error && <p className="error text-red-400 text-sm font-medium py-2">{error}</p>}
    </>
  )
}

export default Input