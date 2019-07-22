import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const uuid = require('uuid/v4');


class ShoppingList extends Component {
    state = {
        items: [
            { id: uuid(), name: "eggs" },
            { id: uuid(), name: "milk" },
            { id: uuid(), name: "steak" },
            { id: uuid(), name: "water" }
        ]
    }
    render() {
        const { items } = this.state;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: "2rem" }}
                    onClick={() => {
                        const name = prompt("Enter item: ");
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }] //adding items to the existing items
                            }));
                        }
                    }}
                >
                    Add Item
                </Button>
                {/*display list items*/}
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }));
                                        }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>

            </Container>
        );
    }
}
export default ShoppingList;