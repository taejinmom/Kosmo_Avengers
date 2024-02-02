import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoilState, useSetRecoilState } from "recoil";

const Form = ({children = React.ReactNode,className, schema, onSubmit}) => {

    const methods = useForm({ 
        resolver: schema ? yupResolver(schema) : undefined,
        mode: 'onSubmit'
    });

    return (
    <FormProvider {...methods}>
        <form
            onSubmit={ methods.handleSubmit(onSubmit) }
            className={className}
        >
            { children }
        </form>
    </FormProvider>
    );
};

Form.input = FormInput;
Form.button = FormButton;

export default Form;