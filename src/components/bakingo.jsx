import React, { Component } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUpOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import CopyrightIcon from '@material-ui/icons/Copyright';
import description from '../components/description.json';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

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
                        <img src="https://d2m1a7vdhhb67a.cloudfront.net/sites/default/files/styles/product_image/public/raksha-bandhan-photo-cake-1-phot821flav-A.jpg?itok=_1jcr30s" alt="" className="imageSize" />
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
                                49 Ratings
                                <div className="border-width"></div>
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
                        <div className="price-cross">
                            <div className="price-discount">
                                Rs. 899
                            </div>
                            <div className="cross-big"></div>
                        </div>
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

                    {/* * --------upload image design------------  */}

                    <div className="uploadImages">
                        Upload Images*
                    </div>
                    <div className="photo-mb">
                        <div className="change-photo-degree">
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

                    <div className="cake-description">
                        Cake Description
                    </div>
                    <div className="content">
                        When a touch of personalised love is added to your sweet tooth pleasure,
                        everything seems perfect. Every bite of this lip-smacking photo cake will act as a sweet reminder of the love shared by you both.
                        Order this cake to give your Rakhi festivities a dash of extra goodness!
                    </div>
                    <div className="sku">
                        SKU:phot821flav
                    </div>

                    {/* * --------available city design------------  */}

                    <div className="availale-city">
                        Available in limited cities
                    </div>

                    <div className="deliver-city">
                        <div className="deliver">
                            We deliver in
                        </div>
                        <div className="city">
                            Bangalore,Delhi,Gurgaon,
                        </div>
                    </div>
                    <div className="orCity">
                        Ghaziabad,Noida and Hyderabad
                    </div>

                    {/* * --------payment smile and like design------------  */}

                    <div className="image-protection">
                        <div className="image-icon">
                            <img src={require('../assests/money.png')} alt="" className="money" />
                        </div>
                        <div className="payment-protection">
                            <div className="percent-payment">
                                <div className="percent-hundred">
                                    100%
                        </div>
                                <div className="payment">
                                    Payment
                        </div>
                            </div>
                            <div className="protection">
                                Potection
                        </div>
                        </div>
                    </div>

                    <div className="image-delivered">
                        <div className="image-icon">
                            <PeopleIcon className="people" />
                        </div>
                        <div className="payment-protection">
                            <div className="percent-payment">
                                <div className="percent-hundred">
                                    2 Million
                        </div>
                                <div className="payment">
                                    Smiles
                        </div>
                            </div>
                            <div className="protection">
                                Delivered
                        </div>
                        </div>
                    </div>

                    <div className="image-delivery">
                        <div className="image-icon">
                            <ThumbUpIcon className="thumb" />
                        </div>
                        <div className="payment-protection">
                            <div className="percent-payment">
                                <div className="percent-hundred">
                                    100%
                        </div>
                                <div className="payment">
                                    On Time
                        </div>
                            </div>
                            <div className="protection">
                                Delivery
                        </div>
                        </div>
                    </div>

                    {/* * --------cake image Design design------------  */}

                    <div className="also-like">
                        You may also like
                    </div>
                    <div className="cake-price">
                        <div className="toothsome-cordial">
                            <div className="toothsome-price">
                                <div className="cake-image">
                                    <img src={require('../assests/cake1.png')} alt="" className="cake-blackForest" />
                                </div>
                                <div className="cake-name">
                                    Toothsome Rakhi
                        </div>
                                <div className="cakeSmall">
                                    Cake
                        </div>
                                <div className="price-priceCross">
                                    <div className="price-small">
                                        Rs. 699
                                </div>
                                    <div className="price-cross">
                                        <div className="priceDiscount">
                                            Rs. 950
                            </div>
                                        <div className="cross"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="cordial-price">
                                <div className="cake-image">
                                    <img src={require('../assests/cake2.png')} alt="" className="cake-image-size" />
                                </div>
                                <div className="cake-name">
                                    Cordial Bond Rakhi
                        </div>
                                <div className="cakeSmall">
                                    Cake
                        </div>
                                <div className="price-priceCross">
                                    <div className="price-small">
                                        Rs. 699
                                </div>
                                    <div className="price-cross">
                                        <div className="priceDiscount">
                                            Rs. 950
                            </div>
                                        <div className="cross"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="toothsome-cordial">
                            <div className="toothsome-price">
                                <div className="cake-image">
                                    <img src={require('../assests/cake3.png')} alt="" className="cake-whiteForest" />
                                </div>
                                <div className="cake-name">
                                    Toothsome Rakhi
                        </div>
                                <div className="cakeSmall">
                                    Cake
                        </div>
                                <div className="price-priceCross">
                                    <div className="price-small">
                                        Rs. 699
                                </div>
                                    <div className="price-cross">
                                        <div className="priceDiscount">
                                            Rs. 950
                            </div>
                                        <div className="cross"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="cordial-price">
                                <div className="cake-image">
                                    <img src={require('../assests/cake4.png')} alt="" className="cake-image-size" />
                                </div>
                                <div className="cake-name">
                                    Cordial Bond Rakhi
                        </div>
                                <div className="cakeSmall">
                                    Cake
                        </div>
                                <div className="price-priceCross">
                                    <div className="price-small">
                                        Rs. 699
                                </div>
                                    <div className="price-cross">
                                        <div className="priceDiscount">
                                            Rs. 950
                            </div>
                                        <div className="cross"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* * --------see more Design design------------  */}

                    <div className="see-more">
                        <h4 className="see-more-box">See More</h4>
                    </div>

                    {/* * --------all review and rating design------------  */}

                    <div className="rating-review">
                        <h2 className="rating-review-header">all reviews and ratings(271)</h2>
                    </div>
                    <div className="five-star">
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <div className="ratings">4.9</div>
                    </div>
                    <div className="basedOn-review">
                        <div className="basedOn">
                            Based On 2000+
                        </div>
                        <div className="reviews-rating">
                            Reviews And Rating
                        </div>
                    </div>

                    <div className="five-star">
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <div className="ratings">4.5</div>
                    </div>
                    <div className="zomato">
                        <h2 className="zomto-size">Zomato</h2>
                    </div>

                    <div className="five-star">
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <div className="ratings">4.5</div>
                    </div>
                    <div className="google">
                        <img src={require('../assests/google.png')} alt="" className="google-image" />
                    </div>

                    <div className="five-star">
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <span ><img src="https://www.floweraura.com/sites/default/files/ssr/static/media/fill_star.76f5a90e.svg" alt="" className="fill-star" /></span>
                        <div className="ratings">4.5</div>
                    </div>
                    <div className="facebook">
                        <img src={require('../assests/facebook.png')} alt="" className="facebook-image" />
                    </div>

                    {/* * --------review,rating and description design------------  */}

                    <div className="all-description">
                        {description.descriptionRating.map(data => {
                            return (
                                <div className="description-rating">
                                    <div className="description-name">
                                        <div className="rating-date">
                                            <div className="rating-star">
                                                <span> <img src={data.image} alt="" className="star-fill" /> </span>
                                                <span> <img src={data.image} alt="" className="star-fill" /> </span>
                                                <span> <img src={data.image} alt="" className="star-fill" /> </span>
                                                <span> <img src={data.image} alt="" className="star-fill" /> </span>
                                                <span> <img src={data.image} alt="" className="star-fill" /> </span>
                                                <div className="rating-number">5/5</div>
                                            </div>
                                            <div className="date">19/04/19</div>
                                        </div>
                                        <div className="title">{data.title}</div>
                                        <div className="description">{data.description}</div>
                                        <div className="name">{data.name}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* * --------all quick links cake type design------------  */}

                    <div className="quick-links-cities">
                        <div className="Quick-links">Quick links</div>
                        <div className="all-cake-type">
                            <div className="cake-top-cities">Cakes top cities</div>
                            <div className="city-first">
                                <div className="delhi">Delhi</div>
                                <div className="boder"></div>
                                <div className="chennai">Chennai</div>
                                <div className="boder"></div>
                                <div className="mumbai">Mumbai</div>
                                <div className="boder"></div>
                                <div className="hyderabad">Hyderabad</div>
                            </div>
                            <div className="city-first">
                                <div className="delhi">Noida</div>
                                <div className="boder"></div>
                                <div className="chennai">Banglore</div>
                                <div className="boder"></div>
                                <div className="mumbai">Gurgaon</div>
                                <div className="boder"></div>
                                <div className="hyderabad">Pune</div>
                            </div>

                            <div className="cake-by-type">Cakes by type</div>
                            <div className="city-first">
                                <div className="delhi">All Cakes</div>
                                <div className="boder"></div>
                                <div className="chennai">Photo Cakes</div>
                                <div className="boder"></div>
                                <div className="mumbai">Jar Cakes</div>
                            </div>
                            <div className="city-first">
                                <div className="delhi">Pastery</div>
                                <div className="boder"></div>
                                <div className="chennai">Midnight Cakes</div>
                                <div className="boder"></div>
                                <div className="mumbai">Party cakes</div>
                            </div>

                            <div className="cake-by-type">Cakes Flavours</div>
                            <div className="city-first">
                                <div className="delhi">Fruit</div>
                                <div className="boder"></div>
                                <div className="chennai">Chocolate</div>
                                <div className="boder"></div>
                                <div className="mumbai">Strawberry</div>
                                <div className="boder"></div>
                                <div className="hyderabad">Coffee</div>
                            </div>
                            <div className="city-first">
                                <div className="delhi">Vanilla</div>
                                <div className="boder"></div>
                                <div className="chennai">Pineapple</div>
                                <div className="boder"></div>
                                <div className="mumbai">Red Valvet</div>
                                <div className="boder"></div>
                                <div className="hyderabad">Mango</div>
                            </div>

                            <div className="cake-by-type">Ocassion Special</div>
                            <div className="city-first">
                                <div className="delhi">Anniversery</div>
                                <div className="boder"></div>
                                <div className="chennai">Birtday</div>
                                <div className="boder"></div>
                                <div className="mumbai">Father's Day</div>
                            </div>
                            <div className="city-first">
                                <div className="delhi">Mother's Day</div>
                                <div className="boder"></div>
                                <div className="chennai">Teacher's Day</div>
                                <div className="boder"></div>
                                <div className="mumbai">Rakhi</div>
                            </div>
                            <div className="city-first">
                                <div className="delhi">Friendship Day</div>
                                <div className="boder"></div>
                                <div className="chennai">Valentines Day</div>
                            </div>
                        </div>
                    </div>

                    {/* * --------footer bakingo design------------  */}

                    <div className="footer-description">
                        {/* <img src={require('../assests/footer.png')} alt="" className="footer-image" /> */}
                        <div className="bakingo-footer">
                            <img src={require('../assests/bakingo.png')} alt="" className="bakingo-image" />
                            <div className="c-2019">
                                <CopyrightIcon style={{ width: '14px' }} />
                                <div className="year">2019</div>
                            </div>
                            <div className="knowUs-needHelp">
                                <div className="knowUs-description">
                                    <div className="know-us">Know Us</div>
                                    <div className="description-bottom">
                                        <div className="our-story">Our Story</div>
                                        <div className="contact-us">Contact Us</div>
                                        <div className="lacate-us">Locate Us</div>
                                        <div className="blog">Blog</div>
                                    </div>
                                </div>
                                <div className="needHelp-description">
                                    <div className="Need-Help">Need Help</div>
                                    <div className="description-bottom">
                                        <div className="blog">FAQ</div>
                                        <div className="blog">cancellation And Refund</div>
                                        <div className="blog">Privacy Policy</div>
                                        <div className="blog">Terms And Conditions</div>
                                        <div className="blog">Track-Order</div>
                                        <div className="blog">Sitemap</div>
                                    </div>
                                </div>
                            </div>
                            <div className="more-info">More Info</div>
                            <div className="customised-cakes">Customised Cakes</div>
                            <div className="Corporate-cakes">Corporate cakes</div>
                            <div className="Corporate-cakes">Coupons & Offers</div>
                            <div className="find-us">Find Us</div>
                            <div className="all-logos">
                                <h2 className="fIcon">f</h2>
                                <TwitterIcon className="logo" style={{ width: '28px', height: '28px' }} />
                                <InstagramIcon className="logo" style={{ width: '26px', height: '26px' }} />
                                <img src={require('../assests/prentest.png')} alt="" className="logo" />
                            </div>
                            <div className="subscribe-newsletter">Subscribe Our Newsletter</div>
                            <div className="email-address">Enter email address</div>
                            <div className="subscribe">Subscribe</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default BakingoComponent;
