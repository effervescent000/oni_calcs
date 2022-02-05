import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Formik, Form } from "formik";
import { Modal, ModalBody } from "reactstrap";
import * as Yup from "yup";

import DupeForm from "./dupe-form";

const DupeModal = (props) => {
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalBody>
                <DupeForm dupe={props.dupe} />
            </ModalBody>
        </Modal>
    );
};

export default DupeModal;
