import Container from "./container";
import { Tabela, TableBody, TableHead, TableTd, TableTh, TableTr } from "./tabela";
import { RiFileEditLine, RiDeleteBin6Line } from "react-icons/ri"

function Table() {

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
                    <TableTr>
                        <TableTd>1</TableTd>
                        <TableTd></TableTd>
                        <TableTd>Marcelo Gomes</TableTd>
                        <TableTd>marcelo.sobrinho@outlook.com</TableTd>
                        <TableTd>Desenvolvedor</TableTd>
                        <TableTd>32</TableTd>
                        <TableTd><RiFileEditLine size={26} color="green" style={{cursor: "pointer", marginRight: "10px"}}/><RiDeleteBin6Line size={26} color="red" style={{cursor: "pointer"}}/></TableTd>
                    </TableTr>
                </TableBody>
            </Tabela>
        </Container>
    )

}

export default Table;