import React from 'react'


const TripMap = ({ formData, height, width }) => {

  return (
    // <div className="map-width">
    <iframe
      title="map"
      src={`https://www.mapquest.com/embed/directions/from/${formData.startingPointCountry}/${formData.startingPointState}/${formData.startingPointCity}/to/${formData.endPointCountry}/${formData.endPointState}/${formData.endPointCity}`}
      height={height}
      width={width}
      mapstyle="mapbox://styles/mapbox/dark-v9"
    />
    // </div>
  )
}

export default TripMap