import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const SectionBanner = styled.div`
  width: 50%;
  height: 100%;
  background-color: #a3d0e2;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SectionSignIn = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const Header = styled.div``;

export const Logotipo = styled.img`
  height: 250px;
  flex-shrink: 0;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .buttonLink {
    background: transparent;
    border: none;
    box-shadow: none;

    &:focus {
      outline: 0;
    }
  }
`;

export const TitleBody = styled.h2`
  color: #3ac7ea;
  font-size: 24px;
  padding-bottom: 20px;
  margin: 0;
  text-align: center;
`;

export const ButtonAction = styled.div`
  width: 100%;
  height: 45px;
  border-radius: 6px;
  border: 1px solid #db211e;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f42a27;
  position: relative;
  color: #f2f2f2;
  cursor: pointer;
  transition: 0.2s all linear;

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #f2f2f2;

    span {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &:hover {
    background: #db211e;
    transition: 0.2s all linear;
  }
`;

export const SectionIconGoogle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: #f2f2f2;
  position: absolute;
  left: 20px;
  padding-right: 20px;
  border-right: 1px solid #f2f2f2;
`;

export const Separator = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  display: flex;
  gap: 20px;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 40%;
    height: 1px;
    background: #b2b2b2;
  }
`;

export const LinkEnterAsAGuest = styled.span`
  cursor: pointer;
  color: #000;

  &:hover {
    color: #545454;
  }
`;
