import React, { useEffect, useState } from 'react'
import DaumPostcode from 'react-daum-postcode'
import './post.css'

const Post = props => {
  const { data, setData } = props
  const complete = postData => {
    console.log('postData >> ', postData)
    let fullAddress = postData.address
    let extraAddress = ''

    if (postData.addressType === 'R') {
      if (postData.bname !== '') {
        extraAddress += postData.bname
      }
      if (postData.buildingName !== '') {
        extraAddress +=
          extraAddress !== ''
            ? `, ${postData.buildingName}`
            : postData.buildingName
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
    }
    console.log('full addr ..>> ', fullAddress)

    setData({
      ...data,
      mem_addr1: fullAddress,
    })
  }

  return (
    <div>
      <DaumPostcode
        className="postmodal"
        autoClose
        onComplete={complete}
        style={{ zIndex: 30 }}
      />
    </div>
  )
}

export default Post
