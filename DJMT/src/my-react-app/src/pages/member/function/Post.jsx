import React, { useEffect, useState } from 'react'
import DaumPostcode from 'react-daum-postcode'
import './post.css'

const Post = props => {
  const { joinData, setJoinData } = props
  const address = 'mem_addr1'
  const complete = data => {
    let fullAddress = data.address
    let extraAddress = ''

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
    }
    console.log(data)
    console.log(fullAddress)
    console.log(data.zonecode)

    setJoinData({
      ...joinData,
      mem_addr1: fullAddress + '(' + data.zonecode + ')',
    })
    console.log(joinData)
  }

  return (
    <div>
      <DaumPostcode className="postmodal" autoClose onComplete={complete} />
    </div>
  )
}

export default Post
