import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PostedImages from "./PostedImages";
import styled from "styled-components";
import { getMyLocation } from "../../store/MapSearch";
import Write from "../../pages/Write";
import {motion} from 'framer-motion';

const {kakao} = window;

function MapContainer() {
    const [myPositions, setMyPositions] = useState([]);
    const positions = [
        {
            title: "용인 서천",
            lat: 37.240951,
            lng: 127.073126
        },
        {
            title: "수원 영통",
            lat: 37.248838,
            lng: 127.076500
        }
    ];
    //api 등록 후 아래 모든 positions를 myPositions로 바꿔주기
    useEffect(() => {
        getMyLocation(localStorage.getItem('id'))
        .then((res) => {
            setMyPositions(res.title, res.x, res.y)
        })
    })

    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    const [_map, setMap] = useState();
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.240951, 127.073126),
            level:10 
        };
        const map = new kakao.maps.Map(container, options);
        positions.map((el) => {
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(el.lat, el.lng),
            });
            var infowindow = new kakao.maps.InfoWindow({
                content: el.title, // 인포윈도우에 표시할 내용
                //게시글 개수
              });
            //마커에 마우스 올렸을 때
            kakao.maps.event.addListener(
                marker,
                "mouseover",
                makeOverListener(map, marker, infowindow)
            );
            //마커에서 마우스 내렸을 때
            kakao.maps.event.addListener(
                marker,
                "mouseout",
                makeOutListener(infowindow)
            );
            //마커 클릭했을 때
            kakao.maps.event.addListener(
                    marker,
                    'click',
                    MarkerClick(marker, el.title)
            );
            marker.setMap(map);
        }, []);
        setMap(map);
    }, _map)
        function makeOverListener(map, marker, infowindow) {
        return function () {
            infowindow.open(map, marker);
        };
        }
        function makeOutListener(infowindow) {
            return function () {
              infowindow.close();
            };
          }

        let [is_marker_clicked, set_marker_clicked] = useState(false);
        let [nowClickedMarker, setNowClickedMarker] = useState();

        function MarkerClick(marker, title) {
            return function() {
                set_marker_clicked(!is_marker_clicked)
                setNowClickedMarker(title);
            }
        }

        const zoomIn = () => {
            _map.setLevel(_map.getLevel() - 1);
            console.log("zoomin")
          }
      
          const zoomOut = () => {
            _map.setLevel(_map.getLevel() + 1);
          }

    const navigate = useNavigate();
    const onWriteButton = (nowClickedMarker) => {
        navigate('/write', {state: 
            {marker: nowClickedMarker}})
    }

    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.71, 0.71, 0.2, 1.01]}} >
        <div style={{margin: 'auto'}}>
            <div id="map" style={{
                marginTop: '3rem',
                width: '50%',
                height: '450px',
                marginLeft: 'auto',
                marginRight: 'auto',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.8)'
            }}>
            <MapBtnContainer>
                <MapControlBtn  onClick={zoomIn} style={{borderRight: "1px solid #919191"}} >+</MapControlBtn>
                <MapControlBtn  onClick={zoomOut}  >-</MapControlBtn>
            </MapBtnContainer>
            </div>
            {is_marker_clicked ? (
                <div>
                    <div><PostedImages nowClickedMarker={nowClickedMarker}></PostedImages></div>
                    <div><WriteButton onClick={()=>onWriteButton(nowClickedMarker)}>✍️ 글 쓰기</WriteButton></div>
                </div>)
                : null}
        </div></motion.div>
    )
}
export default MapContainer;

const MapBtnContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
  z-index: 5;
  border-radius: 5px;
  display: flex;
  align-items: center;
  border:1px solid #919191;
  background-color: #F5F5F5;
`

const MapControlBtn = styled.div`
  width:40px;
  height:30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  cursor:pointer;
  font-family: UhBeeZZIBA-Regular;
`

const WriteButton = styled.button`
    position : fixed;
    bottom :5%;
    right : 2rem;

    width: 100px;
    border-radius: 0.3rem;
    border: 1.2px solid rgb(252,214,131);
    background-color: rgb(251,243,220);

    font-size: 15px;
    font-family: UhBeeZZIBA-Regular;
    color: rgb(234,130,99);
    text-align: center;

    cursor: pointer;
    user-select: none;
    transition: .2s all;
`