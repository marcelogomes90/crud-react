import { useEffect, useState } from "react";
import { Tabela, TableBody, TableHead, TableTd, TableTh, TableTr } from "./tabela";
import { RiFileEditLine, RiDeleteBin6Line } from "react-icons/ri";
import api from "../../services/api";
import Container from "./container";
import Avatar from "../../assets/avatar.png";
import AvatarImg from "./avatar";
import ModalEdit from "../modalEdit/modalEdit";

function Table(props) {

    const [arrayClient, setArrayClient] = useState();
    const [idEdit, setIdEdit] = useState();
    const [editNome, setEditNome] = useState();
    const [editMail, setEditMail] = useState();
    const [editProf, setEditProf] = useState();
    const [editIdade, setEditIdade] = useState();
    const [modalEditOpen, setModaEditlOpen] = useState(false);

    const deleteClient = (e) => {
        api.delete(`/clients/${e.currentTarget.id}`);
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
    
    useEffect(() => {
        api.get("/clients").then(({data}) => {
            setArrayClient(data);
        })
    }, [props.modalOpen, modalEditOpen] )

    return(
        <Container>
            { modalEditOpen ? 
            <ModalEdit 
                setModalEditOpen={setModaEditlOpen} 
                idEdit={idEdit} 
                editNome={editNome} 
                editMail={editMail} 
                editProf={editProf} 
                editIdade={editIdade}
            /> : 
            null }
            <Tabela>
                <TableHead>
                    <TableTr>
                        <TableTh>#</TableTh>
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
                            <TableTd>{`${entrada.id}`}</TableTd>
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
        </Container>
    )

}

export default Table;