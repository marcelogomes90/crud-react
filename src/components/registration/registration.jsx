import { useState, useEffect } from "react";
import Modal from "../modal/modal";
import Button from "./button";
import Container from "./container";
import Title from "./title";
import Table from "../table/table"

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
            { modalOpen ? <Modal setModalOpen={setModalOpen}/> : null }
            <Table />
        </>
    )
}

export default Registration;