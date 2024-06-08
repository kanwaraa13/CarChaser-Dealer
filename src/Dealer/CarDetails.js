import React, { useEffect, useState } from "react";
import { SellerNav } from "./DealerNav";
import { useParams } from "react-router-dom"; // import useParams
import api from "../api";
export const CarDetails = () => {
  const { Vehicle_Id } = useParams(); // Get the ID from the URL slug
  const [appreport, setAppeport] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [bidPrice, setBidPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [vehicleData, setVehicleData] = useState(null);
  const [sellerid, setSeller] = useState("");
  const [vechicleid, setVehicleId] = useState("");
  const [highestbid, setHighestBid] = useState("");
  const [location, setLocation] = useState("");
  const [vin, setVin] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [trim, setTrim] = useState("");
  const [mileage, setMileage] = useState("");
  const [color, setColor] = useState("");
  const [keys, setkeys] = useState("");
  const [settire, setSetTire] = useState("");
  const [windowtint, setWindowTint] = useState("");
  const [aftermarketexhaust, setAftermarketExhaust] = useState("");
  const [aftermarkrims, setAftermarkRims] = useState("");
  const [roofrack, setRoofRack] = useState("");
  const [remotestarter, setRemoteStarter] = useState("");
  const [aftermarkstereo, setAftermarkStereo] = useState("");
  const [aftermarketspoiler, setAftermarketSpoiler] = useState("");
  const [minordamage, setMinorDamage] = useState("");
  const [interiorimage, setInteriorImage] = useState("");
  const [interiorimagetwo, setInteriorImageTwo] = useState("");
  const [interiorimagethree, setInteriorImageThree] = useState("");
  const [interiorimagefour, setInteriorImageFour] = useState("");
  const [exteriorimage, setExteriorImage] = useState("");
  const [exteriorimagetwo, setExteriorImageTwo] = useState("");
  const [exteriorimagethree, setExteriorImageThree] = useState("");
  const [exteriorimagefour, setExteriorImageFour] = useState("");
  const [dashboardimage, setDashboardImage] = useState("");
  const [dashboardimagetwo, setDashboardImageTwo] = useState("");
  const [dashboardimagethree, setDashboardImageThree] = useState("");
  const [dashboardimagefour, setDashboardImageFour] = useState("");
  const [rimsimage, setRimsImage] = useState("");
  const [rimsimagetwo, setRimsImageTwo] = useState("");
  const [rimsimagethree, setRimsImageThree] = useState("");
  const [rimsimagefour, setRimsImageFour] = useState("");
  const [fadingpaints, setFadingPaints] = useState("");
  const [rust, setRust] = useState("");
  const [haildamage, setHailDamage] = useState("");
  const [extmintcondition, setExtMintCondition] = useState("");
  const [dents, setDents] = useState("");
  const [ripsOrTears, setRipsOrTears] = useState(false);
  const [visibleStain, setVisibleStain] = useState(false);
  const [strongSmell, setStrongSmell] = useState(false);
  const [damagedSystems, setDamagedSystems] = useState(false);
  const [IntmintCondition, setIntMintCondition] = useState(false);
  const [smokeInVehicle, setSmokeInVehicle] = useState(false);
  const [hasOriginalRims, setHasOriginalRims] = useState(null);
  const [tireReplacement, setTireReplacement] = useState(null);
  const [vehicleDrivable, setVehicleDrivable] = useState(null);
  const [crackOnWindshield, setCrackOnWindshield] = useState(null);
  const [extendedWarranty, setExtendedWarranty] = useState(null);
  const [tradeInInterest, setTradeInInterest] = useState(null);
  const [hasWinterTires, setHasWinterTires] = useState(null);
  const [sellTiming, setSellTiming] = useState("");
  const [DonotNeedCar, setDonotNeedCar] = useState("");
  const [MechElectIssues, setMechElectIssues] = useState("");
  const [DownSize, setDownSize] = useState("");
  const [BuyAnotherCar, setBuyAnotherCar] = useState("");
  const [carCondition, setCarCondition] = useState("");
  const [accidentclaims, setAccidentClaims] = useState("");
  const [howmuchclaims, setHowMuchClaims] = useState("");
  const [carrims, setCarRims] = useState("");
  const [stockrim, setStockRim] = useState("");
  const [issuevichle, setIssueVichle] = useState("");
  const [issuevichledecs, setIssueVichleDecs] = useState("");
  const [carmodify, setCarMdify] = useState("");
  const [carmodifydecs, setCarMdifyDecs] = useState("");
  const [financed, setFinanced] = useState("");
  const [financeddesc, setFinancedDesc] = useState("");
  const [getbidprice, setGetBidPrice] = useState("");
  const [vechiclevideo, setVechicleVideo] = useState("");
  const initialBidPrice = getbidprice ? `$${getbidprice}` : "";
  useEffect(() => {
    fetchData();
    BidFetchData();
    fetchdatereport();
  }, []);

  useEffect(() => {
    if (
      Vehicle_Id &&
      (interiorimage ||
        interiorimagetwo ||
        interiorimagethree ||
        interiorimagefour ||
        exteriorimage ||
        dashboardimage ||
        dashboardimagetwo ||
        dashboardimagethree ||
        dashboardimagefour ||
        rimsimage ||
        rimsimagetwo ||
        rimsimagethree ||
        rimsimagefour)
    ) {
      initializeFlexSlider();
    }
  }, [
    Vehicle_Id,
    interiorimage,
    interiorimagetwo,
    interiorimagethree,
    interiorimagefour,
    exteriorimage,
    dashboardimage,
    rimsimage,
  ]);

  const BidFetchData = async () => {
    const dealerId = sessionStorage.getItem("user_id");
    try {
      const response = await api.get(
        `/dealer/mybidprice/${Vehicle_Id}/${dealerId}`
      );

      setGetBidPrice(response.data.MyBidPrice);
    } catch (error) {
      console.error("Error fetching Bid details:", error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await api.get(`/seller/vehicle/${Vehicle_Id}`);
      const vehicleData = response.data;
      // Log the entire API response
      setSeller(vehicleData.vehicle.Seller_Id);
      setLocation(vehicleData.vehicle.Location || "");
      setHighestBid(vehicleData.HighestBid);
      setVin(vehicleData.vehicle.VIN || "");
      setYear(vehicleData.vehicle.Year || "");
      setMake(vehicleData.vehicle.Make || "");
      setModel(vehicleData.vehicle.Model || "");
      setTrim(vehicleData.vehicle.Trim || "");
      setMileage(vehicleData.vehicle.Mileage || "");
      setColor(vehicleData.vehicle.Color || "");
      setkeys(vehicleData.vehicle.Car_Keys || "");
      setSetTire(vehicleData.vehicle["2_Sets_Of_Tire"] || "");
      setWindowTint(vehicleData.vehicle["Win_Tint"] || "");
      setAftermarketExhaust(vehicleData.vehicle["Aftermark_Exhaust"] || "");
      setAftermarkRims(vehicleData.vehicle["Aftermark_Rims"] || "");
      setRoofRack(vehicleData.vehicle["Roof_Rack"] || "");
      setRemoteStarter(vehicleData.vehicle["Remote_Start"] || "");
      setRemoteStarter(vehicleData.vehicle["Remote_Start"] || "");
      setAftermarkStereo(vehicleData.vehicle["Aftermark_Stereo"] || "");
      setAftermarketSpoiler(vehicleData.vehicle["Aftermark_Spoiler"] || "");
      setMinorDamage(vehicleData.vehicle["Minor_Damage"] || "");
      setInteriorImage(vehicleData.vehicle["Interior_Image"] || "");
      setInteriorImageTwo(vehicleData.vehicle["Interior_Image2"] || "");
      setInteriorImageThree(vehicleData.vehicle["Interior_Image3"] || "");
      setInteriorImageFour(vehicleData.vehicle["Interior_Image4"] || "");
      setExteriorImage(vehicleData.vehicle["Exterior_Image"] || "");
      setExteriorImageTwo(vehicleData.vehicle["Exterior_Image2"] || "");
      setExteriorImageThree(vehicleData.vehicle["Exterior_Image3"] || "");
      setExteriorImageFour(vehicleData.vehicle["Exterior_Image4"] || "");
      setDashboardImage(vehicleData.vehicle["Dashboard_Image"] || "");
      setDashboardImageTwo(vehicleData.vehicle["Dashboard_Image2"] || "");
      setDashboardImageThree(vehicleData.vehicle["Dashboard_Image3"] || "");
      setDashboardImageFour(vehicleData.vehicle["Dashboard_Image4"] || "");
      setRimsImage(vehicleData.vehicle["Rims_Image"] || "");
      setRimsImageTwo(vehicleData.vehicle["Rims_Image2"] || "");
      setRimsImageThree(vehicleData.vehicle["Rims_Image3"] || "");
      setRimsImageFour(vehicleData.vehicle["Rims_Image4"] || "");
      setFadingPaints(vehicleData.vehicle["Fading_Paints"] || "");
      setRust(vehicleData.vehicle["Rust"] || "");
      setHailDamage(vehicleData.vehicle["Hail_Damage"] || "");
      setExtMintCondition(vehicleData.vehicle["Ext_Mint_Condition"] || "");
      setDents(vehicleData.vehicle["Dents"] || "");
      setRipsOrTears(vehicleData.vehicle["Seats_Rips_Tears"] || "");
      setVisibleStain(vehicleData.vehicle["Seats_Visible_Stain"] || "");
      setStrongSmell(vehicleData.vehicle["Strong_Smell"] || "");
      setDamagedSystems(vehicleData.vehicle["Nav_Entmt_Ctrl_Dmg_Sys"] || "");
      setIntMintCondition(vehicleData.vehicle["Int_Mint_Condition"] || "");
      setSmokeInVehicle(vehicleData.vehicle["Smoke_In_Vehicle"] || "No");
      setHasOriginalRims(vehicleData.vehicle["Original_Factory_Rims"] || "No");
      setTireReplacement(vehicleData.vehicle["Tires_Repld_12_Months"] || "No");
      setVehicleDrivable(vehicleData.vehicle["Vehicle_Drivable"] || "No");
      setCrackOnWindshield(vehicleData.vehicle["Windshield_Crack"] || "No");
      setExtendedWarranty(vehicleData.vehicle["Extended_Warranty"] || "No");
      setTradeInInterest(vehicleData.vehicle["TradeIn_Interested"] || "No");
      setHasWinterTires(vehicleData.vehicle["Winter_Tires"] || "No");
      setSellTiming(vehicleData.vehicle["How_Soon_Ready_Sell"]);
      setDonotNeedCar(vehicleData.vehicle["Donot_Need_Car"] || "");
      setMechElectIssues(vehicleData.vehicle["Mech_Elect_Issues"] || "");
      setDownSize(vehicleData.vehicle["Downsize"] || "");
      setBuyAnotherCar(vehicleData.vehicle["Buy_Another_Car"] || "");
      setCarCondition(vehicleData.vehicle["Car_Condition"]);
      setAccidentClaims(vehicleData.vehicle["Accident_Claims"] || "No");
      setHowMuchClaims(vehicleData.vehicle["How_Much_Claims"] || "");
      setCarRims(vehicleData.vehicle["Car_Rims"]);
      setStockRim(vehicleData.vehicle["Stock_Rims"] || "No");
      setIssueVichle(vehicleData.vehicle["Any_Vehicle_Issues"] || "No");
      setIssueVichleDecs(vehicleData.vehicle["Vehicle_Issues_desc"] || "");
      setCarMdify(vehicleData.vehicle["Car_Modification"] || "No");
      setCarMdifyDecs(vehicleData.vehicle["Modification_desc"] || "");
      setFinanced(vehicleData.vehicle["Leased_Financed"] || "No");
      setFinancedDesc(vehicleData.vehicle["Financed_By"] || "");
      setVehicleId(vehicleData.vehicle["Vehicle_Id"]);
      setVechicleVideo(vehicleData.vehicle["Vehicle_video"]);
      if (vehicleData.vehicle["Leased_Financed"] === 1) {
        setFinanced("Yes");
      }
      if (vehicleData.vehicle["Car_Modification"] === 1) {
        setCarMdify("Yes");
      }
      if (vehicleData.vehicle["Any_Vehicle_Issues"] === 1) {
        setIssueVichle("Yes");
      }

      if (vehicleData.vehicle["Stock_Rims"] === 1) {
        setStockRim("Yes");
      }
      if (vehicleData.vehicle["Accident_Claims"] === 1) {
        setAccidentClaims("Yes");
      }
      if (vehicleData.vehicle["Donot_Need_Car"] === 1) {
        setDonotNeedCar("Don’t Need The Car Anymore");
      }
      if (vehicleData.vehicle["Mech_Elect_Issues"] === 1) {
        setMechElectIssues(
          "Selling Because The Car Has Some Mechanical/ Electrical Issues"
        );
      }
      if (vehicleData.vehicle["Downsize"] === 1) {
        setDownSize("Selling To Downsize");
      }
      if (vehicleData.vehicle["Buy_Another_Car"] === 1) {
        setBuyAnotherCar("Selling To Buy Another Car");
      }
      if (vehicleData.vehicle["Winter_Tires"] === 1) {
        setHasWinterTires("Yes");
      }
      if (vehicleData.vehicle["TradeIn_Interested"] === 1) {
        setTradeInInterest("Yes");
      }
      if (vehicleData.vehicle["Extended_Warranty"] === 1) {
        setExtendedWarranty("Yes");
      }
      if (vehicleData.vehicle["Windshield_Crack"] === 1) {
        setCrackOnWindshield("Yes");
      }
      if (vehicleData.vehicle["Vehicle_Drivable"] === 1) {
        setVehicleDrivable("Yes");
      }
      if (vehicleData.vehicle["Tires_Repld_12_Months"] === 1) {
        setTireReplacement("Yes");
      }
      if (vehicleData.vehicle["Original_Factory_Rims"] === 1) {
        setHasOriginalRims("Yes");
      }
      if (vehicleData.vehicle["Original_Factory_Rims"] === 1) {
        setHasOriginalRims("Yes");
      }
      if (vehicleData.vehicle["Smoke_In_Vehicle"] === 1) {
        setSmokeInVehicle("Yes");
      }
      if (vehicleData.vehicle["2_Sets_Of_Tire"] === 1) {
        setSetTire("2 Sets of Tire");
      }
      if (vehicleData.vehicle["Win_Tint"] === 1) {
        setWindowTint("Window Tint");
      }
      if (vehicleData.vehicle["Aftermark_Exhaust"] === 1) {
        setAftermarketExhaust("Aftermarket Exhaust");
      }
      if (vehicleData.vehicle["Aftermark_Rims"] === 1) {
        setAftermarkRims("Aftermarket Rims");
      }
      if (vehicleData.vehicle["Roof_Rack"] === 1) {
        setRoofRack("Roof Rack");
      }
      if (vehicleData.vehicle["Remote_Start"] === 1) {
        setRemoteStarter("Remote Start");
      }
      if (vehicleData.vehicle["Aftermark_Stereo"] === 1) {
        setAftermarkStereo("Aftermarket Stereo");
      }
      if (vehicleData.vehicle["Aftermark_Spoiler"] === 1) {
        setAftermarketSpoiler("Aftermarket Spoiler");
      }
      if (vehicleData.vehicle["Minor_Damage"] === 1) {
        setMinorDamage("Minor Damage");
      }
      if (vehicleData.vehicle["Fading_Paints"] === 1) {
        setFadingPaints("Fading Paints");
      }
      if (vehicleData.vehicle["Rust"] === 1) {
        setRust("Rust");
      }
      if (vehicleData.vehicle["Hail_Damage"] === 1) {
        setHailDamage("Hail Damage");
      }
      if (vehicleData.vehicle["Ext_Mint_Condition"] === 1) {
        setExtMintCondition("Mint Condition");
      }
      if (vehicleData.vehicle["Dents"] === 1) {
        setDents("Dents");
      }
      if (vehicleData.vehicle["Int_Mint_Condition"] === 1) {
        setIntMintCondition("Mint Condition");
      }
      if (vehicleData.vehicle["Nav_Entmt_Ctrl_Dmg_Sys"] === 1) {
        setDamagedSystems("Damaged Systems");
      }
      if (vehicleData.vehicle["Strong_Smell"] === 1) {
        setStrongSmell("Strong Smell");
      }
      if (vehicleData.vehicle["Seats_Visible_Stain"] === 1) {
        setVisibleStain("Visible Stain On The Seats");
      }
      if (vehicleData.vehicle["Seats_Rips_Tears"] === 1) {
        setRipsOrTears("Rips Or Tears On The Seats");
      }
    } catch (error) {
      console.error("Error fetching vehicle details:", error);
    }
  };

  const features = [
    settire,
    windowtint,
    aftermarketexhaust,
    roofrack,
    remotestarter,
    aftermarkstereo,
    aftermarketspoiler,
  ];
  const filteredFeatures = features.filter((feature) => feature);
  const featuresString = filteredFeatures.join(",");

  const featurestwo = [
    minordamage,
    fadingpaints,
    rust,
    haildamage,
    extmintcondition,
    dents,
  ];
  const filteredFeaturestwo = featurestwo.filter((feature) => feature);
  const featuresStringtwo = filteredFeaturestwo.join(",");

  const featuresthree = [
    ripsOrTears,
    visibleStain,
    strongSmell,
    damagedSystems,
    IntmintCondition,
  ];
  const filteredFeaturesthree = featuresthree.filter((feature) => feature);
  const featuresStringthree = filteredFeaturesthree.join(",");
  const initializeFlexSlider = () => {
    window.$(".flexslider").flexslider({
      animation: "slide",
      controlNav: "thumbnails",
      start: function (slider) {
        window.$("body").removeClass("loading");
      },
    });
  };
  const handleClick = () => {
    // Extract the vehicle ID from the URL
    const url = window.location.href;
    const urlParts = url.split("/");
    const vehicleId = urlParts[urlParts.length - 1]; // Assuming vehicle ID is the last part of the URL

    // Store the vehicle ID in session storage
    sessionStorage.setItem("Vehicle_Id", vehicleId);

    // Log the session value
    const sessionValue = sessionStorage.getItem("Vehicle_Id");
  };
  const handleBidPriceChange = (e) => {
    let value = e.target.value;

    // Remove non-numeric characters except '.'
    value = value.replace(/[^\d.]/g, "");

    // Format the number to include commas
    const parts = value.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Join the parts back together
    const formattedValue = `$${parts.join(".")}`;

    // Update the state with the new formatted value
    setBidPrice(formattedValue);
  };
  const handleSaveBid = async () => {
    if (!bidPrice || bidPrice === "$") {
      alert("Please enter a bid price");
      return;
    }

    const numericalBidPrice = bidPrice.replace(/\$|,/g, "");
    try {
      setLoading(true); // Set loading to true before making the request
      const dealerId = sessionStorage.getItem("user_id");
      const response = await api.post("/dealer/dealerbidprice", {
        Bid_Amount: numericalBidPrice,
        Dealer_Id: dealerId,
        Vehicle_Id: vechicleid,
      });

      if (response.data && response.data.message) {
        setResponseMessage(response.data.message); // Set the response message if available
      } else {
        setResponseMessage("Bid price saved successfully");
      }

      setLoading(false); // Set loading to false after the request completes
    } catch (error) {
      console.error("Error saving bid price:", error);
      setLoading(false); // Set loading to false if there's an error
    }
  };
  const fetchdatereport = async () => {
    try {
      const response = await api.get(
        `/agent/getinspectionreport/${Vehicle_Id}`
      );
      const datareport = response.data;
      setAppeport(datareport.vehicleInspectionReport.Inspection_Report);
    } catch (error) {
      // Handle error
      console.error("Error fetching inspection report:", error);
    }
  };
  const formatWithCommas = (value) => {
    // Convert the value to a float, format it with commas, and prepend the dollar sign
    if (isNaN(value) || value === null || value === undefined) {
      return "$0.00";
    }
    return `$${parseFloat(value).toLocaleString()}`;
  };
  return (
    <section class="car-details">
      <SellerNav />
      <div class="container mt-5">
        {responseMessage && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <p class="text-success">{responseMessage}</p>
            <button
              type="button"
              className="close"
              onClick={() => setResponseMessage("")}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        <div class="top-bid-price pt-3">
          <h4>Top Bid Price:</h4>
          <h6 className="pl-3">{formatWithCommas(highestbid)}</h6>
        </div>
        <div class="inspection-report-view  pb-2">
          <h4>
            {" "}
            <a data-toggle="modal" data-target=".bd-example-modal-lg11">
             Inspection Report:
            </a>
          </h4>
          <h6 class="pl-3">{appreport}</h6>
        </div>
        <form className="form-price-bid">
          <div className="form-bid-price">
            <div className="form-group">
              <label htmlFor="bidPriceTextarea">My Bid Price</label>
              <textarea
                className="form-control"
                id="bidPriceTextarea"
                rows="1"
                value={bidPrice}
                defaultValue={getbidprice}
                onChange={handleBidPriceChange}
              />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSaveBid}
          >
            Save
          </button>
        </form>
        <div class="row py-3">
          <div class="col-md-6">
            <div class="car-list-image">
              <div class="flexslider">
                <ul className="slides">
                  {interiorimage && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimage}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimage}`}
                        alt="Interior"
                      />
                    </li>
                  )}
                  {interiorimagetwo && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimagetwo}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimagetwo}`}
                        alt="Interior"
                      />
                    </li>
                  )}
                  {interiorimagethree && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimagethree}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimagethree}`}
                        alt="Interior"
                      />
                    </li>
                  )}
                  {interiorimagefour && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimagefour}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimagefour}`}
                        alt="Interior"
                      />
                    </li>
                  )}
                  {exteriorimage && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimage}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimage}`}
                        alt="Exterior"
                      />
                    </li>
                  )}
                  {exteriorimagetwo && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimagetwo}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimagetwo}`}
                        alt="Exterior"
                      />
                    </li>
                  )}
                  {exteriorimagethree && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimagethree}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimagethree}`}
                        alt="Exterior"
                      />
                    </li>
                  )}
                  {exteriorimagefour && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimagefour}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimagefour}`}
                        alt="Exterior"
                      />
                    </li>
                  )}
                  {dashboardimage && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimage}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimage}`}
                        alt="Dashboard"
                      />
                    </li>
                  )}
                  {dashboardimagetwo && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimagetwo}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimagetwo}`}
                        alt="Dashboard"
                      />
                    </li>
                  )}
                  {dashboardimagethree && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimagethree}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimagethree}`}
                        alt="Dashboard"
                      />
                    </li>
                  )}
                  {dashboardimagefour && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimagefour}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimagefour}`}
                        alt="Dashboard"
                      />
                    </li>
                  )}
                  {rimsimage && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimage}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimage}`}
                        alt="Rims"
                      />
                    </li>
                  )}
                  {rimsimagetwo && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimagetwo}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimagetwo}`}
                        alt="Rims"
                      />
                    </li>
                  )}
                  {rimsimagethree && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimagethree}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimagethree}`}
                        alt="Rims"
                      />
                    </li>
                  )}
                  {rimsimagefour && (
                    <li
                      data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimagefour}`}
                    >
                      <img
                        src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimagefour}`}
                        alt="Rims"
                      />
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div id="vechiclevideo">
              <h2>Vehicle Video</h2>
              {/* Check if vechiclevideo is not empty */}
              {vechiclevideo ? (
                // If vechiclevideo is not empty, render the iframe

                <iframe
                  width="560"
                  height="315"
                  src={vechiclevideo}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                // If vechiclevideo is empty, render a message
                <p>No vehicle video</p>
              )}
            </div>
          </div>
          <div class="col-md-6">
            <div class="carlist-details">
              <div class="carlist-heading">
                <h4 class="location-heading p-0 m-0">location : </h4>
                <span class="inner-listname">{location}</span>
              </div>

              <div class="carlist-heading">
                <h4 class="vinenumber-heading p-0 m-0">vin number : </h4>
                <span class="inner-vinenumber">{vin}</span>
              </div>
              <div class="carlist-heading">
                <h4 class="year-heading p-0 m-0">Year :</h4>
                <span class="inner-year">{year}</span>
              </div>
              <div class="carlist-heading">
                <h4 class="model-heading p-0 m-0">Make :</h4>
                <span class="inner-model">{make}</span>
              </div>
              <div class="carlist-heading">
                <h4 class="model-heading p-0 m-0">model :</h4>
                <span class="inner-model">{model}</span>
              </div>
              <div class="carlist-heading">
                <h4 class="trim-heading p-0 m-0">trim : </h4>
                <span class="inner-trim">{trim}</span>
              </div>
              <div class="carlist-heading">
                <h4 class="Mileage:-heading p-0 m-0">Mileage : </h4>
                <span class="inner-Mileage:">{mileage}</span>
              </div>
              <div class="carlist-heading">
                <h4 class="Color-heading p-0 m-0">Color : </h4>
                <span class="inner-Color">{color}</span>
              </div>
              <div class="carlist-heading">
                <h4 class="Keys:-heading p-0 m-0">Keys : </h4>
                <span class="inner-Keys">{keys}</span>
              </div>
              <span>{featuresString}</span>
            </div>
            <div class="external-damage-panel pt-3">
              <h4 class="p-0 m-0">external damage to the vehicle.</h4>
              <span>{featuresStringtwo}</span>
              <h4 class="p-0 m-0">Any interior damage?</h4>
              <span>{featuresStringthree}</span>
              <div class="vehicle-detail">
                <h4 class="p-0 m-0">Our top priority is to sell your car.</h4>
                <div class="row">
                  <div class="col-md-9">
                    <span>Do you smoke in this vehicle?</span>
                  </div>
                  <div class="col-md-3">
                    <h5>{smokeInVehicle}</h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                    <span>Do you have original factory rims?</span>
                  </div>
                  <div class="col-md-3">
                    <h5>{hasOriginalRims}</h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                    <span>Have you replaced your tires in last 12 months?</span>
                  </div>
                  <div class="col-md-3">
                    <h5>{tireReplacement}</h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                    <span>Is your car driveable?</span>
                  </div>
                  <div class="col-md-3">
                    <h5>{vehicleDrivable}</h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                    <span>Any crack on the windshield?</span>
                  </div>
                  <div class="col-md-3">
                    <h5>{crackOnWindshield}</h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                    <span>Do you have any extended warranty?</span>
                  </div>
                  <div class="col-md-3">
                    <h5>{extendedWarranty}</h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                    <span>Are you interested in a trade In?</span>
                  </div>
                  <div class="col-md-3">
                    <h5>{tradeInInterest}</h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                    <span>How soon are you ready to sell?</span>
                  </div>
                  <div class="col-md-3">
                    <h5>{sellTiming}</h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                    <span>Why are you selling?</span>
                  </div>
                  <div class="col-md-3">
                    <h5>{DonotNeedCar}</h5>
                    <h5>{MechElectIssues}</h5>
                    <h5>{DownSize}</h5>
                    <h5>{BuyAnotherCar}</h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                    <span>Any Accident Claims? How Much?</span>
                  </div>
                  <div class="col-md-3">
                    <h5>{accidentclaims}</h5>
                  </div>
                  <div class="col-12">
                    <h6>{howmuchclaims}</h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                    <span>What Rims Are On The Car?</span>
                  </div>
                  <div class="col-md-3">
                    <h5>{carrims}</h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                    <span>Do You Have Stock Rims?</span>
                  </div>
                  <div class="col-md-3">
                    <h5>{stockrim}</h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                    <span>Any Issues With The Vehicle?</span>
                  </div>
                  <div class="col-md-3">
                    <h5>{issuevichle} </h5>
                  </div>
                  <div class="col-12">
                    <h6>{issuevichledecs}</h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                    <span>Are There Any Modifications On The Car?</span>
                  </div>
                  <div class="col-md-3">
                    <h5>{carmodify}</h5>
                  </div>
                  <div class="col-12">
                    <h6>{carmodifydecs}</h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                    <span>Is The Car Leased Or Financed?</span>
                  </div>
                  <div class="col-md-3">
                    <h5>{financed}</h5>
                  </div>
                  <div class="col-12">
                    <h6>{financeddesc}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade bd-example-modal-lg11 newcar-modal show"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h4 class="car-detail-heading-modal">Inspection Report</h4>
              <p>{appreport}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
