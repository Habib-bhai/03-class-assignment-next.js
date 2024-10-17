import React from 'react';
import footer_logo from '../assets/logo-removebg-preview.png';
import instagram_icon from '../assets/instagram_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';
import facebook_icon from '../assets/facebook-icon.jpg';
import Image from 'next/image';


const Footer = () => {
    return (
        <>
        
        
        <div className='footer p-6 bg-geen-800 text-blue-900 bg-gradient-to-r from-blue-400 via-green-700 to-blue-700 '>
            <div className="">
                <Image src={footer_logo} alt='Footer Logo' width={500} height={500} className="py-2 mx-auto md-2 " />
                {/* <p className="font-bold text-3xl text-center p-3 m-9">SAFE HOME CHEMICALS</p> */}
            </div>

            <ul className='footer-links flex gap-6 mb-4'>
                <li>Company</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>

            <div className="footer-social-icon flex gap-4 mb-4">
                <div className="footer-icons-container">
                    <Image src={instagram_icon} alt='Instagram' width={24} height={24} />
                </div>
                <div className="footer-icons-container">
                    <Image src={whatsapp_icon} alt='WhatsApp' width={24} height={24} />
                </div>
                <div className="footer-icons-container">
                    <Image src={facebook_icon} alt='Facebook' width={24} height={24} />
                </div>
            </div>

            <div className="footer-copyright">
                <hr className="my-4" />
                <p>Created by Yousra Khan-All Rights Reserved.2024</p>
            </div>
        </div>
        </>
    );
}

export default Footer;
