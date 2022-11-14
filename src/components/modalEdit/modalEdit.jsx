import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"
import Container from "./container";
import Input from "./input";
import Form from "./form";
import Label from "./label";
import Button from "./button";
import Close from "./close";
import api from "../../services/api"

function ModalEdit(props) {

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [profissao, setProfissao] = useState();
    const [idade, setIdade] = useState();

    const handleNomeChange = (event) => {
        setNome(event.target.value)
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };

    const handleProfissaoChange = (event) => {
        setProfissao(event.target.value)
    };

    const handleIdadeChange = (event) => {
        setIdade(event.target.value)
    };

    const cancelEdit = () => {
        props.setModalEditOpen(false);
    }

    const editClient = async (event) => {
        event.preventDefault();
        await api.put(`/clients/${props.idEdit}`, { nome: nome, email: email, profissao: profissao, idade:idade });
        props.setModalEditOpen(false);
    }

    return (
        <Container>
            <Close  onClick={cancelEdit}>
                <AiOutlineClose size={28}/>
            </Close>
            <Form onSubmit={(event) => editClient(event)}>
                <Label>Nome:</Label>
                <Input type="text" maxLength="50" required defaultValue={`${props.editNome}`} onChange={(event) => handleNomeChange(event)}></Input>
                <Label>E-mail:</Label>
                <Input type="email" maxLength="50" required defaultValue={`${props.editMail}`} onChange={(event) => handleEmailChange(event)}></Input>
                <Label>Profissão:</Label>
                <Input type="text" maxLength="50" required defaultValue={`${props.editProf}`} onChange={(event) => handleProfissaoChange(event)}></Input>
                <Label>Idade:</Label>
                <Input type="number" min="1" max="150" required defaultValue={`${props.editIdade}`} onChange={(event) => handleIdadeChange(event)}></Input>
                <Button type="submit">Editar</Button>
            </Form>
        </Container>
    )
}

export default ModalEdit;