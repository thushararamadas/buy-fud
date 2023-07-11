import React from "react";

const FromRow = ({ labelText, type, handleChange, name, value }) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
                className="form-input"
            />
        </div>
    );
};

export default FromRow;
