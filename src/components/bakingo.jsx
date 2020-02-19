import React, { Component } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
class BakingoComponent extends Component {
    state = {}
    render() {
        return (
            <div className="bakingo">
                <div className="main-content">
                    <div className="icon">
                        <div className="arrow">
                            <ArrowBackIosIcon style={{ width: '14px' }} />
                        </div>
                        <div className="giftCard">
                            <CardGiftcardIcon style={{ width: '14px' }} />
                        </div>
                    </div>

                    {/* * --------image design------------  */}

                    <div className="image">
                        <img src="https://d2m1a7vdhhb67a.cloudfront.net/sites/default/files/styles/product_image/public/raksha-bandhan-photo-cake-1-phot821flav-B.jpg?itok=TtPP-7vm" alt="" className="imageSize" />
                    </div>

                    {/* * --------rating design------------  */}

                    <div className="choko-rate">
                        <div className="love-rakhi">
                            Choco Love Rakhi
                        </div>
                        <div className="rating-star">
                            <div className="star">
                                4.5
                                <img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="rate-starImage" />
                            </div>
                            <div className="rating">
                                49Rating

        </div>
                        </div>
                    </div>
                    <div className="cake">
                        Cake
                            </div>
                    <div className="choco-vanilla">
                        Choco vanilla round photo delicious cake 1
                            </div>

                    <div className="price-percent">
                        <div className="price">
                            Rs. 699
    </div>
                        {/* <div className="price-cross">
                            Rs. 899
                        </div> */}
                        <div className="percent">
                            (15% off)
    </div>

                    </div>

                    {/* * --------select weight design------------  */}

                    <div className="underline"></div>
                    <div className="select-weight">
                        Select Weight
                    </div>
                </div>

            </div>

        );
    }
}

export default BakingoComponent;
