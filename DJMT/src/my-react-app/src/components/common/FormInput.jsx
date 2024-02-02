import { useRecoilState, useRecoilValue } from "recoil";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const FormInput = ({name, label, type = "text"}) => {
    const {
        register,
        formState: { errors }
      } = useFormContext();
    
    return (
        <div className="input__block">
            <label>
                {/* <span className="">{label}</span> */}
                <input 
                    className="input"
                    type={type}
                    placeholder={name}
                    {...register(name)}
                />
                <span className="input__errors">
                    <ErrorMessage name={name} errors={errors} />
                </span>
            </label>
        </div>
    );
};

export default FormInput;