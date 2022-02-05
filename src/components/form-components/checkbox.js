import React from "react";
import { useField } from "formik";

const Checkbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });

    return (
        <div>
            <label className="checkbox-input">
                {props.label}
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
        </div>
    );
};

export default Checkbox;
