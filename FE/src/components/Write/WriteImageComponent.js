import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { uploadPost } from "../../store/Write";
import {motion} from 'framer-motion';

function WriteImageComponent(props) {
    const [imageFile, setImageFile] = useState("")
    const [savedFile, setSavedFile] = useState("")
    const [description, setDescription] = useState("")
    const imageInput = React.createRef();
    const [star, setStar] = useState();

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
        uploadPost(props.nowClickedMarker, star, formData);
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
            url: `http://localhost:8080/post/upload`,
            mode: "cors",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
        });

    }
    
    return(
        <>
         <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.1,
          delay: 0.05,
          ease: [0.71, 0.71, 0.2, 1.01]}} >
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}><div>{props.nowClickedMarker}</div>
                    <Image
                        src={imageFile ? imageFile :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWSxsVpAmqb_T7CLGolJ193Bw9xh7X7r0yQ&usqp=CAU`}
                        alt="이미지"
                        onDoubleClick={onButtonClick}
                    />
                </div>
                <div style={{
                    margin: 'auto',
                    display: 'flex',
                    width: '500px',
                    justifyContent: 'center'
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
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <DescriptionInput
                        onChange={onDescriptionHandler}
                        placeholder="글을 작성하세요.">
                    </DescriptionInput>
                </div>
                <div style={{
                    margin: 'auto',
                    display: 'flex',
                    width: '500px',
                    justifyContent: 'center'
                }}>
                    <SaveButton onClick={onWriteButtonClick}>저장</SaveButton>
                </div>
            </motion.div>
        </>
    )

}

export default WriteImageComponent;

const Image = styled.img`
    width: 300px;
    height: 300px;
    margin-top: 30px;
`
const ImageInput = styled.input`
    
`

const AddImageButton = styled.button`
    width: 100px;
    border: 1px solid rgb(251,243,220);
    background-color: rgb(251,243,220);

    margin-left: 1rem;

    font-size: 15px;
    font-family: UhBeeZZIBA-Regular;
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
    border: 1px solid rgb(252,214,131);

    font-size: 15px;
    font-family: UhBeeZZIBA-Regular;
    color: rgb(234,130,99);
`
const SaveButton = styled.button`
    width: 50px;
    border: 1px solid rgb(251,243,220);
    background-color: rgb(251,243,220);

    margin-left: 1rem;

    font-size: 15px;
    font-family: UhBeeZZIBA-Regular;
    color: rgb(234,130,99);
    text-align: center;

    cursor: pointer;
    user-select: none;
    transition: .2s all;
`