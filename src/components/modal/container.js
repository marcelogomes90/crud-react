import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 600px;
  top: 10%;
  margin: 0 35% 0 35%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 1500px) {
    width: 40%;
    margin: 0 30% 0 30%;
  }

  @media (max-width: 1000px) {
    width: 50%;
    margin: 0 25% 0 25%;
  }
`;

export default Container;
