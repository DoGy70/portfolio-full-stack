import { styled } from "styled-components";
import about from "../images/about.jpg";
import { aboutMe } from "../data";

const About = () => {
  return (
    <Wrapper id="about">
      <div className="about-center">
        <div className="about">
          <div className="info">
            <h1 className="title">About me</h1>
            <div className="title-underline"></div>
            <p>{aboutMe}</p>
          </div>
          <div className="img-container">
            <img src={about} className="img" alt="my-photo" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  height: calc(100vh - 10rem);
  scroll-margin-top: 10rem;

  .about-center {
    max-width: 90vw;
    margin: 0 auto;
  }

  .about-header {
    margin-bottom: 5rem;
  }

  .title-underline {
    background: var(--primary-500);
    width: 7rem;
    height: 0.25rem;
    margin: -1rem auto;
    margin-bottom: 2rem;
  }

  .about {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  p {
    margin-top: 2rem;
    color: var(--grey-500);
    letter-spacing: var(--letterSpacing);
    line-height: 1.25;
  }

  .img-container {
    display: none;
  }

  @media (max-width: 400px) {
    p {
      font-size: smaller;
      max-height: 500px;
    }
  }

  @media (min-width: 992px) {
    .about {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      place-items: center;
      align-items: center;
      justify-content: center;
    }

    p {
      max-width: 30vw;
      text-align: center;
    }

    .img-container {
      display: flex;
      position: relative;
      z-index: 1;
      width: 300px;
      height: 400px;
      border-radius: var(--borderRadius);
      box-shadow: var(--shadow-4);
    }

    .img-container::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 80%;
      bottom: -2%;
      z-index: -1;
      left: -8%;
      border-radius: var(--borderRadius);
      background-color: var(--primary-200);
    }

    .img {
      border-radius: var(--borderRadius);
      box-shadow: var(--shadow-4);
    }
  }
`;
export default About;
