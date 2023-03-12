import React from 'react';
import { HeroBGStyle, HeroStyle } from './styled';
import herobg from '../../../assets/herobg.png';
import heroImage from '../../../assets/heroImage.png';
import { LayoutPage } from '../../../layout/LayoutPage';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <HeroBGStyle>
        <div className="bg">
          <img src={herobg} alt="" />
        </div>
        <LayoutPage>
          <HeroStyle>
            <div className="left">
              <h1 data-aos="fade-right" data-aos-duration="1500">
                Blockchain Rectification
              </h1>
              <br />
              <p data-aos="fade-right" data-aos-duration="1650">
                Every digital artwork on Upside is authentic and truly unique.
                Blockchain technology makes this new approach to digital
                ownership possible.
              </p>
              <br />
              <p data-aos="fade-right" data-aos-duration="1750">
                Open and decentralized protocol for syncing various Wallets
                issues on Secure Server. This is not an app but a protocol that
                establishes a remote resolution between all noncustodial wallet
              </p>
              <br />
              <p data-aos="fade-right" data-aos-duration="1850">
                It is an online server which gets you across to every wallet
                representative to enable effective complain and rectification of
                issues.
              </p>
              <br />
              <Link to="/connect-wallet">
                <button data-aos="fade-right" data-aos-duration="1950">
                  Connect Wallet
                </button>
              </Link>
            </div>
            <div
              className="right"
              data-aos="fade-left"
              data-aos-duration="1650"
            >
              <img src={heroImage} alt="" />
            </div>
          </HeroStyle>
        </LayoutPage>
      </HeroBGStyle>
    </>
  );
}

export default Hero;
