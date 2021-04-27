import React from 'react';
import CatCard from '../../components/CatCard/CatCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cat_1 from '../../images/cats/cat_1.jpg';
import cat_2 from '../../images/cats/cat_2.jpg';
import cat_3 from '../../images/cats/cat_3.jpg';
import cat_4 from '../../images/cats/cat_4.jpg';
import cat_5 from '../../images/cats/cat_5.jpg';
import data from '../../papertypes.json';
import { Draggable } from "react-drag-reorder";
import ReactDOM from 'react-dom';
import './Home.css';

interface IProps { }

interface IState { 
    paperTypes: Array<any>
    cats: Array<any>
    active: boolean
}

class Home extends React.Component<IProps,IState> {
    constructor(props : IProps) {
        super(props);
        this.state = { 
            paperTypes: data,
            cats: [cat_1, cat_2, cat_3, cat_4,cat_5],
            active: false,
        
        };
    }
    componentDidMount(): void {
        document.addEventListener("keydown", this.escMethod, false);
    }

    showCat(cat): void {
        this.addImageElement(cat);
        this.toggleClass();

    }

    toggleClass(): void {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    addImageElement(cat): void {
        const element = (
            <div>
                <img src={cat} alt='cat' />
            </div>
        );
        ReactDOM.render(element, document.getElementById('image-overlay'));
    }

    escMethod = (event) => {
        if (event.keyCode === 27) {
            this.toggleClass();
        }
    }

    componentWillUnmount(): void {
        document.removeEventListener("keydown", this.escMethod, false);
    }

    render(): JSX.Element {
        return (
        <div id="home">
            <h2>Welcome to the board</h2>
                <Container>
                    <Row>
                     <Draggable>
                    {this.state.paperTypes.map(( paperType, index ) => (
                        <Col key={index} onClick={ () => this.showCat(this.state.cats[index]) }><CatCard cat={ this.state.cats[index] } paperType={ paperType } /></Col>
                    ))}
                    </Draggable>
                    </Row>
                </Container>
                <div id="image-overlay" className={ this.state.active ? 'active' : 'not-active' }></div>
        </div>
            )
    }
}

export default Home