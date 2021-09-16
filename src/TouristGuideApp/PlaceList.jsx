import React, { useState } from "react";
import EditPlace from "./EditPlace";
import PlaceView from "./PlaceView";

const PlaceList = ({
  items,
  onClickDelete,
  onClickUpdate,
  onSearch,
  onSortByRating,
}) => {
  const [editingId, setEditingId] = useState(0);
  const [searchKey, setSearchKey] = useState("");

  const handleCancelEvent = (editingId) => {
    setEditingId(0);
  };

  const handleOnClickEdit = (id) => {
    setEditingId(id);
  };

  const handleOnClickUpdate = (
    placeName,
    address,
    strImg,
    rating,
    description,
    id
  ) => {
    onClickUpdate(placeName, address, strImg, rating, description, id);
    setEditingId(0);
  };

  return (
    <div className="home">
      <div id="top-bar" className="clearfix">
        <div className="top-bar-item">
          <input
            type="text"
            name="search-key"
            placeholder="Search"
            onChange={(e) => setSearchKey(e.target.value)}
            onKeyUp={() => {
              onSearch(searchKey);
            }}
          />
        </div>

        <div className="top-bar-item">
          <button onClick={onSortByRating}>
            Sort by rating <i className="fas fa-sort"></i>
          </button>
        </div>
      </div>
      {/* <div>
        <br />
      </div> */}
      <div className="container">
        <div>
          {items.map((item) => {
            if (item.id === editingId) {
              return (
                <EditPlace
                  key={item.id}
                  item={item}
                  onClickCancel={handleCancelEvent}
                  onClickUpdate={handleOnClickUpdate}
                />
              );
            } else {
              return (
                <PlaceView
                  key={item.id}
                  item={item}
                  onClickDelete={onClickDelete}
                  onClickEdit={handleOnClickEdit}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default PlaceList;
