import "./hostingPage2.scss";
import { FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MapContainer from "../../../components/HousesComponents/MapContainer.jsx";
import { useState } from "react";
import Geocode from "react-geocode";

export default function HostingPage2() {
  const [currentAddress, setCurrentAddress] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);

  let navigate = useNavigate();

  function addAddress() {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

    Geocode.setLanguage("en");
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();

    navigator.geolocation.getCurrentPosition((position) => {
      Geocode.fromLatLng(
        position.coords.latitude,
        position.coords.longitude
      ).then(
        (response) => {
          const address = response.results[0].formatted_address;
          setCurrentAddress(address);
          console.log("Current location address-->", address);
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }

  return (
    <div className="hostingPage2">
      <div className="mainLeft">
        <h1>Where is your place located?</h1>
      </div>

      <div className="mainRight">
        <div className="subMainRight">
          <MapContainer />
          <div className="subMainRightDiv">
            <FaMapMarkerAlt />

            <input
              onClick={() => setCurrentAddress(null)}
              value={currentAddress}
              type="text"
              placeholder="Enter your address"
            />

            <div className="myCurrentLocation">
              <FaLocationArrow />
              <button onClick={addAddress}> Current location</button>
              <button
                className="addAddressManually"
                onClick={() => setShowAddressForm(true)}
              >
                {" "}
                Add manually{" "}
              </button>

              {showAddressForm && (
                <div className="showAddressForm">
                  <div className="subShowAddressForm">
                    <button
                      className="closeButton"
                      onClick={() => setShowAddressForm(false)}
                    >
                      x
                    </button>{" "}
                    <br />
                    <input type="text" placeholder="Street" /> <br />
                    <input
                      type="text"
                      placeholder="Apt, house, etc. (Optional)"
                    />{" "}
                    <br />
                    <input type="text" placeholder="City" /> <br />
                    <input type="text" placeholder="Zip code" /> <br />
                    <input type="text" placeholder="Country / Region" /> <br />
                    <button className="confirmButton">Confirm address</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="subMainRightBottom">
          <div className="bottomPart">
            <div className="back">
              <button
                onClick={() => navigate("../hostingPage1", { replace: true })}
              >
                <u>Back</u>
              </button>
            </div>
            <div className="next">
              <button
                onClick={() => navigate("../hostingPage3", { replace: true })}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
