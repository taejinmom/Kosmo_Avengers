import React from 'react';

const FormRadio = ({name, label, value}) => {



    return (
        <div>
            <input type='radio' name={name} value={value}/>
            <label>
                <span>{label}</span>
            </label>
        </div>
    );
};

export default FormRadio;