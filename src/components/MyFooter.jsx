import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Envelope, Github } from 'react-bootstrap-icons';
const MyFooter = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <Row>
                <Col xs={12}>
                    <div className=' bg-info text-center py-2'>
                        <Envelope className='me-3'></Envelope>
                            <Github className='me-3'></Github>
                      <p className='m-3'>Copyright © {year}</p>
                    </div>
                   
                  
                </Col>
            </Row>
        </footer>
    )
}

export default MyFooter;