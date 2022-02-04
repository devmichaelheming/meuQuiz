import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 40px 0;
`;

export const SectionHeader = styled.div``;

export const Logotipo = styled.img`
  height: 200px;
  flex-shrink: 0;
`;

export const SectionBody = styled.div`
  max-width: 500px;
  width: 100%;

  .login-form-button {
    width: 100%;
  }
`;

export const TitleBody = styled.h1`
  color: #13729e;
  padding-bottom: 20px;
`;

export const SectionFooter = styled.div``;
