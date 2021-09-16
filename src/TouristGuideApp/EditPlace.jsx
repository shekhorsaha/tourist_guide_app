import React, { useState } from "react";

const EditPlace = ({ item, onClickUpdate, onClickCancel }) => {
  const [placeName, setPlaceName] = useState(item.placeName);
  const [address, setAddress] = useState(item.address);
  const [strImg, setStrImg] = useState(item.strImg);
  const [rating, setRating] = useState(item.rating);
  const [description, setDescription] = useState(item.description);

  const handleUpdate = (e) => {
    onClickUpdate(placeName, address, strImg, rating, description, item.id);
  };
  const handleCancel = (e) => {
    onClickCancel(item.id);
  };
  const handlePlaceName = (e) => {
    setPlaceName(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleStrImg = (e) => {
    let file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      let placeImageTemp = e.target.result;
      setStrImg(placeImageTemp);
    };
    fileReader.readAsDataURL(file);
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  return (
    <div style={{ border: "2px solid red", padding: "10px 20px" }}>
      <form
        autoComplete="off"
        autoCorrect="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p>Place Name:</p>
        <p>
          <input type="text" onChange={handlePlaceName} value={placeName} />
        </p>

        <p>Address:</p>
        <p>
          <input type="text" onChange={handleAddress} value={address} />
        </p>

        <p>Description:</p>
        <p>
          <input type="text" onChange={handleDescription} value={description} />
        </p>

        <p>Photo:</p>
        <p>
          <input type="file" onChange={handleStrImg} />
        </p>

        <p>Rating</p>
        <p>
          <input type="number" onChange={handleRating} value={rating} />
        </p>

        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleCancel}>Cancel Edit</button>
      </form>
    </div>
  );
};

export default EditPlace;
