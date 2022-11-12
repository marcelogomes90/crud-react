import { useState } from "react";
import Modal from "../modal/modal";
import Button from "./button";
import Container from "./container";
import Title from "./title";

function Registration() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    return (
        <>
            <Container>
                <Title>Clientes</Title>
                <Button onClick={openModal}>Cadastrar</Button>
            </Container>
            { modalOpen ? <Modal /> : null }
        </>
    )
}

export default Registration;