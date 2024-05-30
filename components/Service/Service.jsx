import React from 'react';
import Image from 'next/image';


import Style from './Service.module.css';
import images from '../../img';

const Service = () => {
  return (
    <div className={Style.service}>
        <div className={Style.service_box}>
            <div className={Style.service_box_item}>
                <Image 
                src={images.service1} 
                alt='Filter' 
                width={100} 
                height={100}
                />
                <p className={Style.service_box_item_step}>
                    <span>Step 1</span>
                </p>
                <h3>Filter and Discover</h3>
                <p>Welcome to our NFT marketplace, where digital creators and collectors unite. Our platform offers a unique space for buying and selling one-of-a-kind digital assets securely and efficiently.</p>
            </div>

            <div className={Style.service_box_item}>
                <Image 
                src={images.service2} 
                alt='Connect Your Wallet' 
                width={100} 
                height={100}
                />
                <p className={Style.service_box_item_step}>
                    <span>Step 2</span>
                </p>
                <h3>Connect Your Wallet</h3>
                <p>Let me take you on a quick tour of our marketplace. Here, users can easily browse through various categories of NFTs, explore detailed listings, and seamlessly complete transactionsfor your convienince.</p>
            </div>

            <div className={Style.service_box_item}>
                <Image 
                src={images.service3} 
                alt='Testimonials' 
                width={100} 
                height={100}
                />
                <p className={Style.service_box_item_step}>
                    <span>Step 3</span>
                </p>
                <h3>Testimonials</h3>
                <p>But don't just take our word for it. Hear what our users have to say about their experiences and their interest in the NFT. From artists finding new audiences to collectors discovering rare gems in form of NFTs.</p>
            </div>

            <div className={Style.service_box_item}>
                <Image 
                src={images.service4} 
                alt='Community Engagement' 
                width={100} 
                height={100}
                />
                <p className={Style.service_box_item_step}>
                    <span>Step 4</span>
                </p>
                <h3>Community Engagement</h3>
                <p>We foster a vibrant community around our marketplace, offering forums, social media channels, and events where users can connect, share insights, and stay updated on the latest trends.</p>
            </div>


        </div>
    </div>
  );
};

export default Service