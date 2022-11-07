import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {capitalize} from "../../utils/strings";
import DatePicker from "react-datepicker";
import React from "react";

export const getFieldDate = (fieldName, entity) => {
    if(entity[fieldName]) return new Date(entity[fieldName])
}

export const getDatePicker = (field, isCreate, entity, onChange, disabled, fieldValue) => {
    const { name } = field
    return (
        <Row key={`${name}-input`}>
            <Col>
                <Form.Label>{capitalize(name)}</Form.Label>
                <DatePicker
                    disabled={disabled}
                    id={`${name}-my-date-picker`}
                    className={'form-control'}
                    autoComplete={'off'}
                    selected={getFieldDate(fieldValue)}
                    onChange={(newDate)=> onChange(name, newDate)}
                />
            </Col>
        </Row>
    )
}
