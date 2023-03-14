import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PostedImages from "./PostedImages";
import styled from "styled-components";


const {kakao} = window;

function MapContainer() {
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

    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    const [_map, setMap] = useState();
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.240951, 127.073126),
            level:30
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
                    MarkerClick()
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

        let [is_marker_clicked, set_marker_clicked] = useState(false)
        function MarkerClick() {
            return function() {
                set_marker_clicked(!is_marker_clicked)
            }
        }

        const zoomIn = () => {
            _map.setLevel(_map.getLevel() - 1);
            console.log("zoomin")
          }
      
          const zoomOut = () => {
            _map.setLevel(_map.getLevel() + 1);
          }

    return (
        <div style={{margin: 'auto'}}>
            <div id="map" style={{
                marginTop: '3rem',
                width: '600px',
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
            {is_marker_clicked ? <div><PostedImages></PostedImages></div> : null}
        </div>
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
`