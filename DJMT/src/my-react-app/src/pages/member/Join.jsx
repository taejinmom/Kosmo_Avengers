import { useRecoilState, useSetRecoilState } from 'recoil'
import './Member.css'
import { JoinDataAtom } from './atom/JoinAtom'
import { memberData } from './memberData'
import { useState } from 'react'

function Join() {
  const [joinData,setJoinData] = useRecoilState(JoinDataAtom)

  const handler = (e) => {
    console.log(e.target.value)
    setJoinData({...joinData, [e.target.name]: e.target.value})
  }
  console.log(joinData)
  return (
    <>
      <div className="join">
        <div className="inner">
          <h2 className='title'>회원가입</h2>
          <div className="joinDiv"> 
            <form>
              {memberData.map((e,idx) =>{
                return (
                  <>
                <span key={idx}>{e.label}</span><br/>
                <input type={e.type} name={e.name} onChange={(event)=>{
                  handler(event)
                }} key={idx + '1'} />
                
                <br/>  
                </>
                )
              })
              }
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Join