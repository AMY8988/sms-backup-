export default function TextInput({
    name,
    value,
    type,
    inputClass,
    placeholder,
    onChange,
    errors,
}) {
    return (
        <>
            <input
                name={name}
                id={name}
                value={value}
                type={type}
                className={`form_control ${inputClass}`}
                placeholder={placeholder}
                onChange={onChange}
            />
            <div className={`form_error ${!!errors[name] && "vb-visible"}`}>
                {errors[name] ?? "error"}
            </div>
        </>
    );
}
