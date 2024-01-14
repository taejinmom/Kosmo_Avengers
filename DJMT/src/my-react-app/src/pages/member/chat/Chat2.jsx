import React, { useCallback, useRef, useState, useEffect } from 'react'
// import styles from './styles/ChatRoom.module.css'
// import { useSelector } from 'react-redux'
// import testImg from '../assets/images/testImg.jpg'
import { useNavigate, useParams } from 'react-router-dom'

import * as StompJs from '@stomp/stompjs'

// heroicons
import {
  CameraIcon,
  ChevronLeftIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline'
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import { useRecoilValue } from 'recoil'
import { memberKeyAtom } from '../atom/LoginAtom'

export default function ChatRoom() {
  let navigate = useNavigate()

  const param = useParams() // 채널을 구분하는 식별자
  const chatroomId = param.chatroomId
  const token = JSON.stringify(window.localStorage.getItem('token')) // 현재 로그인 된 사용자의 토큰

  let [client, changeClient] = useState(null)
  const [chat, setChat] = useState('') // 입력된 chat을 받을 변수
  const [chatList, setChatList] = useState([]) // 채팅 기록

  // userSlice.js에 저장된 로그인된 유저의 코드를 받음
  const userId = useRecoilValue(memberKeyAtom)

  //컴포넌트가 변경될 때 객체가 유지되어야하므로 'ref'로 저장

  const connect = () => {
    // 소켓 연결
    try {
      const clientdata = new StompJs.Client({
        brokerURL: 'ws://localhost:8093/ws',
        connectHeaders: {
          login: '',
          passcode: 'password',
        },
        debug: function (str) {
          console.log(str)
        },
        reconnectDelay: 5000, // 자동 재 연결
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      })

      // 구독
      // clientdata.onConnect = function () {
      //   clientdata.subscribe('/sub/channels/' + chatroomId, callback)
      // }

      clientdata.activate() // 클라이언트 활성화
      changeClient(clientdata) // 클라이언트 갱신
    } catch (err) {
      console.log(err)
    }
  }

  const disConnect = () => {
    // 연결 끊기
    if (client === null) {
      return
    }
    client.deactivate()
  }

  // 콜백함수 => ChatList 저장하기
  const callback = function (message) {
    if (message.body) {
      let msg = JSON.parse(message.body)
      setChatList(chats => [...chats, msg])
    }
  }

  const sendChat = () => {
    if (chat === '') {
      return
    }

    client.publish({
      destination: '/pub/chat/' + chatroomId,
      body: JSON.stringify({
        type: '',
        sender: userId,
        channelId: '1',
        data: chat,
      }),
    })

    setChat('')
  }

  useEffect(() => {
    // 최초 렌더링 시 , 웹소켓에 연결
    // 우리는 사용자가 방에 입장하자마자 연결 시켜주어야 하기 때문에,,
    connect()

    return () => disConnect()
  }, [])

  const onChangeChat = e => {
    setChat(e.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }
  // 내가 보낸 메시지, 받은 메시지에 각각의 스타일을 지정해 주기 위함
  const msgBox = chatList.map((item, idx) => {
    if (Number(item.sender) !== userId) {
      return (
        <div key={idx}>
          <div>{/* <img src={testImg} alt="" /> */}</div>
          <div>
            <span>{item.data}</span>
          </div>
          <span>{item.date}</span>
        </div>
      )
    } else {
      return (
        <div key={idx}>
          <div>
            <span>{item.data}</span>
          </div>
          <span>{item.date}</span>
        </div>
      )
    }
  })
  return (
    <>
      {/* {JSON.stringify(user)} */}
      {/* <GlobalStyle/> */}
      <div>
        {/* 상단 네비게이션 */}
        <div>
          <ChevronLeftIcon
            onClick={() => {
              navigate('/chatlist ')
            }}
          />
          <span>상대방 이름</span>
          <MegaphoneIcon onClick={() => navigate(`/report/1`)} />
        </div>

        {/* 채팅 리스트 */}
        <div>{msgBox}</div>

        {/* 하단 입력폼 */}
        <form onSubmit={handleSubmit}>
          {/* <input type="file" accept='image/*'/>  */}
          <CameraIcon />
          <div>
            <div>
              <input
                type="text"
                id="msg"
                value={chat}
                placeholder="메시지 보내기"
                onChange={onChangeChat}
                onKeyDown={ev => {
                  if (ev.keyCode === 13) {
                    sendChat()
                  }
                }}
              />
            </div>
            <ArrowUpCircleIcon value="전송" onClick={sendChat} />
          </div>
        </form>
      </div>
    </>
  )
}
