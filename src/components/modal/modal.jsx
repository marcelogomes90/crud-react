import Container from "./container";
import Input from "./input";
import Form from "./form";
import Label from "./label";
import Button from "./button";
import { AiOutlineClose } from "react-icons/ai"
import Close from "./close";

function Modal(props) {

    const cancelCreation = () => {
        props.setModalOpen(false);
    }

    return (
        <Container>
            <Close  onClick={cancelCreation}>
                <AiOutlineClose size={28}/>
            </Close>
            <Form>
                <Label>Nome:</Label>
                <Input type="text" maxLength="50" required></Input>
                <Label>E-mail:</Label>
                <Input type="email" maxLength="50" required></Input>
                <Label>Profissão:</Label>
                <Input type="text" maxLength="50" required></Input>
                <Label>Idade:</Label>
                <Input type="number" min="1" max="150" required></Input>
                <Button type="submit">Criar</Button>
            </Form>
        </Container>
    )
}

export default Modal;