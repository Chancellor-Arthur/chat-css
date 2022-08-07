import styled from 'styled-components';
import React, { useState } from 'react';
import Smiles from './Smiles';
import icons from '../assets/svg';

interface SmileProps {
  value: string;
  setValue: (str: string) => void;
}

const Smile = ({ value, setValue }: SmileProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {modalVisible ? <Smiles value={value} setValue={setValue} /> : null}
      <SmileButton onClick={() => setModalVisible((visible) => !visible)} />
    </>
  );
};

const SmileButton = styled.button`
  background: url(${icons.smileIcon}) center no-repeat;
  cursor: pointer;
  border: none;
  width: 30px;
  height: 30px;
  align-self: start;
  margin-top: -5px;
  margin-right: 5px;
`;

export default Smile;
