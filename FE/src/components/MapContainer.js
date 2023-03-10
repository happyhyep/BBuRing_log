import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

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
                
              });
            kakao.maps.event.addListener(
                marker,
                "mouseover",
                makeOverListener(map, marker, infowindow)
            );
            kakao.maps.event.addListener(
                marker,
                "mouseout",
                makeOutListener(infowindow)
            );
            kakao.maps.event.addListener(
                    marker,
                    'click',
                    MarkerClick()
            );
            marker.setMap(map);
        }, [])
        })
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
        function MarkerClick() {
            return function() {
                console.log("rr")
                return(<NavLink to='/home'></NavLink>)
            }
        }

    return (
        <div id="map" style={{
            width: '500px',
            height: '500px'
        }}></div>
    )
}
export default MapContainer;