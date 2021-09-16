import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddPlace = ({ onClickSubmit }) => {
  const [placeName, setPlaceName] = useState("");
  const [placeAddress, setPlaceAddress] = useState("");
  const [placeImage, setPlaceImage] = useState("");
  const [placeRating, setPlaceRating] = useState(0);
  const [placeDescription, setPlaceDescription] = useState("");

  const history = useHistory();

  const handleOnSubmit = (e) => {
    debugger;
    onClickSubmit(
      placeName,
      placeAddress,
      placeDescription,
      placeImage,
      placeRating
    );
    debugger;
    history.push("/");
  };

  const handleOnChange = (e) => {
    if (e.target.name === "placeName") {
      setPlaceName(e.target.value);
    } else if (e.target.name === "placeAddress") {
      setPlaceAddress(e.target.value);
    } else if (e.target.name === "placeRating") {
      let placeRatingTemp = parseInt(e.target.value);
      setPlaceRating(placeRatingTemp);
    } else if (e.target.name === "placeDescription") {
      setPlaceDescription(e.target.value);
    }
  };

  const handleOnChangeImage = (e) => {
    if (e.target.name === "placeImage") {
      let file = e.target.files[0];

      let fileReader = new FileReader();

      fileReader.onload = (e) => {
        let placeImageTemp = e.target.result;
        setPlaceImage(placeImageTemp);
      };

      fileReader.readAsDataURL(file);
    } else {
      alert("Error in selecting image file");
    }
  };

  return (
    <div className="new-place">
      <div className="form-div">
        <div
          id="add-form"
          // enctype="multipart/form-data"
          autoComplete="off"
          autoCorrect="off"
          onSubmit={(e) => {
            handleOnSubmit(e);
          }}
        >
          <h3 style={{ textAlign: "center" }}>
            Add a new place here with details
          </h3>

          <div className="float-top">
            <label htmlFor="placeName"> Name: </label> <br />
            <input
              type="text"
              name="placeName"
              placeholder="Enter a place name"
              value={placeName}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="float-top">
            <label htmlFor="placeAddress"> Address: </label> <br />
            <input
              type="text"
              name="placeAddress"
              placeholder="Enter place placeAddress"
              value={placeAddress}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="float-top">
            <label htmlFor="placeDescription"> Description: </label> <br />
            <input
              type="text"
              multiple
              name="placeDescription"
              placeholder="Enter place description"
              value={placeDescription}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="float-top">
            <label htmlFor="placeImage"> Photo: </label> <br />
            <input
              type="file"
              name="placeImage"
              placeholder="Select an Image"
              onChange={handleOnChangeImage}
              required
            />
          </div>

          <div className="float-top">
            <label htmlFor="placeRating"> Rating: </label> <br />
            <input
              type="number"
              name="placeRating"
              placeholder="Enter place placeRating"
              value={placeRating}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="float-top">
            <input type="submit" value="Submit" onClick={handleOnSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlace;
