const FormButton = ({name, type="button", onClick, className}) => {

    const onClickHandler = () => {

        if(!onClick){
            alert(11);
        } else {
            console.log(1);
            onclick;
        }
    }

    return (
        <div>
            <button className={className} type={type} onClick={ onClick }>
                {name}
            </button>
        </div>
    );
};

export default FormButton;