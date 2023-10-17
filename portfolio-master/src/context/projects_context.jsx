import React, { useEffect, useContext, useReducer, useState } from "react";
import { socialLinks, navButtons, skillsRating } from "../data";
import reducer from "../reducer/projects_reducer";
import { createClient } from "contentful";
import {
  GET_PROJECTS_BEGIN,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_CERTIFICATES_BEGIN,
  GET_CERTIFICATES_ERROR,
  GET_CERTIFICATES_SUCCESS,
} from "../actions";
import { FaSmileBeam } from "react-icons/fa";

const client = createClient({
  space: "c9sv53p45hzd",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

const initialState = {
  isSidebarOpen: false,
  projects_loading: false,
  projects_error: false,
  projects: [],
  certificates_loading: false,
  certificates_error: false,
  certificates: [],
};

const ProjectsContext = React.createContext();

export const ProjectsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [skills, setSkills] = useState(skillsRating);
  const [links, setLinks] = useState(navButtons);
  const [socials, setSocials] = useState(socialLinks);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProjects = async () => {
    dispatch({ type: GET_PROJECTS_BEGIN });
    try {
      const { items } = await client.getEntries({
        content_type: "portfolioProjects",
      });

      dispatch({ type: GET_PROJECTS_SUCCESS, payload: items });
    } catch (error) {
      dispatch({ type: GET_PROJECTS_ERROR });
    }
  };

  const fetchCertificates = async () => {
    dispatch({ type: GET_CERTIFICATES_BEGIN });

    try {
      const { items } = await client.getEntries({
        content_type: "certificates",
      });

      dispatch({ type: GET_CERTIFICATES_SUCCESS, payload: items });
    } catch (error) {
      dispatch({ type: GET_CERTIFICATES_ERROR });
    }
  };

  useEffect(() => {
    fetchProjects();

    fetchCertificates();
  }, []);

  return (
    <ProjectsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, links, socials, skills }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => {
  return useContext(ProjectsContext);
};
