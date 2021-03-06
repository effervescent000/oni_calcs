import React, { useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import NumberInput from "../form-components/number-input";
import TextInput from "../form-components/text-input";
import Checkbox from "../form-components/checkbox";
import SelectField from "../form-components/select-field";

import dupeOptions from "./helpers/dupe-options";
import DupeContext from "../../context/dupe-context";

const DupeForm = ({ dupe }) => {
    const { getDupes } = useContext(DupeContext);
    const skillWrapperName = "skill-input-wrapper";
    const skillPointCheckbox = "skill-checkbox";

    const handleSubmit = (values) => {
        if (Object.keys(dupe).length > 0) {
            axios
                .put(
                    `${process.env.REACT_APP_DOMAIN}/dupe/update`,
                    { id: dupe.id, ...values },
                    {
                        withCredentials: true,
                        headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
                    }
                )
                .then((response) => {
                    console.log(response);
                    getDupes();
                })
                .catch((error) => console.log(error.response));
        } else {
            axios
                .post(`${process.env.REACT_APP_DOMAIN}/dupe/add`, values, {
                    withCredentials: true,
                    headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
                })
                .then((response) => {
                    getDupes();
                })
                .catch((error) => console.log(error.response));
        }
    };

    return (
        <div className="dupe-form-wrapper">
            <Formik
                initialValues={{
                    name: dupe ? dupe.name : "",
                    type: dupe ? dupe.type : "Abe",
                    agriculture: dupe ? dupe.agriculture : "",
                    athletics: dupe ? dupe.athletics : "",
                    construction: dupe ? dupe.construction : "",
                    creativity: dupe ? dupe.creativity : "",
                    cuisine: dupe ? dupe.cuisine : "",
                    excavation: dupe ? dupe.excavation : "",
                    husbandry: dupe ? dupe.husbandry : "",
                    machinery: dupe ? dupe.machinery : "",
                    medicine: dupe ? dupe.medicine : "",
                    piloting: dupe ? dupe.piloting : "",
                    rocketry: dupe ? dupe.rocketry : "",
                    science: dupe ? dupe.science : "",
                    strength: dupe ? dupe.strength : "",

                    // cropTending: dupe ? dupe.crop_tending : false,
                    // critterRanching: dupe ? dupe.critter_ranching : false,
                    // grilling: dupe ? dupe.grilling : false,
                    // advancedResearch: dupe ? dupe.advanced_research : false,
                    // fieldResearch: dupe ? dupe.field_research : false,
                    // astronomy: dupe ? dupe.astronomy : false,
                    // dataAnalysis: dupe ? dupe.data_analysis : false,

                    skillPoints: dupe ? dupe.availableSkillPoints : "",
                }}
                onSubmit={(values) => handleSubmit(values)}
            >
                <Form>
                    <div className="input-group-wrapper">
                        <TextInput label="Name" name="name" divclass="input-wrapper" />
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
                        {/* <div className="checkboxes-wrapper">
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
                        </div> */}
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
                        {/* <div className="checkboxes-wrapper">
                            <Checkbox
                                label="Grilling?"
                                name="grilling"
                                divclass={skillPointCheckbox}
                            />
                        </div> */}
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
                        {/* <div className="checkboxes-wrapper">
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
                        </div> */}
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
