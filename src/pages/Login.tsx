import { Card, Form, Button } from 'react-bootstrap'

function Login() {

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        // Lógica de autenticação
    }

    return (
        <div className="d-flex align-items-center justify-content-center p-4" style={{ minHeight: '100vh' }}>
            <Card className="col-12">
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login