import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTumblr } from "@fortawesome/free-brands-svg-icons";

const FooterBlock = styled.div`
  border-top: 1px solid #e8eced;
  display: flex;
  justify-content: center;
  align-items: center; /* 추가: 수직 가운데 정렬 */
  padding-top: 17px;
  padding-left: 120px;
  padding-right: 32px;
  padding-bottom: 17px;
  h1 {
    margin: 0;
    font-size: 37px;
    color: #000000;
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <p>
        &copy; 2023 KHS. 🧑‍💻 All rights reserved. | Designed by KHS |{" "}
        <a href="https://github.com/goodsosbva">
          GitHub <FontAwesomeIcon icon={faGithub} />
        </a>{" "}
        |{" "}
        <a href="https://goodsosbva.tistory.com/">
          Tistory <FontAwesomeIcon icon={faTumblr} />
        </a>
      </p>
    </FooterBlock>
  );
};

export default Footer;
