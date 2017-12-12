import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const OilsList = ({ oils, deleteButton }) => {
    debugger;
    const renderOils = oils.map(oil =>
        <ListGroupItem key={ oil.id }>
            <Link key={ oil.id } to={`/oils/${oil.id}`}>{ oil.name }</Link>
            <Button 
                color="danger" 
                size="sm"
                style={{ float: "right" }}
                onClick={() => deleteButton(oil.id) }
            >
                Delete
            </Button>
        </ListGroupItem>
    );

    return (
        <ListGroup>
            { renderOils }
        </ListGroup>
    );
};

export default OilsList;