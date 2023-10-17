import { styled } from "styled-components";

const Certificate = ({ id, name, img, thumb }) => {
  return (
    <Wrapper>
      <div className="certificate">
        <div className="img-container">
          <img className="img" src={thumb} alt="name" />
        </div>
        <a className="name" href={img} target="_blank">
          {name}
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .certificate {
    margin-bottom: 1.25rem;
    background: var(--grey-200);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    width: 360px;
  }

  .img-container {
    width: 360px;
    border-radius: var(--borderRadius);
  }

  .img {
    height: 300px;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .name {
    display: flex;
    color: var(--grey-500);
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: capitalize;
    border-bottom-right-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    transition: var(--transition);
    height: 35px;
  }

  .name:hover {
    background-color: var(--grey-500);
    color: var(--grey-200);
  }

  .certificate:hover {
    box-shadow: var(--shadow-4);
  }
`;
export default Certificate;
