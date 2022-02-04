import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #000;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
export const Question = styled.span`
  font-size: 20px;
  user-select: none;
`;
export const Body = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;

    button {
      border: none;

      li {
        width: 100%;
        height: 45px;
        border: 1px solid #ccc;
        background: #00000002;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;

        &:hover {
          background: #16a34a;
          color: #fff;
        }
      }
    }
  }
`;
