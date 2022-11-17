import Container from "./container";
import Title from "./title";
import ButtonYes from "./buttonYes";
import ButtonNo from "./buttonNo";
import ButtonsDiv from "./buttonsDiv";
import api from "../../services/api";

function ModalConfirm(props) {

    const cancel = () => {
        props.setModalDeletelOpen(false);
    }

    const confirm = async () => {
        await api.delete(props.idDelete);
        props.setModalDeletelOpen(false);
        props.setLoading(true);
    }

    return (
        <Container>
            <Title>Tem certeza que deseja excluir o cliente?</Title>
            <ButtonsDiv>
                <ButtonYes onClick={confirm}>Sim</ButtonYes>
                <ButtonNo onClick={cancel}>Cancelar</ButtonNo>
            </ButtonsDiv>
        </Container>
    )
}

export default ModalConfirm;