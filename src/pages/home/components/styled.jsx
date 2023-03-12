import styled from 'styled-components';

export const HeroBGStyle = styled.section`
  position: relative;

  .bg {
    display: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 375px;
    margin-top: -500px;
  }

  @media screen and (min-width: 885px) {
    height: 90vh;

    .bg {
      display: block;
    }
  }
`;
export const HeroStyle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -50px;

  .right {
    display: flex;
    justify-content: flex-start;
    img {
      width: 500px;
    }
  }

  .left {
    width: 50%;
  }

  @media screen and (max-width: 884px) {
    display: block;
    margin-top: 0;

    .left {
      width: 100%;
    }

    .right {
      display: flex;
      justify-content: center;
      img {
        width: 300px;
      }
    }
  }
`;

// SERVICES SECTION

export const ServiceStyle = styled.section`
  margin: 50px 0;

  .grid {
    margin-top: 50px;
    display: grid;
    row-gap: 32px;

    @media screen and (min-width: 429px) {
      grid-template-columns: 1fr 1fr;
      column-gap: 32px;
    }
    @media screen and (min-width: 1000px) {
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 32px;
    }
  }
`;

export const Box = styled.div`
  border: 3px solid #8863fc;
  border-radius: 10px;
  width: 100%;
  height: 239px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  cursor: pointer;

  .icon {
    font-size: 40px;
    color: #fff;
  }

  &:hover {
    background: #8863fc;
  }
`;
