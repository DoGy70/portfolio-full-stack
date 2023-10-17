import { TbShieldFilled, TbShieldHalfFilled, TbShield } from "react-icons/tb";
import { styled } from "styled-components";

const Rating = ({ rating }) => {
  const tempRating = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index} className="shield">
        {rating >= index + 1 ? (
          <TbShieldFilled />
        ) : rating >= number ? (
          <TbShieldHalfFilled />
        ) : (
          <TbShield />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <span>{tempRating}</span>
    </Wrapper>
  );
};

const Wrapper = styled.span`
  width: 100%;
  span {
    display: flex;
  }

  .shield {
    svg {
      color: var(--primary-500);
      margin: 0;
      padding: 0;
    }
  }
`;

export default Rating;
