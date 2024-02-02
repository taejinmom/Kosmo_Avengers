import { useRecoilState } from "recoil";
import { CustomModalState } from "../../recoil/atoms/common/CustomModalState";
import { useEffect } from "react";

function CustomModal() {

    const [modalState, setModalState] = useRecoilState(CustomModalState);
    const handleModalClose = () => {
        setModalState({...modalState,isOpen:false});
    };

    return (
    <>
        {modalState.isOpen && (
            <div className="modal_dimmer">
                <div className="modal_background" onClick={()=> handleModalClose()} />
                <div className="modal_container">
                    <h1 className="modal_title">
                        {modalState.title}
                    </h1>
                    <div className="modal_content">{modalState.content}</div>
                </div>
            </div>
        )}
    </>
    );
}

export default CustomModal;