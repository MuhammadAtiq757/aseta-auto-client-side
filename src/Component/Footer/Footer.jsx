import React from 'react';
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaRegAddressCard, FaMailBulk } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";
import logo from "/Asseta.png"
// import logo2 from '../../../src/assets/images/logo/logo.png'
import moment from 'moment/moment';
import { Link } from 'react-router-dom';


const Footer = () => {
    const currentyear = moment().format('YYYY');
    return (
        <footer className=''>
            <div className="w-full bg-[#111]">
                <div className="flex flex-wrap justify-between space-y-10 px-4 xl:px-[140px] 2xl:px-[240px] mb-4">
                    <div className="footer-col quick-section w-1/4 mt-9">
                        <img className='w-40 h-40 -mt-12 ' src={logo} alt="" />
                        <p className='-mt-10 mb-3 text-white'>We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable. </p>
                        <div className='text-white'>
                            <p className='py-2 about-us-paragraph'><a href=""><FaPhone className='about-us-icons '></FaPhone> +2 123 654 7898</a></p>
                            <p className='py-2 about-us-paragraph'><FaRegAddressCard className='about-us-icons '></FaRegAddressCard> 25/B Milford Road, New York</p>
                            <p className='py-2 about-us-paragraph'><a href=""><FaMailBulk className='about-us-icons '></FaMailBulk> info@example.com</a></p>
                        </div>
                    </div>
                    <div className="footer-col quick-section ">
                        <h1>Quick Links</h1>
                        <ul>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow> About Us</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow> Update News</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Testimonials</a></li>
                            <Link to='/termsofservice'><li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Terms Of Service</a></li></Link>
                            <Link to='/privacy'> <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Privacy policy</a></li></Link>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Our Dealers</a></li>
                        </ul>
                    </div>
                    <div className="footer-col quick-section">
                        <h1>Support Center</h1>
                        <ul>
                            <Link to='/faq'><li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>FAQ s</a></li></Link>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Affiliates</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Booking Tips</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Sell Vehicles</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Contact Us</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>   Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="footer-col quick-section  text-white">
                        <h1>Newsletter</h1>
                        <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                        <form action="" className='mt-7'>
                            <input type="email" name="email" id="" placeholder='Your Email' className='email-field rounded-lg ' />
                            <button type='submit' className="subscribe-button mt-10 bg-[#ef1721] hover:bg-white duration-500 rounded-lg ">Subcribe Now<BsFillSendFill className='ml-2'></BsFillSendFill></button>
                        </form>
                    </div>
                </div>
                {/* <hr /> */}
                <div className="footer-bottom  bg-[#ef1721]">
                    <div className="copyright text-white">
                        <p>© Copyright {currentyear}  <span className='text-[#111]'> ASETTA AUTO'S </span>  All Rights Reserved. </p>
                    </div>
                    <div className="sociallink">
                        <a href="https://www.facebook.com">
                            <FaFacebook className='icons'></FaFacebook>
                        </a>
                        <a href="https://www.twitter.com">
                            <FaTwitter className='icons'></FaTwitter>
                        </a>
                        <a href="https://www.instagram.com">
                            <FaInstagram className='icons'></FaInstagram>
                        </a>
                        <a href="https://www.youtube.com">
                            <FaYoutube className='icons'></FaYoutube>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;