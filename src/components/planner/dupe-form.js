import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";

import NumberInput from "../form-components/number-input";
import TextInput from "../form-components/text-input";
import Checkbox from "../form-components/checkbox";
import SelectField from "../form-components/select-field";

import dupeOptions from "./helpers/dupe-options";

const DupeForm = (props) => {
    const { dupe } = props;
    const skillWrapperName = "skill-input-wrapper";
    const skillPointCheckbox = "skill-checkbox";

    const handleSubmit = (values) => {
        if (Object.keys(dupe).length > 0) {
            // send to the put endpoint
        } else {
            axios
                .post(`${process.env.REACT_APP_DOMAIN}/dupe/add`, values, {
                    withCredentials: true,
                    headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
                })
                .then((response) => {
                    props.getDupes();
                })
                .catch((error) => console.log(error.response));
        }
    };

    return (
        <div>
            <Formik
                initialValues={{
                    name: dupe ? dupe.name : "",
                    type: dupe ? dupe.type : "Abe",
                    agriculture: dupe ? dupe.agriculture_skill : "",
                    athletics: dupe ? dupe.athletics_skill : "",
                    construction: dupe ? dupe.construction_skill : "",
                    creativity: dupe ? dupe.creativity_skill : "",
                    cuisine: dupe ? dupe.cuisine_skill : "",
                    excavation: dupe ? dupe.excavation_skill : "",
                    husbandry: dupe ? dupe.husbandry_skill : "",
                    machinery: dupe ? dupe.machinery_skill : "",
                    medicine: dupe ? dupe.medicine_skill : "",
                    piloting: dupe ? dupe.piloting_skill : "",
                    rocketry: dupe ? dupe.rocketry_skill : "",
                    science: dupe ? dupe.science_skill : "",
                    strength: dupe ? dupe.strength_skill : "",

                    cropTending: dupe ? dupe.crop_tending : false,
                    critterRanching: dupe ? dupe.critter_ranching : false,
                    grilling: dupe ? dupe.grilling : false,
                    advancedResearch: dupe ? dupe.advanced_research : false,
                    fieldResearch: dupe ? dupe.field_research : false,
                    astronomy: dupe ? dupe.astronomy : false,
                    dataAnalysis: dupe ? dupe.data_analysis : false,

                    skillPoints: dupe ? dupe.available_skill_points : "",
                }}
                onSubmit={(values) => handleSubmit(values)}
            >
                <Form>
                    <div className="input-group-wrapper">
                        <TextInput label="Name" name="name" />
                    </div>
                    <div className="input-group-wrapper">
                        <SelectField label="Dupe type" name="type">
                            {dupeOptions()}
                        </SelectField>
                    </div>
                    <div className="input-group-wrapper">
                        <NumberInput
                            label="Agriculture"
                            name="agriculture"
                            divclass={skillWrapperName}
                        />
                        <Checkbox
                            label="Crop Tending?"
                            name="cropTending"
                            divclass={skillPointCheckbox}
                        />
                        <Checkbox
                            label="Critter ranching?"
                            name="critterRanching"
                            divclass={skillPointCheckbox}
                        />
                    </div>
                    <div className="input-group-wrapper">
                        <NumberInput
                            label="Athletics"
                            name="athletics"
                            divclass={skillWrapperName}
                        />
                    </div>
                    <div className="input-group-wrapper">
                        <NumberInput
                            label="Construction"
                            name="construction"
                            divclass={skillWrapperName}
                        />
                    </div>

                    <div className="input-group-wrapper">
                        <NumberInput
                            label="Creativity"
                            name="creativity"
                            divclass={skillWrapperName}
                        />
                    </div>
                    <div className="input-group-wrapper">
                        <NumberInput label="Cuisine" name="cuisine" divclass={skillWrapperName} />
                        <Checkbox label="Grilling?" name="grilling" divclass={skillPointCheckbox} />
                    </div>
                    <div className="input-group-wrapper">
                        <NumberInput
                            label="Excavation"
                            name="excavation"
                            divclass={skillWrapperName}
                        />
                    </div>
                    <div className="input-group-wrapper">
                        <NumberInput
                            label="Husbandry"
                            name="husbandry"
                            divclass={skillWrapperName}
                        />
                    </div>
                    <div className="input-group-wrapper">
                        <NumberInput
                            label="Machinery"
                            name="machinery"
                            divclass={skillWrapperName}
                        />
                    </div>
                    <div className="input-group-wrapper">
                        <NumberInput label="Medicine" name="medicine" divclass={skillWrapperName} />
                    </div>
                    <div className="input-group-wrapper">
                        <NumberInput label="Piloting" name="piloting" divclass={skillWrapperName} />
                    </div>
                    <div className="input-group-wrapper">
                        <NumberInput label="Rocketry" name="rocketry" divclass={skillWrapperName} />
                    </div>
                    <div className="input-group-wrapper">
                        <NumberInput label="Science" name="science" divclass={skillWrapperName} />
                        <Checkbox
                            label="Advanced Research?"
                            name="advancedResearch"
                            divclass={skillPointCheckbox}
                        />
                        <Checkbox
                            label="Field Research?"
                            name="fieldResearch"
                            divclass={skillPointCheckbox}
                        />
                        <Checkbox
                            label="Applied Sciences?"
                            name="appliedSciences"
                            divclass={skillPointCheckbox}
                        />
                        <Checkbox
                            label="Astronomy?"
                            name="astronomy"
                            divclass={skillPointCheckbox}
                        />
                        <Checkbox
                            label="Data Analysis?"
                            name="dataAnalysis"
                            divclass={skillPointCheckbox}
                        />
                    </div>
                    <div className="input-group-wrapper">
                        <NumberInput label="Strength" name="strength" divclass={skillWrapperName} />
                    </div>
                    <div className="input-group-wrapper">
                        <NumberInput
                            label="Available skill points"
                            name="skillPoints"
                            divclass={skillWrapperName}
                        />
                    </div>
                    <button type="submit">Save</button>
                </Form>
            </Formik>
        </div>
    );
};

export default DupeForm;
