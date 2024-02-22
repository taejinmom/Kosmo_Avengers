import React, { useContext } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
// import { SocketContext } from '../Modal'
import { useNavigate } from 'react-router-dom'

const ChatMain = props => {
  // const socket = useContext(SocketContext)
  const { socket } = props
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')
  const navigate = useNavigate()
  // const [showChat, setShowChat] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')

  const joinRoom = e => {
    e.preventDefault()
    if (username !== '' && room !== '') {
      socket.emit('join_room', { room, username })
      navigate('/chat', {
        state: {
          username: username,
          room: room,
        },
      })
    } else {
      setErrorMsg('사용자 이름과 입장할 방을 입력해주세요.')
    }
  }
  return (
    <>
      <div>
        <ChatContainer>
          <ChatTitle>Chat With !</ChatTitle>
          <ChatInput
            type="text"
            placeholder="사용할 이름을 입력해주세요"
            onChange={e => {
              setErrorMsg('')
              setUsername(e.target.value)
            }}
          />
          <ChatInput
            type="text"
            placeholder="입장할 방을 입력해주세요"
            onChange={e => {
              setErrorMsg('')
              setRoom(e.target.value)
            }}
          />
          <ErrorMessage>{errorMsg}</ErrorMessage>
          <ChatButton onClick={joinRoom}>입장</ChatButton>
        </ChatContainer>
      </div>
    </>
  )
}

// const ChatAppDiv = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: #fff;
//   color: #212121;
//   display: grid;
//   place-items: center;
// `

const ChatContainer = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid steelblue;
  border-radius: 6px;
  padding: 10px;
  width: 300px;
`
const ChatTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: steelblue;
`
const ChatInput = styled.input`
  height: 35px;
  margin: 7px;
  border: 2px solid steelblue;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
`

const ErrorMessage = styled.p`
  color: red;
  height: 10px;
  font-size: 0.8rem;
`

const ChatButton = styled.button`
  width: 200px;
  height: 50px;
  margin: 10px auto;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  background: steelblue;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background: rgb(35, 65, 89);
    transition: all 0.5s;
  }
  &:active {
    font-size: 0.8rem;
  }
`
export default ChatMain
