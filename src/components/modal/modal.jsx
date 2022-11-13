import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"
import Container from "./container";
import Input from "./input";
import Form from "./form";
import Label from "./label";
import Button from "./button";
import Close from "./close";
import api from "../../services/api";

function Modal(props) {

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

    const cancelCreation = () => {
        props.setModalOpen(false);
    }

    const createClient = async () => {
        await api.post("/clients", { nome: nome, email: email, profissao: profissao, idade:idade }) 
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <Container>
            <Close  onClick={cancelCreation}>
                <AiOutlineClose size={28}/>
            </Close>
            <Form>
                <Label>Nome:</Label>
                <Input type="text" maxLength="50" required  onChange={(event) => handleNomeChange(event)}></Input>
                <Label>E-mail:</Label>
                <Input type="email" maxLength="50" required onChange={(event) => handleEmailChange(event)}></Input>
                <Label>Profissão:</Label>
                <Input type="text" maxLength="50" required onChange={(event) => handleProfissaoChange(event)}></Input>
                <Label>Idade:</Label>
                <Input type="number" min="1" max="150" required onChange={(event) => handleIdadeChange(event)}></Input>
                <Button type="submit" onSubmit={createClient}>Criar</Button>
            </Form>
        </Container>
    )
}

export default Modal;