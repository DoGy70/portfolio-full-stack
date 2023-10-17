import { styled } from "styled-components";
import { useProjectsContext } from "../context/projects_context";

const Links = () => {
  const { links, socials } = useProjectsContext();
  return (
    <Wrapper id="links">
      <div className="links-center">
        <ul className="links">
          {links.map((link) => {
            const { id, section, url } = link;

            return (
              <li key={id}>
                <a href={url}>{section}</a>
              </li>
            );
          })}
        </ul>

        <ul className="socials">
          {socials.map((socialLink) => {
            const { id, icon, url, name } = socialLink;

            return (
              <li key={id}>
                <a href={url} target="_blank">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p>Copyrigth @ Miroslav Pomanov all rights reserved</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  letter-spacing: var(--letterSpacing);
  background: var(--grey-900);

  p {
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    color: var(--white);
    padding-bottom: 1rem;
    text-transform: capitalize;
  }
  .links-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .links {
    display: flex;
    gap: 2rem;
    justify-content: center;
    padding-top: 1rem;
    text-transform: capitalize;

    a {
      color: var(--white);
      transition: var(--transition);
    }

    a:hover {
      color: var(--grey-400);
    }
  }

  .socials {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;

    svg {
      font-size: 20px;
      color: var(--white);
      transition: var(--transition);
    }

    svg:hover {
      color: var(--grey-400);
    }
  }

  @media (max-width: 530px) {
    .links {
      gap: 0.75rem;
    }
  }
`;
export default Links;
