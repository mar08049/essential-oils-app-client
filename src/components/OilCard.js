import React from 'react';
import { Card, Button, CardTitle, CardText,
 CardSubtitle, CardBody } from 'reactstrap';

const OilCard = ({ oil }) => (
    <Card key={ oil.id } className="OilsCard">
        <CardBody>
            <CardTitle>{ oil.name }</CardTitle>
            <CardText>{ oil.description }</CardText>
            <CardSubtitle>Uses:</CardSubtitle>
            <CardText>{ oil.uses }</CardText>
            <CardSubtitle>Scent Profile:</CardSubtitle>
            <CardText>{ oil.fragrance_profile }</CardText>
            <CardSubtitle>Medical Properties:</CardSubtitle>
            <CardText>{ oil.medical_properties }</CardText>
            <Button>Button</Button>
        </CardBody>
    </Card>
);

export default OilCard;