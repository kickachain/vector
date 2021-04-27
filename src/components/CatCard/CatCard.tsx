import React from 'react';
import Card from 'react-bootstrap/Card';
import loader from '../../images/loading/spinner.gif';

interface IProps {
    cat: string
    paperType: IPaper
}

interface IPaper {
    type: string
    title: string
    position: number
}

class CatCard extends React.Component <IProps> {
    
    render(): JSX.Element {
        return (
            <Card style={{ width: '18rem', margin: 'auto' }}>
                <Card.Img variant="top" src={this.props.cat} className="loading" style={{ height: '285px', backgroundImage: `url(${loader})` }} />
                <Card.Body>
                    <Card.Title>{this.props.paperType.title}</Card.Title>
                    <Card.Text>
                        type: {this.props.paperType.type}<br/>
                        position: {this.props.paperType.position}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default CatCard