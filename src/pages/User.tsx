import { useState } from "react";
import { Button, Card, Form, Image } from "react-bootstrap"

function User() {

    const initialUserData = {
        name: 'Jeú Chaves Lima',
        sector: "Setor XYZ",
        identification: "ID123",
        birthdate: "01/01/1990",
        cardExpirationDate: "01/01/2025",
        photoUrl: "https://dummyimage.com/100x100/000/fff"
    }

    const [editing, setEditing] = useState(false)
    const [userData, setUserData] = useState(initialUserData)

    const handleEditClick = () => {
        setEditing(!editing)
    }

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Lógica para salvar os dados do formulário
        setEditing(false)
    }

    return (
        <div className="container mt-4">
            <Button variant="primary" onClick={handleEditClick} className="mb-3">
                { editing ? 'Cancelar Edição' : 'Editar Usuário'}
            </Button>

            { editing ? (
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Nome do usuário</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o seu nome"
                            value={userData.name}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formSector">
                        <Form.Label>Seu setor</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o seu setor"
                            value={userData.sector}
                            onChange={(e) => setUserData({ ...userData, sector: e.target.value })}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBirthdate">
                        <Form.Label>Nome do usuário</Form.Label>
                        <Form.Control
                            type="date"
                            value={userData.birthdate.split('/').reverse().join('-')}
                            onChange={(e) => setUserData({ ...userData, birthdate: e.target.value })}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">Salvar alterações</Button>
                </Form>
            ) : (
                <>
                    <Card>
                        <Image 
                            src={userData.photoUrl} 
                            alt={userData.name} 
                            roundedCircle 
                            style={{width: '100px', height: '100px'}}
                        />
                        <Card.Body>
                            <Card.Title>{userData.name}</Card.Title>
                            <Card.Text>
                                <strong>Setor:</strong><br/>{userData.sector}
                            </Card.Text>
                            <Card.Text>
                                <strong>Identificação:</strong><br/>{userData.identification}
                            </Card.Text>
                            <Card.Text>
                                <strong>Data de nascimento:</strong><br/>{userData.birthdate}
                            </Card.Text>
                            <Card.Text>
                                <strong>Data de expiração:</strong><br/>{userData.cardExpirationDate}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </>
            )}
        </div>
    )
}

export default User