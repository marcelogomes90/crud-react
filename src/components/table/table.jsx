import { useEffect, useState } from "react";
import { Tabela, TableBody, TableHead, TableTd, TableTh, TableTr } from "./tabela";
import { RiFileEditLine, RiDeleteBin6Line } from "react-icons/ri";
import api from "../../services/api";
import Container from "./container";

function Table() {

    const [arrayClient, setArrayClient] = useState();

    useEffect(() => {
        api.get("/clients").then(({data}) => {
            setArrayClient(data);
        })
    }, [] )

    return(
        <Container>
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
                            <TableTd></TableTd>
                            <TableTd>{`${entrada.nome}`}</TableTd>
                            <TableTd>{`${entrada.email}`}</TableTd>
                            <TableTd>{`${entrada.profissao}`}</TableTd>
                            <TableTd>{`${entrada.idade}`}</TableTd>
                            <TableTd><RiFileEditLine size={24} color="green" style={{cursor: "pointer", marginRight: "10px"}}/><RiDeleteBin6Line size={24} color="red" style={{cursor: "pointer"}}/></TableTd>   
                        </TableTr>
                        ))}
                </TableBody>
            </Tabela>
        </Container>
    )

}

export default Table;