/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const table = css`
    border: 1px solid #bdbdbd;
`;

const thAndTd = css`
    border: 1px solid #dbdbdb;
    padding: 5px 10px;
    text-align: center;
`;

const RentalList = ({ bookId }) => { 
    const queryClient = useQueryClient();

    const getRentalList = useQuery(["getRentalList"], async() => {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await axios.get(`http://localhost:8080/book/${bookId}/rental/list`, option);
    });
    
    const rentalBook = useMutation(["rentalBook"], async (bookListId) => {
        const option = {
            headers: {
                "Content-type": "application/json",
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await axios.post(`http://localhost:8080/book/${bookListId}/rental`, JSON.stringify({
            userId: queryClient.getQueryData("principal").data.userId
        }) ,option);
        
    })
    
    if(getRentalList.isLoading) {
        <div>...로딩중</div>
    }


    // const returnBook = 

    if(!getRentalList.isLoading)
    return (
        <>
            <table css={table}>
                <thead>
                    <tr>
                        <th css={thAndTd}>도서번호</th>
                        <th css={thAndTd}>도서명</th>
                        <th css={thAndTd}>상태</th>
                    </tr>
                </thead>
                <tbody>
                    {getRentalList.data.data.map(rentalData => {
                        return (<tr key={rentalData.bookListId}>
                            <td css={thAndTd}>{rentalData.bookListId}</td>
                            <td css={thAndTd}>{rentalData.bookName}</td>
                            {rentalData.rentalStatus 
                                ? (<td css={thAndTd}>대여가능 <button onClick={rentalBook.mutate(rentalData.bookListId)}>대여</button></td>) 
                                : (<td css={thAndTd}>대여중 {rentalData.userId === queryClient.getQueryData("principal").data.userId 
                                    ? <button>반납</button> : ""} </td>)}
                        </tr>)
                    })}
                </tbody>
            </table>   
        </>
    );
};

export default RentalList;