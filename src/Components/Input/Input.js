const Input = ({ name, label, labelTitle, type, placeholder, required }) => {
    return (
        <div className="mb-3">
            <label htmlFor={label} className="form-label">
                {labelTitle} {required && <span className="font-bolder text-danger">*</span>}
            </label>
            <input
                type={type}
                name={name}
                className="form-control"
                id={label}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
