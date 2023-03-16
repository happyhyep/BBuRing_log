import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";


function WriteImageComponent() {
    const [imageFile, setImageFile] = useState("")
    const [savedFile, setSavedFile] = useState("")
    const [description, setDescription] = useState("")
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

    const onDescriptionHandler = (e) => {
        setDescription(e.currentTarget.value)
    }

    const onButtonClick = (e) => {
      imageInput.current.click();
    };

    const onWriteButtonClick = async (e) => {
        const formData = new FormData();
        formData.append(
          "uploadImage",
          savedFile
        );
        formData.append(
            "uploadDescription",
            description
        );

        {/*console.log(formData)    
        //key 확인하기
        for (let key of formData.keys()) {
            console.log(key);
        }

        //value 확인하기
        for (let value of formData.values()) {
        console.log(value);
        }
        */}

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
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}> 
                <Image
                    src={imageFile ? imageFile :`http://www.bhc.co.kr/upload/bhc/menu/ck20150130_470_v.jpg`}
                    alt="이미지"
                />
            </div>
            <div style={{
                margin: 'auto',
                display: 'flex',
                width: '500px'
            }}>
                <ImageInput
                    type="file"
                    accept="image/jpg, image/jpeg, image/png"
                    ref={imageInput}
                    onChange={saveImageFile}
                    multiple="multiple"
                    style={{display: "none"}}></ImageInput>
                <AddImageButton type="button" onClick={onButtonClick}>이미지 넣기</AddImageButton>
            </div>
            <div>
                <DescriptionInput
                    onChange={onDescriptionHandler}
                    placeholder="글을 작성하세요.">
                </DescriptionInput>
            </div>
            <div style={{
                margin: 'auto',
                display: 'flex',
                width: '500px',
                alignItems: 'flex-end'
            }}>
                <button onClick={onWriteButtonClick}>저장</button>
            </div>
        </>
    )

}

export default WriteImageComponent;

const Image = styled.img`
    width: 300px;
    height: 300px;
    margin-top: 30px;

    border: 1px solid ;
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

const DescriptionInput = styled.input`
    width: 500px;
    height: 300px;
    border-radius: 0.5rem;
    border: 1px solid rgb(151,142,113);
`
