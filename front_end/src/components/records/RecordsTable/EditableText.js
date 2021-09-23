import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function EditableText({ value, recordKey, id, handler }) {    // THIS IS CHANGED
    return (
        <Editable
            defaultValue={value}
            className="flex gap-2 items-center text-yellow-600"
        >
            <EditablePreview />
            {/* THIS IS CHANGED. Added data-key and data-id */}
            <EditableInput
                data-key={recordKey}
                data-id={id}
                onBlur={handler}
                onChange={handler}
                size="xs"
            />
        </Editable>
    );
}

EditableText.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    recordKey: PropTypes.string.isRequired,   // THIS IS NEW
    handler: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,          // THIS IS NEW
};

export default EditableText;