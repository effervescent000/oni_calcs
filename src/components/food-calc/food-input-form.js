import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import NumberInput from "../form-components/number-input";

const FoodInputForm = (props) => {
    return (
        <div className="inputs-wrapper">
            <Formik
                initialValues={{ normalDupes: 10, bottomlessStomach: 0 }}
                validateOnBlur
                validationSchema={Yup.object({
                    normalDupes: Yup.number().integer("Must be an integer").required("Required"),
                    bottomlessStomach: Yup.number().integer("Must be an integer"),
                })}
            >
                <Form>
                    <NumberInput
                        label="Normal dupes"
                        name="normalDupes"
                        divclass="dupe-input-wrapper"
                    />
                    <NumberInput
                        label="Bottomless stomach dupes"
                        name="bottomlessStomach"
                        divclass="dupe-input-wrapper"
                    />
                </Form>
            </Formik>
        </div>
    );
};

export default FoodInputForm;
