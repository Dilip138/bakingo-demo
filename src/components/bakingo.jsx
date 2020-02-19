import React, { Component } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
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
                        <div className="percent-0f">
                            (15% off)
                        </div>

                    </div>

                    {/* * --------select weight design------------  */}

                    <div className="underline"></div>
                    <div className="select-weight">
                        Select Weight
                    </div>
                    <ul className="cake-weight" type="none">
                        <li className="weight-normal">0.5 kg</li>
                        <li className="weightBlack">1 kg</li>
                        <li className="weight-normal">1.5 kg</li>
                        <li className="weight-normal">2 kg</li>
                        <li className="weight-normal">5 kg</li>
                    </ul>

                    {/* * --------select flavour design------------  */}

                    <div className="select-flavour">
                        Select Flavour*
                    </div>
                    <div className="vanilla-icon">
                        <div className="vanilla">
                            Vanilla
                        </div>
                        <div className="iconBottom">
                            <KeyboardArrowDownIcon />
                        </div>
                    </div>

                    {/* * --------select flavour design------------  */}

                    <div className="uploadImages">
                        Upload Images*
                    </div>
                    <div className="photo-mb">
                        <div className="degree-mb">
                            <div className="percent">
                                42%
                            </div>
                            <div className="mb">
                                1.2Mb/4.2Mb
                            </div>
                        </div>
                        <div className="change-photo">
                            Change Photo
                        </div>
                    </div>
                    <div className="file-size">
                        File size (100KB to 10MB) ) Only JPG or PNG
                    </div>

                    {/* * --------message on cake design------------  */}

                    <div className="message">
                        Message
                    </div>
                    <div className="message-cake">
                        Enter message on cake
                    </div>

                    {/* * --------cake description design------------  */}

                    <div className="cake-description"></div>


                </div>

            </div>

        );
    }
}

export default BakingoComponent;
