import axios from "axios"
import { useRef, useState } from "react"
import request from "../../../../api/core"

const Test = () => {
    const [imageUrl ,setImageUrl] = useState('')
    const [text ,setText] = useState('')
    const imageRef = useRef()
    
    const handleImage = async(e)=>{
        const file = e.target.files[0]
        const err = checkImage(file)
        
        if(err) return window.alert(err)
        if(file){
            imageRef.current.src = URL.createObjectURL(file)
        }
        setImageUrl(file)
    }

    const checkImage = (file) =>{
        let err=""

        if(!file) return err="File does not exist."
        if(file.size>1024*1024){
            err = "The largest image size is 1mb."
        }
        if(file.type !== 'image/jpeg' && file.type !== 'image/png'){
            err = "Image format is incorrect."
        }

        return err
    }

    const handleImageDelete= () =>{
        setImageUrl('')
        var preview = document.getElementById('preview')
        preview.src = ''
    }

    const handleSubmit= (e) =>{
        var imageURL = ''
        if(imageUrl){
            const file = new FormData()
            file.append('file', imageUrl)
            console.log('imageURL >> ' ,imageUrl)
            for (let key of file.keys()) {
                console.log(key);
              }
            for (let value of file.values()) {
            console.log(value);
            }
            const result =  axios.post('api/postTest', file)
            
            imageURL = result.data
        }
        e.preventDefault()

    }

return (
        <>
            <div className="show_media" style={{display: imageUrl ? 'grid':'none'}}>
                <div id="file_media">
                    <img id="preview" src={''} alt="imageURL" ref={imageRef} style={{width:'200px',height:'300px'}}/>
                    <span onClick={(e) => {handleImageDelete(e)}}>&times;</span>
                    </div>
            </div>
            <form className="message-input" onSubmit={(e) => {handleSubmit(e)}} >
                {/* <input type="text" placeholder="Enter your Message" value={text} onChange={(e)=>setText(e.target.value)} /> */}

                <div className="file_upload">
                    <i className="fas fa-image text-danger"></i>
                    <input type="file" name="file" id="file" accept="image/*" onChange={(e) => {handleImage(e)}} />
                </div>

                <button type="submit" className="material-icons" disabled={text || imageUrl? false : true}> 
                    near_me
                </button>
            </form>
        </>
)
}
export default Test;