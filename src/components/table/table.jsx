import { useEffect, useState } from "react";
import { Tabela, TableBody, TableHead, TableTd, TableTh, TableTr } from "./tabela";
import { RiFileEditLine, RiDeleteBin6Line } from "react-icons/ri";
import { RotatingLines } from "react-loader-spinner";
import api from "../../services/api";
import Container from "./container";
import Avatar from "../../assets/avatar.png";
import AvatarImg from "./avatar";
import ModalEdit from "../modalEdit/modalEdit";
import ModalConfirm from "../modalConfirm/modalConfirm";
import LoadingDiv from "./loadDiv";

function Table(props) {

    const [arrayClient, setArrayClient] = useState();
    const [idEdit, setIdEdit] = useState();
    const [idDelete, setIdDelete] = useState();
    const [editNome, setEditNome] = useState();
    const [editMail, setEditMail] = useState();
    const [editProf, setEditProf] = useState();
    const [editIdade, setEditIdade] = useState();
    const [modalEditOpen, setModaEditlOpen] = useState(false);
    const [modalDeletetOpen, setModalDeletelOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const deleteClient = (e) => {
        setIdDelete(`/clients/${e.currentTarget.id}`)
        setModalDeletelOpen(true)
    }

    const editClient = (e) => {
        let arrayFiltrado = arrayClient.filter(function(obj) { return obj.id == e.currentTarget.id })
        arrayFiltrado.map((item) => (
            setEditNome(item.nome),
            setEditMail(item.email),
            setEditProf(item.profissao),
            setEditIdade(item.idade)
        ))
        setIdEdit(e.currentTarget.id)
        setModaEditlOpen(true)
    }

    const getClients = async ()  => {
        if (props.modalOpen == false & modalEditOpen == false & modalDeletetOpen == false) {
            setLoading(true);
        }
        await api.get("/clients").then(({data}) => {
            setArrayClient(data);
        })
        setLoading(false);
    }
    
    useEffect(  () => {
        getClients();
    }, [props.modalOpen, modalEditOpen, modalDeletetOpen] )

    return(
        <Container>
            { modalDeletetOpen ? <ModalConfirm setModalDeletelOpen={setModalDeletelOpen} idDelete={idDelete} setLoading={setLoading}/> : null }
            { modalEditOpen ? 
            <ModalEdit 
                setModalEditOpen={setModaEditlOpen} 
                idEdit={idEdit} 
                editNome={editNome} 
                editMail={editMail} 
                editProf={editProf} 
                editIdade={editIdade}
                setLoading={setLoading}
            /> : 
            null }
            { loading ?
                <LoadingDiv>
                    <RotatingLines
                    strokeColor="#5b5dbd"
                    strokeWidth="3"
                    animationDuration="0.95"
                    width="60"
                    visible={true}
                    />
                </LoadingDiv> 
            :
                <Tabela>
                    <TableHead>
                        <TableTr>
                            <TableTh>Avatar</TableTh>
                            <TableTh>Nome</TableTh>
                            <TableTh>E-mail</TableTh>
                            <TableTh>Profissão</TableTh>
                            <TableTh>Idade</TableTh>
                            <TableTh>Ações</TableTh>
                        </TableTr>
                    </TableHead>
                    <TableBody>
                        {arrayClient?.map((entrada) => ( 
                            <TableTr key={`${entrada.id}`}>
                                <TableTd><AvatarImg src={Avatar}></AvatarImg></TableTd>
                                <TableTd>{`${entrada.nome}`}</TableTd>
                                <TableTd>{`${entrada.email}`}</TableTd>
                                <TableTd>{`${entrada.profissao}`}</TableTd>
                                <TableTd>{`${entrada.idade}`}</TableTd>
                                <TableTd>
                                    <RiFileEditLine
                                        id={`${entrada.id}`}
                                        title="Editar"
                                        size={24} color="green" 
                                        style={{cursor: "pointer", marginRight: "10px"}}
                                        onClick={(e) => editClient(e)}
                                    />
                                    <RiDeleteBin6Line
                                        id={`${entrada.id}`}
                                        title="Deletar"
                                        size={24} color="red" 
                                        style={{cursor: "pointer"}}
                                        onClick={(e) => deleteClient(e)}
                                    />
                                </TableTd>   
                            </TableTr>
                        ))}
                    </TableBody>
                </Tabela>
            }
        </Container>
    )
}

export default Table;