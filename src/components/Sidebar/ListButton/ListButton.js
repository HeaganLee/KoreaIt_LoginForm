/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const list = css`
    display: flex;
    align-items: center;
    border-radius: 10px;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
`;

const listIcon = css`
    display: flex;
    align-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
`;

const listTitle = css`
    display: flex;
    align-items: center;
`;

const ListButton = ({ children, title, onClick }) => {
    return (
        <div css={list} onClick={onClick}>
            <div css={listIcon}>{children}</div>
            <div css={listTitle}>{title}</div>
        </div>
    );
};

export default ListButton;