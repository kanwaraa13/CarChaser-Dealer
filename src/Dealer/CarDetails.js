import React, { useEffect } from 'react';
import { SellerNav } from './DealerNav';
export const CarDetails = () => {
    useEffect(() => {
        const initializeFlexSlider = () => {
          window.$('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            start: function(slider) {
              window.$('body').removeClass('loading');
            }
          });
        };
    
        if (window.$('.flexslider').length) {
          initializeFlexSlider();
        }
      }, []);

  return (
    <section class="car-details">
    <SellerNav />
    <div class="container">
            <div class="top-bid-price pt-5">
               <h4>Top Bid Price:</h4>
               <h6 class="pl-3">$2000</h6>
            </div>
            <div class="inspection-report-view  pb-2">
               <h4>Inspector Report:</h4>
               <h6 class="pl-3">Lorem Ipsum Dolor Sit Amet, Consectetur.</h6>
            </div>
               <form class="form-price-bid">
                  <div class="form-bid-price">
                        <div class="form-group">
                              <label for="exampleFormControlTextarea1">My Bid Price</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                         </div>
                     </div>
                     <a href="#" class="btn btn-primary">Save</a>
               </form>
            <div class="row py-3 mb-4">
                        <div class="col-md-6">
                           <div class="car-list-image">
                               <div class="flexslider">
                                 <ul class="slides">
                                    <li data-thumb="../images/new-car.png">
                                      <img src="../images/new-car.png" />
                                    </li>
                                    <li data-thumb="../images/pexels-mike.jpg">
                                      <img src="../images/pexels-mike.jpg" />
                                    </li>
                                    <li data-thumb="../images/third-view.png">
                                      <img src="../images/third-view.png" />
                                    </li>
                                    <li data-thumb="../images/four-view.png">
                                      <img src="../images/four-view.png" />
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6">
                           <div class="carlist-details">
                              <div class="carlist-heading">
                                 <h4 class="location-heading p-0 m-0">location :  </h4>
                                 <span class="inner-listname">California</span>
                              </div>
                              <div class="carlist-heading">
                                 <h4 class="vinenumber-heading p-0 m-0">vin number : </h4>
                                 <span class="inner-vinenumber">234</span>
                              </div>
                              <div class="carlist-heading">
                                 <h4 class="year-heading p-0 m-0">Year :</h4>
                                 <span class="inner-year">2018</span>
                              </div>
                              <div class="carlist-heading">
                                 <h4 class="model-heading p-0 m-0">model :</h4>
                                 <span class="inner-model">Audi A4</span>
                              </div>
                              <div class="carlist-heading">
                                 <h4 class="trim-heading p-0 m-0">trim : </h4>
                                 <span class="inner-trim">4WD</span>
                              </div>
                              <div class="carlist-heading">
                                 <h4 class="Mileage:-heading p-0 m-0">Mileage : </h4>
                                 <span class="inner-Mileage:">1900</span>
                              </div>
                              <div class="carlist-heading">
                                 <h4 class="Color-heading p-0 m-0">Color : </h4>
                                 <span class="inner-Color">White</span>
                              </div>
                              <div class="carlist-heading">
                                 <h4 class="Keys:-heading p-0 m-0">Keys : </h4>
                                 <span class="inner-Keys">2</span>
                              </div>
                              <span>2 sets of tire, Remote starter, Roof rack</span>                
                           </div>
                           <div class="external-damage-panel pt-3">
                              <h4 class="p-0 m-0">external damage to the vehicle.</h4>
                              <span>Dents, Paint Chips</span>
                              <div class="vehicle-detail">
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Do you have any extended warranty?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>Yes</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Do you have original factory rims?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>Yes</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Have you changed your tires in the last 12 month?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>Yes</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Do you have winter tires?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>Yes</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Is your car driveable?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>No</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Are you interested in a trade In?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>Yes</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>How soon are you ready to sell?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>Immediately</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Why are you selling?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>selling to downsize</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>describe the condition of the car</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>good</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Any issues with the vehicle?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>no</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Is the car leased or financed?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>no</h5>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                        </div>
                     </div>
                     
                  </div>
          </section>
  );
};
