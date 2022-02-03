import React, { useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Formik, Form } from "formik";
import { Modal, ModalBody } from "reactstrap";
import * as Yup from "yup";

import TextInput from "../form-components/text-input";
import PasswordInput from "../form-components/password-input";
import { UserContext } from "../../user-context";

const SignupModal = (props) => {
    const { setUser, setProfile, toggleLogIn } = useContext(UserContext);

    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalBody>
                <Formik
                    initialValues={{ username: "", password: "", confirmPassword: "" }}
                    onSubmit={(values) => {
                        axios
                            .post(`${process.env.REACT_APP_DOMAIN}/auth/signup`, values, {
                                withCredentials: true,
                                headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
                            })
                            .then((response) => {
                                toggleLogIn();
                                setUser(response.data);
                            })
                            .catch((error) => console.log(error.response));
                    }}
                >
                    <Form>
                        <TextInput label="Username" name="username" />
                        <PasswordInput label="Password" name="password" />
                        <PasswordInput label="Confirm Password" name="confirmPassword" />
                        <button type="submit">Sign up</button>
                    </Form>
                </Formik>
            </ModalBody>
        </Modal>
    );
};

export default SignupModal;
