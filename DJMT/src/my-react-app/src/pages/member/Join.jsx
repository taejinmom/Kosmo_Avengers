import { useRecoilState, useSetRecoilState } from 'recoil'
import './Member.css'
import { JoinDataAtom } from './atom/JoinAtom'
import { memberData } from './MemberData'

import { inputHandler } from './MemberFunction'
import { Children, useRef } from 'react'
import { join } from './reactQuery/MemberReactQuery'
import { useNavigate } from 'react-router-dom'

function Join() {
  const [joinData, setJoinData] = useRecoilState(JoinDataAtom)
  const passwordValidation = useRef()
  const idValidation = useRef()
  const joinRef = name => {
    if (name === 'login_id') {
      return idValidation
    }
    if (name === 'login_pw_repeat') {
      return passwordValidation
    }
  }
  const navigate = useNavigate()
  const joinValidation = joinData => {}

  return (
    <>
      <div className="join">
        <div className="inner">
          <h2 className="title">회원가입</h2>
          <div className="joinDiv">
            <form
              onSubmit={e => {
                join(joinData, navigate, idValidation, passwordValidation)
                e.preventDefault()
              }}
            >
              {Children.toArray(
                memberData.map((e, idx) => {
                  if (e.name === 'login_pw_repeat' || e.name === 'login_id') {
                    return (
                      <>
                        <span>{e.label}</span>
                        <br />
                        <input
                          type={e.type}
                          name={e.name}
                          ref={joinRef(e.name)}
                          onChange={event => {
                            inputHandler(event, joinData, setJoinData)
                          }}
                        />
                        <br />
                      </>
                    )
                  }
                  return (
                    <>
                      <span>{e.label}</span>
                      <br />
                      <input
                        type={e.type}
                        name={e.name}
                        onChange={event => {
                          inputHandler(event, joinData, setJoinData)
                        }}
                      />
                      <br />
                    </>
                  )
                })
              )}
              <button>입력</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Join
