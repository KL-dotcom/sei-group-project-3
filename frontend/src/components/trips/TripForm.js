import React from 'react'
import TripMap from './TripMap'


const TripForm = ({ handleChange, handleSubmit, formData, buttonText, titleText, errors, search, _updateViewport, handleMapChange, handleMapSearch, tempTrip, handleTripSearch, icons, addToTags, visibility, height, width }) => {
  console.log(visibility)
  return (
    <div>
      <div className="trip-section">
        <div className="container">
          <img
            className="logo"
            src="https://i.ya-webdesign.com/images/alphabet-biker-png-2.png"
            alt=""
            height="100" />
          <div className="title">{titleText}</div>

          <div className="map-section">
            <div className="map-inputs">
              <div className="name">

                <label className="sub-title title"> Trip Name: </label>
                <div className="form-item">
                  <input type="text"
                    className="input"
                    name="name"
                    placeholder="What is the trip called..."
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
              </div>
              {errors.name && <small>{errors.name}</small>}


              <div className="start">
                <label className="sub-title"> Starting Point: </label>
                <div className="form-item">
                  <br></br>
                  <input type="text"
                    className="input"
                    name="startingPointCity"
                    placeholder="City, Town, Village..."
                    onChange={handleMapChange}
                    value={tempTrip.startingPointCity}
                  />
                </div>
                {errors.startingPointCity && <small>{errors.startingPointCity}</small>}

                <div className="form-item">

                  <br></br>
                  <input type="text"
                    className="input"
                    name="startingPointState"
                    onChange={handleMapChange}
                    placeholder="State (only if US or Canada)..."
                    value={tempTrip.startingPointState}
                  />
                </div>
                {errors.startingPointState && <small>{errors.startingPoinState}</small>}

                <div className="form-item">

                  <br></br>
                  <input type="text"
                    className="input"
                    name="startingPointCountry"
                    placeholder="Country code (eg GB, US)..."
                    onChange={handleMapChange}
                    value={tempTrip.startingPointCountry}
                  />
                </div>
                {errors.startingPointCountry && <small>{errors.startingPointCountry}</small>}
              </div>




              <div className="end">

                <label className="sub-title"> End Point: </label>
                <div className="form-item">
                  <br></br>
                  <input type="text"
                    className="input"
                    name="endPointCity"
                    placeholder="City, Town, Village..."
                    onChange={handleMapChange}
                    value={tempTrip.endPointCity}
                  />
                </div>

                {errors.endPointCity && <small>{errors.endPointCity}</small>}

                <div className="form-item">

                  <br></br>
                  <input type="text"
                    className="input"
                    name="endPointState"
                    placeholder="State (only if US or Canada)..."
                    onChange={handleMapChange}
                    value={tempTrip.endPointState}
                  />
                </div>
                {errors.endPointState && <small>{errors.endPointState}</small>}

                <div className="form-item">

                  <br></br>
                  <input type="text"
                    className="input"
                    name="endPointCountry"
                    placeholder="Country code (eg GB, US)..."
                    onChange={handleMapChange}
                    value={tempTrip.endPointCountry}
                  />
                </div>
                {errors.endPointCountry && <small>{errors.endPointCountry}</small>}

              </div>
              <button
                className="btn"
                onClick={handleTripSearch}>Search for your trip
          </button>
            </div>
            <div classname="map-width">

              <TripMap
                formData={formData}
                errors={errors}
                handleMapChange={handleMapChange}
                handleMapSearch={handleMapSearch}
                search={search}
                height={'500'}
                width={'400'}
              />
            </div>
          </div>


          <form onSubmit={handleSubmit}>

            <div className="form-item">
              <div className="description-container">
                <div className="description">
                  <label className="sub-title">
                    Description: </label>
                  <textarea type="text"
                    name="description"
                    placeholder="Tell us a bit about the route and highlights..."
                    className="input"
                    onChange={handleChange}
                    value={formData.description}
                  />
                </div>
              </div>
            </div>

            {errors.description && <small>{errors.description}</small>}

            <div className="form">
              <div className="form-item">
                <div className="icons-section">
                  <div className="icons-div">
                    <label className="sub-title">
                      Add tags to your trip: </label>
                    <div className="icons-container">

                      {icons.map(icon =>
                        <p
                          className="icons"
                          id={icon.name}
                          onClick={addToTags}
                          key={icon.name}>{icon.value}{icon.name}
                        </p>)}
                    </div>
                  </div>
                </div>



                <div className="form-item">
                  <div className="photo-section">
                    <div className="photo-div">
                      <label className="sub-title">
                        Add a cover photo of your trip: </label>
                      <input type="text"
                        name="image"
                        placeholder="Post the link here..."
                        className="input"
                        onChange={handleChange}
                        value={formData.image}
                      />
                    </div>
                    {errors.image && <small>{errors.image}</small>}
                  </div>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TripForm