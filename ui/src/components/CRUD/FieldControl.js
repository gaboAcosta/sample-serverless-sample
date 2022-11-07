
import { getFormControl } from "./FormControl";
import { getDatePicker } from "./DatePicker";

function getIsDisabled ({ insertDisabled, editDisabled }, isCreate) {
    if(isCreate) {
        return insertDisabled === true
    } else {
        return editDisabled === true
    }
}

const getFieldValue = (fieldName, entity) => {
    return entity[fieldName]
}

export const getFieldControl = (field, isCreate, entity, onChange) => {
    const disabled = getIsDisabled(field, isCreate)
    const fieldValue = getFieldValue(name, entity)
    if (field.type === 'date') {
        return getDatePicker(field, isCreate, entity, onChange, disabled, fieldValue)
    }
    return getFormControl(field, isCreate, entity, onChange, disabled, fieldValue)
}