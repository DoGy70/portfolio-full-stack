import { styled } from "styled-components";
import { useProjectsContext } from "../context/projects_context";
import Certificate from "./Certificate";

const Certificates = () => {
  const {
    certificates,
    certificates_loading: loading,
    certificates_error: error,
  } = useProjectsContext();

  return (
    <Wrapper id="certificates">
      <div className="certificates-center">
        <div className="certificates-header">
          <h1 className="title">Certificates</h1>
          <div className="title-underline"></div>
        </div>
        <ul className="certificates">
          {certificates.map((certificate) => {
            const { id } = certificate;

            return <Certificate key={id} {...certificate} />;
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .certificates-center {
    width: 90vw;
    margin: 0 auto;
  }

  .title {
    padding-top: 1rem;
  }

  .title-underline {
    margin-top: -1rem;
  }

  .certificates {
    display: grid;
    align-items: center;
    justify-content: center;
    row-gap: 1rem;
    margin-top: 1.75rem;
    padding-bottom: 2rem;
  }

  @media (min-width: 992px) {
    .certificates {
      grid-template-columns: repeat(auto-fit, minmax(360px, 400px));
      place-items: center;
    }
  }
`;
export default Certificates;
