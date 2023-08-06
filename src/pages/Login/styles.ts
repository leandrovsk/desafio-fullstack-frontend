import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  gap: 15px;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-900);

  h2 {
    font-size: 4rem;
    align-self: center;
    font-weight: 700;
    color: var(--color-gray-800);
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    width: 400px;
    height: 460px;
    padding: 40px;
    border-radius: 60px;
    border: 3px solid var(--color-primary);
    flex-direction: column;

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

    input {
      height: 30px;
      padding-left: 5px;
      border: 1px solid var(--color-primary);
      height: 35px;
      border-radius: 8px;
    }

    p {
      height: 20px;
      color: red;
      font-size: 1.4rem;
    }
  }
`;
