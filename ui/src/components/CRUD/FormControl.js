import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {capitalize} from "../../utils/strings";
import React from "react";

export const getFormControl =  (field, isCreate, entity, onChange, disabled, fieldValue) => {
    const { name, type, placeHolder } = field
    return (
        <Row key={`${name}-input`}>
            <Col>
                <Form.Label>{capitalize(name)}</Form.Label>
                <Form.Control
                    disabled={disabled}
                    type={type}
                    placeholder={placeHolder}
                    value={fieldValue}
                    onChange={({ target: { value }})=> onChange(name, value)}
                />
            </Col>
        </Row>
    )
}
