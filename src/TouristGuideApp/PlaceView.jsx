// import { Grid } from "@material-ui/core";
import React from "react";
// import "../App.c

const PlaceView = ({ item, onClickDelete, onClickEdit }) => {
  return (
    <div>
      {/* <Grid container>
        <Grid item lg="4">
          <img src={item.placeImage} id="temp-pimage" alt="place" />
        </Grid>

        <Grid item lg="8">
          <Grid container>
            <Grid item>
              <Grid container>
                <Grid item lg="6">
                  <div className="upper-head" style={{ marginTop: 10 }}>
                    <h2 id="temp-place-name"> {item.placeName} </h2>

                    <p className="address" id="temp-place-address">
                      <i
                        className="fas fa-map-marker-alt"
                        style={{ color: "red", paddingTop: "3px" }}
                      ></i>
                      {" " + item.placeAddress}
                    </p>
                  </div>
                </Grid>

                <Grid item lg="1"></Grid>

                <Grid item lg="5">
                  <div className="rating-area">Rating :{item.placeRating}</div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <div style={{ marginTop: 30 }}> {item.description} </div>
            </Grid>

            <Grid item></Grid>

            <Grid item>
              <Grid container>
                <Grid item>
                  <div
                    className="action action-edit"
                    id="temp-edit-action"
                    onClick={(e) => onClickEdit(item.id)}
                  >
                    Edit
                  </div>
                </Grid>

                <Grid item>
                  <div
                    className="action action-delete"
                    id="temp-delete-action"
                    onClick={(e) => onClickDelete(item.id)}
                  >
                    Delete
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}

      <div className="place-row" id="temp-pid">
        <img src={item.placeImage} id="temp-pimage" alt="place" />

        <div className="place-desc">
          <div className="rating-area">Rating :{item.placeRating}</div>
          <div className="place-details">
            <div className="upper-head" style={{ marginTop: 10 }}>
              <h2 id="temp-place-name"> {item.placeName} </h2>

              <p className="address" id="temp-place-address">
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "red", paddingTop: "3px" }}
                ></i>
                {" " + item.placeAddress}
              </p>

              <div style={{ marginTop: 30 }}> {item.description} </div>
            </div>
          </div>

          <div className="action-area">
            <div
              className="action action-edit"
              id="temp-edit-action"
              onClick={(e) => onClickEdit(item.id)}
            >
              Edit
            </div>

            <div
              className="action action-delete"
              id="temp-delete-action"
              onClick={(e) => onClickDelete(item.id)}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceView;
