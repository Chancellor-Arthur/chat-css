import React, { FC } from 'react';
import styled from 'styled-components';
import { SmileModalProps } from '../types/types';

const smiles = ['👋', '👍', '👎', '😊', '😂', '😘', '😎', '😱', '😡', '😢', '😐'];

const Smiles: FC<SmileModalProps> = ({ value, setValue }) => {
  const addSmile = ({ target }: React.MouseEvent<HTMLSpanElement>) => {
    if (!(target instanceof HTMLSpanElement)) return;
    target && setValue(value + target.innerHTML);
  };

  return (
    <SmileModal onClick={(event) => addSmile(event)}>
      {smiles.map((smile) => (
        <SmileItem key={smile}>{smile}</SmileItem>
      ))}
    </SmileModal>
  );
};

const SmileModal = styled.div`
  position: absolute;
  width: 200px;
  height: 150px;
  border: 1px solid #c3c5cc;
  background: #ffffff;
  border-radius: inherit;
  left: 16px;
  display: grid;
  padding: 5px;
  gap: 5px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  bottom: 200px;

  @media screen and (max-width: 410px) {
    bottom: 100px;
  }
`;

const SmileItem = styled.span`
  cursor: pointer;
  padding: 5px;
  width: 100%;
  height: 100%;
  font-size: 20px;
`;

export default Smiles;
