import { styled } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useProjectsContext } from "../context/projects_context";
const Sidebar = () => {
  const { closeSidebar, isSidebarOpen, links, socials } = useProjectsContext();
  6;
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-center">
          <div className="sidebar-header">
            <h1>Portfolio</h1>
            <button className="close-btn" type="button" onClick={closeSidebar}>
              <FaTimes />
            </button>
          </div>
          <ul className="sidebar-links">
            {links.map((link) => {
              const { id, section, url } = link;

              return (
                <li key={id}>
                  <a href={url} onClick={closeSidebar}>
                    {section}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="sidebar-socials">
          {socials.map((socialLink) => {
            const { id, name, url, icon } = socialLink;

            return (
              <li key={id}>
                <a href={url} target="_blank">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  position: relative;
  .sidebar-header {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .close-btn {
    background: transparent;
    border: none;
    align-items: center;
    color: var(--red-dark);
    font-weight: 1000;
    cursor: pointer;

    svg {
      font-size: 1.5rem;
      color: var(--red-light);
      transition: var(--transition);
    }

    svg:hover {
      color: var(--red-dark);
    }
  }

  .sidebar-links {
    width: 100%;
    a {
      display: block;
      text-align: left;
      text-transform: capitalize;
      font-size: 1.25rem;
      color: var(--grey-600);
      padding: 1rem 1.25rem;
      transition: var(--transition);
    }

    a:hover {
      background: var(--grey-100);
      padding-left: 1.75rem;
    }
  }

  h1:hover {
    color: var(--primary-400);
  }

  h1 {
    transition: var(--transition);
  }

  .sidebar-socials {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin-top: 2rem;
      margin-left: 1.75rem;
    }

    svg {
      font-size: 2rem;
      color: var(--primary-500);
      transition: var(--transition);
    }

    svg:hover {
      color: var(--primary-800);
    }
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  @media (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;
export default Sidebar;
