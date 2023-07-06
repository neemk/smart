import clsx from "clsx";

export default function Input(props) {
  const { placeholder, type = "text", required, className, ...rest } = props;

  const classNames = clsx("input", className);

  return (
    <label className="label">
      {placeholder}
      {required && <span class="input-required">*</span>}
      <div>
        <input
          type={type}
          required={required}
          className={classNames}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </label>
  );
}
