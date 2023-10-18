import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [info, setInfo] = useState("");
  const [theme, setTheme] = useState("");

  const restartStates = () => {
    setEmail("");
    setCompany("");
    setInfo("");
    setTheme("");
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        company,
        info,
        theme,
      };
      const response = await axios.post("/api/v1/contact", data);
      toast.success(response.data.msg);
      restartStates();
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      restartStates();
    }
  };

  return (
    <Wrapper id="contact">
      <div className="page">
        <div className="content">
          <form className="form" onSubmit={(e) => submitForm(e)}>
            <div className="form-header">
              <h2>Contact me</h2>
            </div>
            <div className="form-row">
              <label htmlFor="email" className="form-label">
                email
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label htmlFor="company" className="form-label">
                company
              </label>
              <input
                type="text"
                id="company"
                className="form-input"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label htmlFor="subject" className="form-label">
                subject
              </label>
              <input
                type="text"
                name="theme"
                id="subject"
                className="form-input"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label htmlFor="info" className="form-label">
                info
              </label>
              <textarea
                name="info"
                id="info"
                cols="30"
                rows="10"
                className="form-text-area"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              />
            </div>
            <div className="btn-container">
              <button type="submit" className="btn btn-block">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--primary-100);
  padding: 2rem 0;

  .page {
    width: 90vw;
    margin: 0 auto;
    height: 100%;
  }
  .form-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: left;
  }

  .title-underline {
    margin: 0;
    margin-top: -1rem;
    height: 0.35rem;
    width: 10rem;
    background-color: var(--grey-500);
  }

  .content {
    margin-top: 2rem;
  }

  .form {
    background-color: var(--primary-200);
    border-top: 5px solid var(--primary-500);
    align-items: center;
    max-width: 500px;
  }

  .form-row {
    padding: 0 2rem;
    width: 100%;
  }

  .form-label {
    font-size: 1.25rem;
    margin-bottom: 0.15rem;
  }

  .form-input {
    font-size: 1rem;
    border: none;
    background-color: var(--primary-100);
    width: 100%;
    letter-spacing: var(--letterSpacing);
  }

  .form-text-area {
    border: none;
    background-color: var(--primary-100);
    outline: none;
    width: 100%;
    resize: none;
    padding-top: 0.5rem;
    padding-left: 0.75rem;
  }

  .btn-container {
    padding: 0 2rem;
  }
`;
export default Contact;
