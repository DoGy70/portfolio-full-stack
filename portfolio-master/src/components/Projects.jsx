import { styled } from "styled-components";
import { useProjectsContext } from "../context/projects_context";
import Project from "./Project";

const Projects = () => {
  const {
    projects,
    projects_loading: isLoading,
    projects_error: error,
  } = useProjectsContext();

  if (isLoading) {
    return (
      <Wrapper>
        <div className="loading-center">
          <div className="loading"></div>
        </div>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <h1 className="error">there was an error...</h1>
      </Wrapper>
    );
  }

  return (
    <Wrapper id="projects">
      <div className="projects-center">
        <div className="projects-header">
          <h1 className="title">Projects</h1>
          <div className="title-underline"></div>
        </div>
        <ul className="projects">
          {projects.map((project) => {
            const { id } = project;
            return (
              <li key={id}>
                <Project {...project} />
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--grey-200);
  h1 {
    padding-top: 2rem;
  }

  .projects-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    padding-bottom: 2rem;
  }

  .loading-center {
    padding: 10rem;
  }

  .error {
    padding: 10rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }

  .title-underline {
    margin-top: -1rem;
  }

  .projects {
    margin-top: 3rem;
    display: grid;
    align-items: center;
    justify-content: center;
    place-items: center;
    row-gap: 1rem;
  }

  @media (min-width: 992px) {
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      row-gap: 2rem;
    }
  }

  @media (min-width: 1280px) {
    h1 {
      padding-top: 7rem;
    }
  }
`;

export default Projects;
