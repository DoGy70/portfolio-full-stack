import { styled } from "styled-components";

const Project = ({ id, section, url = "", img, url2 = "" }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="img-container">
          <img className="img" src={img} alt={section} />
        </div>
        <div className="info-container">
          <a className="btn" href={url || url2} target="_blank">
            {section}
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);

  .container {
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
    transition: var(--transition);
  }

  .container:hover {
    box-shadow: var(--shadow-3);
  }

  .img-container {
    width: 360px;
    position: relative;
  }

  img {
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }

  .btn {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 992px) {
    .img-container {
      width: 500px;
    }
  }
`;
export default Project;
