import React, { useContext } from 'react'
import Chat from '../components/Chat'
import styled from 'styled-components'
import { SocketContext } from '../App'
import { useLocation } from 'react-router-dom'

const ChatApp = () => {
  const socket = useContext(SocketContext)
  const {
    state: { username, room },
  } = useLocation()
  return (
    <ChatAppDiv>
      <Chat socket={socket} username={username} room={room} />
    </ChatAppDiv>
  )
}
const ChatAppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
  color: #212121;
  display: grid;
  place-items: center;
`
export default ChatApp
