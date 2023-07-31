import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h3 {
        color: var(--color-gray-900);
    }

    header {
        display: flex;
        height: 70px;
        gap: 40px;
        padding-left: 20px;
        background-color: var(--color-primary);
        align-items: center;
        justify-content: center;
        width: 100%;

        button {
            width: 150px;
            height: 40px;
            background-color: white;
            border: none;
            outline: none;
            border-radius: 20px;
            color: var(--color-primary);
            font-weight: 600;
        }

        button:hover {
            transform: scale(1.1);
            transition: ease 0.2s;
        }

    }

`

export const Board = styled.ul`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    list-style: none;
    padding: 40px;
`