import styled from 'styled-components';

const NavigationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;

    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;

    li {
      display: block;

      a {
        display: block;
        padding: .45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all .4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;

        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }

        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          opacity: 0.21;
          transition: All 0.4s cubic-bezier(1,-0.2,.25,.95);
          z-index: -1;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }

    .active-class {
      background-color: var(--primary-color-light);
      color: white;
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;

    p {
      padding: 1.3rem 0;
      font-size: 1.1.rem;
      display: block;
      text-align: center;
    }
  }
`;

export default NavigationStyled;
