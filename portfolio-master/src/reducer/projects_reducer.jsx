import { FaSmileBeam } from "react-icons/fa";
import {
  GET_PROJECTS_BEGIN,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_CERTIFICATES_BEGIN,
  GET_CERTIFICATES_SUCCESS,
  GET_CERTIFICATES_ERROR,
} from "../actions";

const projects_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === GET_PROJECTS_BEGIN) {
    return { ...state, projects_loading: true, projects_error: false };
  }

  if (action.type === GET_PROJECTS_SUCCESS) {
    const newProjects = action.payload.map((project) => {
      const { id, section, url, url2 } = project.fields;

      const { url: img } = project.fields.img.fields.file;

      return { id, section, url, img, url2 };
    });

    return {
      ...state,
      projects: newProjects,
      projects_loading: false,
      projects_error: false,
    };
  }

  if (action.type === GET_PROJECTS_ERROR) {
    return {
      ...state,
      projects_loading: false,
      projects_error: true,
    };
  }

  if (action.type === GET_CERTIFICATES_BEGIN) {
    return {
      ...state,
      certificates_loading: true,
      certificates_error: false,
    };
  }

  if (action.type === GET_CERTIFICATES_ERROR) {
    return {
      ...state,
      certificates_error: true,
      certificates_loading: false,
    };
  }

  if (action.type === GET_CERTIFICATES_SUCCESS) {
    const newCertificates = action.payload.map((certificate) => {
      const { id, name } = certificate.fields;

      const { url: img } = certificate.fields.img.fields.file;

      const { url: thumb } = certificate.fields.thumbnail.fields.file;

      return { id, name, thumb, img };
    });

    return {
      ...state,
      certificates_error: false,
      certificates_loading: false,
      certificates: newCertificates,
    };
  }

  throw new Error(`No Matching ${action.type} - action type`);
};

export default projects_reducer;
