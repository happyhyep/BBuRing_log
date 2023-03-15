import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";


function WriteImageComponent() {
    const [imageFile, setImageFile] = useState("")
    const [savedFile, setSavedFile] = useState("")
    const imageInput = React.createRef();
  
    const saveImageFile = () => {
        const file = imageInput.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageFile(reader.result);
           };
        setSavedFile(file);
    };

    const onButtonClick = (e) => {
      imageInput.current.click();
      
    };

    const onWriteButtonClick = async (e) => {
        const formData = new FormData();
        formData.append(
          "uploadImage",
          savedFile
        );
        const postSurvey = axios({
            method: "POST",
            url: `http://192.168.214.127:8080/post/upload`,
            mode: "cors",
            headers: {
                "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
            },
            data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
        });

    }
    
    return(
        <>
            <Image
                src={imageFile ? imageFile :`http://www.bhc.co.kr/upload/bhc/menu/ck20150130_470_v.jpg`}
                alt="이미지"
            />
            <ImageInput
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                ref={imageInput}
                onChange={saveImageFile}
                multiple="multiple"
                style={{display: "none"}}></ImageInput>
            <AddImageButton type="button" onClick={onButtonClick}>이미지 넣기</AddImageButton>
            <button onClick={onWriteButtonClick}>업로드 완료</button>
        </>
    )

}

export default WriteImageComponent;

const Image = styled.img`
    width: 500px;
`
const ImageInput = styled.input`

`

const AddImageButton = styled.button`
    width: 100px;
    border-radius: 0.3rem;
    border: 1px solid ;
    background-color: rgb(254,213,107);

    margin-left: 1rem;

    font-size: 15px;
    color: rgb(234,130,99);
    text-align: center;

    cursor: pointer;
    user-select: none;
    transition: .2s all;
`
