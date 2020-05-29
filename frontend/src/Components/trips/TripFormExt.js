import React from 'react'

import TripForm from './TripForm'



const TripFormExt = ({ handleChange, handleMultiChange, handleSubmit, handleMapChange, handleMapSearch, handleTripSearch, formData, tempTrip, buttonText, titleText, errors, icons, addToTags }) => {
  return (
    <div className="trip-section">
      <div className="container">
        <TripForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleMapChange={handleMapChange}
          handleMapSearch={handleMapSearch}
          handleTripSearch={handleTripSearch}
          addToTags={addToTags}
          icons={icons}
          formData={formData}
          tempTrip={tempTrip}
          errors={errors}
          buttonText="Add some more details"
          titleText={titleText}
        />

        <div className="additional-info-container">
          <form onSubmit={handleSubmit}>
            <div className="additional-info-section">
              <div className="form">

                <label className="sub-title">
                  Description: </label>
                <div className="additional-info">

                  <div className="extras">
                    <div className="form-item">
                      <label className="sub-title"> Time of year: </label>
                      <input type="text"
                        name="timeOfYear"
                        className="input"
                        onChange={handleChange}
                        value={formData.timeOfYear}
                      />
                    </div>

                    <div className="form-item">
                      <label className="sub-title"> Distance: </label>
                      <input type="text"
                        name="distance"
                        className="input"
                        onChange={handleChange}
                        value={formData.distance}
                      />
                    </div>

                  </div>


                  <div className="ratings">

                    <div className="form-item">
                      <label className="sub-title"> Scenery: </label>
                      <input type="number"
                        name="scenery"
                        max="5"
                        min="1"
                        placeholder="1 to 5"
                        className="input"
                        onChange={handleChange}
                        value={formData.scenery}
                      />
                    </div>

                    <div className="form-item">
                      <label className="sub-title"> Enjoyment: </label>
                      <input type="number"
                        name="enjoyment"
                        max="5"
                        min="1"
                        placeholder="1 to 5"
                        className="input"
                        onChange={handleChange}
                        value={formData.enjoyment}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button type='submit' className="submit-btn">
                {buttonText}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TripFormExt