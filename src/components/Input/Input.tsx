type InputProps = {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  required: boolean;
};

export default function Input({
  label,
  placeholder,
  type,
  name,
  required,
}: InputProps) {
  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">{label}</label>
      <input
        className="login__input form__input"
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
