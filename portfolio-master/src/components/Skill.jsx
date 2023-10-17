import { styled } from "styled-components";
import Rating from "./Rating";

const Skill = ({ id, skill, icon, rating, info }) => {
  return (
    <Wrapper>
      <div className="skill">
        <div className="skill-header">
          <div className="icon">{icon}</div>
          <div className="name">{skill}</div>
          <p className="desc">{info}</p>
        </div>
        <footer className="rating">
          <div>skill: {<Rating rating={rating} />}</div>
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  .skill {
    display: grid;
    height: 100%;
    width: 360px;
    background: var(--primary-300);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
    transition: var(--transition);
  }

  .skill:hover {
    box-shadow: var(--shadow-3);
  }

  .rating {
    display: flex;
    color: var(--grey-700);
    letter-spacing: var(--letterSpacing);
    div {
      align-self: flex-end;
      width: 100%;
      display: grid;
      grid-template-columns: auto auto;
      column-gap: 0.25rem;
      align-items: center;
      justify-content: center;
      text-transform: capitalize;
      padding-bottom: 0.5rem;
    }
  }

  .skill-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;
    background: var(--primary-100);
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

    svg {
      font-size: 50px;
      color: var(--primary-800);
    }
  }

  .name {
    margin-top: -0.5rem;
    text-transform: capitalize;
    font-weight: 600;
  }

  .desc {
    text-align: center;
    max-width: 80%;
    font-size: small;
    letter-spacing: var(--letterSpacing);
  }

  @media (min-width: 992px) {
    .skill {
      margin-top: 0;
      width: 360px;
    }
  }

  @media (min-width: 1280px) {
    .skill:hover {
      transform: translateY(-1rem);
    }
  }
`;
export default Skill;
