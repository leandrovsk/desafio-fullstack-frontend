import { styled } from "styled-components";

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px;
    gap: 8px;
    width: 300px;
    height: 350px;
    border: 1px solid var(--color-gray-200);
    border-radius: 10px;
    background-color: white;
    color: var(--color-gray-900);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    figure {
        display: flex;
        width: 100%;
        height: 45%;
        justify-content: center;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    button {
            width: 150px;
            height: 30px;
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

`