import { styled } from "styled-components";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-gray-100);
    padding: 20px;
    gap: 20px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 400px;
    color: var(--color-gray-900);
    border-radius: 8px;

    input {
      padding-left: 10px;
      height: 35px;
      width: 300px;
      border-radius: 0.8rem;
      border: 1px solid var(--color-primary);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 5px;

      p {
        height: 20px;
        color: red;
        font-size: 1.3rem;
      }
      h2 {
        align-self: center;
      }
    }

    button {
      width: 150px;
      height: 40px;
      background-color: var(--color-primary);
      border: none;
      outline: none;
      border-radius: 20px;
      color: white;
      font-weight: 600;
      margin-top: 20px;
      align-self: center;
    }

    button:hover {
      filter: brightness(0.9);
    }
  }
`;
