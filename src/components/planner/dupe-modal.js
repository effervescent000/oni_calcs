import React from "react";
import { Modal, ModalBody } from "reactstrap";

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
