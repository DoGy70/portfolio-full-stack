import { styled } from "styled-components";
import { useProjectsContext } from "../context/projects_context";
import Skill from "./Skill";

const Skills = () => {
  const { skills } = useProjectsContext();
  return (
    <Wrapper id="skills">
      <div className="skills-center">
        <div className="skills-header">
          <h1 className="title">Skills</h1>
          <div className="title-underline"></div>
        </div>
        <ul className="skills">
          {skills.map((skill) => {
            const { id } = skill;
            return (
              <li key={id}>
                <Skill {...skill} />
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--primary-100);
  margin-bottom: 0;
  padding-bottom: 2.5rem;

  .skills-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  li {
    height: 100%;
  }

  h1 {
    padding-top: 3rem;
  }

  .title-underline {
    margin-top: -1.5rem;
    background: var(--grey-500);
    width: 65px;
  }

  .skills-header {
    padding-bottom: 3rem;
  }

  .skills {
    display: grid;
    place-items: center;
    gap: 2.5rem;
  }

  @media (min-width: 1280px) {
    .skills {
      margin-top: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
      gap: 1rem;
      transform: translateY(5rem);
    }
  }
`;
export default Skills;
