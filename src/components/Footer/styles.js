import styled from "styled-components";

const FooterStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 12px;
  background-color: white;
  border-top: 1px solid #ccc;
  
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background-color: white;
    width: 800px;
    font-family:  sans-serif;
    color: #777;
    height: 60px;

    .copyright {}
    .link {
      span {
        padding: 0 10px;
        border-right: 1px solid #ccc;
      }
      :last-child {
        border: none;
      }
    }
  }
`;

export default FooterStyle;