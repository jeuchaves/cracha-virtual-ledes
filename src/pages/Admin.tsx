import { Button, Card, Table } from "react-bootstrap"

interface User {
    id: number;
    name: string;
}

function Admin() {
    
    const usersData: User[] = [
        { id: 1, name: 'Usuario 1'},
        { id: 2, name: 'Usuario 2'},
        { id: 3, name: 'Usuario 3'}
    ]

    const handleApprove = (userId: number) => {
        // Lógica de aprovação...
        console.log(`Usuário ${userId} aprovado!`)
    }

    const handleReject = (userId: number) => {
        // Lógica de rejeição...
        console.log(`Usuário ${userId} reprovado!`)
    }

    return(
        <div className="container mt-4">
            <Card>
                <Card.Header className="text-center">
                    <h4>Administrador</h4>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>
                                        <Button variant="success" onClick={() => handleApprove(user.id)}>
                                            Aprovar
                                        </Button>{' '}
                                        <Button variant="danger" onClick={() => handleReject(user.id)}>
                                            Reprovar
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Admin