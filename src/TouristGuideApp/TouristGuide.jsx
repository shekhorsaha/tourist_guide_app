import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link,
  Switch,
} from "react-router-dom";
import About from "./About";
import AddPlace from "./AddPlace";
import PlaceList from "./PlaceList";
import LalbaghFort from "../image/LalbaghFort.jpg";
import Bichanakandi from "../image/Bichanakandi.jpg";
import KaptaiHangingBridge from "../image/KaptaiHangingBridge.jpg";

let counterId = 3;

let itemsBackUp = [
  {
    id: counterId++,
    placeName: "Dhaka",
    placeAddress: "Lalbagh Kella",
    placeImage: LalbaghFort,
    placeRating: 5,
    description:
      "Lalbagh Fort is an incomplete 17th-century Mughal fort complex that stands before the Buriganga River in the southwestern part of Dhaka, Bangladesh. The construction was started in 1678 AD by Mughal Subahdar Muhammad Azam Shah, who was a son of Emperor Aurangzeb and later emperor himself.",
  },
  {
    id: counterId++,
    placeName: "Chittagong",
    placeAddress: "Kaptai Lake",
    placeImage: KaptaiHangingBridge,
    placeRating: 5,
    description:
      "Kaptai Lake is the largest lake in Bangladesh. It is located in the Kaptai Upazila under Rangamati District of Chittagong Division. The lake was created as a result of building the Kaptai Dam on the Karnaphuli River, as part of the Karnaphuli Hydro-electric project.",
  },
  {
    id: counterId++,
    placeName: "Sylhet",
    placeAddress: "Bichana-Kandi",
    placeImage: Bichanakandi,
    placeRating: 4,
    description:
      "Bichnakandi, also known as Bisnakandi, is a village in Rustompur Union, Gowainghat Upazila of Bangladesh's Sylhet District. In recent years, there has been an influx of tourists to its river.",
  },
];

const SORT_TYPE = {
  ASC: "ASC",
  DESC: "DESC",
  NONE: "NONE",
};

const TouristGuide = () => {
  const [items, setItems] = useState([...itemsBackUp]);
  const [sortType, setSortType] = useState(SORT_TYPE.NONE);

  const handleOnClickSubmit = (
    placeName,
    placeAddress,
    placeDescription,
    placeImage,
    placeRating
  ) => {
    let item = {
      id: counterId++,
      placeName,
      placeAddress,
      description: placeDescription,
      placeImage,
      placeRating,
    };
    debugger;
    console.log("item = ", item);
    let newItemArray = [...itemsBackUp];
    newItemArray.push(item);
    debugger;
    setItems(newItemArray);
    console.log(items);
    itemsBackUp = newItemArray;
  };

  const handleOnClickDelete = (id) => {
    const tempItems = items.filter((item) => (item.id !== id ? item : null));
    setItems(tempItems);
    itemsBackUp = tempItems;
  };

  const handleUpdateEvent = (
    placeName,
    address,
    strImg,
    rating,
    description,
    editingId
  ) => {
    let newItems = items.map((item) => {
      if (item.id === editingId) {
        item.placeName = placeName;
        item.placeAddress = address;
        if (strImg && strImg.length > 0) {
          item.placeImage = strImg;
        }
        item.placeRating = rating;
        item.description = description;

        return item;
      }
      return item;
    });
    setItems(newItems);
    itemsBackUp = newItems;
  };

  const applyFilter = (searchKey) => {
    const searchKeyTemp = searchKey.toLowerCase();

    const newItems = itemsBackUp.filter((item) => {
      if (
        item.placeName.toLowerCase().includes(searchKeyTemp) ||
        item.placeAddress.toLowerCase().includes(searchKeyTemp) ||
        item.description.toLowerCase().includes(searchKeyTemp)
      )
        return true;
      else return false;
    });

    debugger;
    setItems(newItems);
  };

  const applySortByRating = () => {
    if (sortType === SORT_TYPE.NONE) {
      setSortType(SORT_TYPE.DESC);
    } else if (sortType === SORT_TYPE.DESC) {
      setSortType(SORT_TYPE.ASC);
    } else if (sortType === SORT_TYPE.ASC) {
      setSortType(SORT_TYPE.NONE);
    }

    if (sortType === SORT_TYPE.NONE) {
      setItems([...itemsBackUp]);
      return;
    } else if (sortType === SORT_TYPE.DESC) {
      const itemsTemp = items.sort((itemA, itemB) => {
        if (itemA.placeRating >= itemB.placeRating) return -1;
        return 1;
      });
      setItems(itemsTemp);
    } else if (sortType === SORT_TYPE.ASC) {
      const itemsTemp = items.sort((itemA, itemB) => {
        if (itemA.placeRating <= itemB.placeRating) return -1;
        return 1;
      });
      setItems(itemsTemp);
    }
  };

  return (
    <div>
      <h1>Bangladesh</h1>

      <Router>
        <div className="nav-menu clearfix">
          <ul>
            <li>
              <Link activeClassName="active-nav-menu" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName="active-nav-menu" to="/add_new_place">
                Add New Place
              </Link>
            </li>
            <li>
              <Link activeClassName="active-nav-menu" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Switch>
            <Route exact path="/add_new_place">
              <AddPlace onClickSubmit={handleOnClickSubmit} />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <PlaceList
                items={items}
                onClickDelete={handleOnClickDelete}
                onClickUpdate={handleUpdateEvent}
                onSearch={applyFilter}
                onSortByRating={applySortByRating}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default TouristGuide;
