import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  gap: 20px;
  padding: 10px;
  border: 1px solid darkred;
  border-radius: 5px;
`;

export const Image = styled.img`
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const DateCreate = styled.p`
  display: flex;
  justify-self: self-end;
`;

export const Comment = styled.div`
  max-width: 80%;
`;
