import * as React from 'react'

import { useEffect } from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import { ChatPresenter } from '../Presenter/CHatPresenter'
import './ChatContainer.css'

let sockJS = new SockJS('http://127.0.0.1:8093/webSocket', null, {
  transports: ['websocket', 'xhr-streaming', 'xhr-polling'],
})
// let stompClient = (Stomp.Client = Stomp.over(sockJS))
let stompClient = Stomp.over(sockJS)
stompClient.debug = data => {
  console.log('try', data)
}

export const ChatContainer = () => {
  const [contents, setContents] = React.useState([])
  const [username, setUsername] = React.useState('')
  const [message, setMessage] = React.useState('')

  useEffect(() => {
    stompClient.connect({}, onConnected, onError)
  }, [contents])

  const onConnected = data => {
    console.log('connect >>> ', data)
    stompClient.subscribe('/topic/roomId', data => {
      const newMessage = JSON.parse(data.body)
      addMessage(newMessage)
    })
  }

  const onError = error => {
    console.log('error >>> ', error)
  }
  const handleEnter = (username, content) => {
    const newMessage = { username, content }
    stompClient.send('/api/hello', {}, JSON.stringify(newMessage))
    setMessage('')
  }

  const addMessage = message => {
    setContents(prev => [...prev, message])
  }

  return (
    <>
      <div className={'container'}>
        <ChatPresenter
          contents={contents}
          handleEnter={handleEnter}
          message={message}
          setMessage={setMessage}
          username={username}
          setUsername={setUsername}
        />
      </div>
    </>
  )
}
