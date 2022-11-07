
import { getFieldControl } from "./FieldControl";

export const ModalFields = (props) => {
    const { fields = [], isCreate, entity, onChange} = props
    return fields.map((field) => {
        return getFieldControl(field, isCreate, entity, onChange)
    })
}


