import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import io from 'socket.io-client'
import { createContext } from 'react'
import ChatMain from './pages/ChatMain.jsx'

function Modal({ className, onClose, maskClosable, closable, visible }) {
  let socket = io.connect('http://localhost:4000')
  useEffect(() => {})
  const onMaskClick = e => {
    if (e.target === e.currentTarget) {
      onClose(e)
    }
  }

  // const close = e => {
  //   if (onClose) {
  //     onClose(e)
  //   }
  // }

  return (
    <>
      <ModalOverlay visible={visible.toString()} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible.toString()}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          <ChatMain socket={socket} />
          {/* <ModalInner2>
              {closable && (
                <CloseStyle> */}
          {/* <Close className="modal-close" onClick={Dayclose}>
                  오늘 하루 닫기
                </Close> */}
          {/* <Close className="modal-close" onClick={close}>
                    닫기
                  </Close>
                </CloseStyle>
              )}
            </ModalInner2> */}
        </ModalInner>
      </ModalWrapper>
    </>
  )
}

Modal.propTypes = {
  visible: PropTypes.bool,
}

const ModalInner2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImgStyle = styled.div``

const CloseStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #282828;
  width: 210px;
  padding: 15px;
  border-radius: 0 0 15px 15px;
  color: #ffffff;
`

const Close = styled.span`
  cursor: pointer;
`

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  // box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  // background-color: #fff;
  // border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`

export default React.memo(Modal)
