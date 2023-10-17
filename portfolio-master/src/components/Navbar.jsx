import { styled } from "styled-components";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useProjectsContext } from "../context/projects_context";

const Navbar = () => {
  const { openSidebar, links } = useProjectsContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <h1>Portfolio</h1>
          <button type="button" className="btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          {links.map((link) => {
            const { id, section, url } = link;

            return (
              <li key={id}>
                <a href={url}>{section}</a>
              </li>
            );
          })}
        </ul>
        <Sidebar />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--grey-200);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  .sidebar {
    transition: var(--transition);
  }

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    text-align: center;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .btn {
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    color: var(--primary-700);
    font-weight: 600;
    padding-top: 1.5rem;
  }

  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .btn {
      display: none;
    }

    .nav-center {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 1rem;
      }

      a {
        color: var(--primary-500);
        text-transform: capitalize;
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: var(--letterSpacing);
        transition-property: color;
        transition: var(--transition);
      }

      a:hover {
        color: var(--primary-700);
        border-bottom: 1px solid var(--primary-700);
      }
    }
  }
`;
export default Navbar;
