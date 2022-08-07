import React from 'react';
import styled from 'styled-components';

const QuestionPresets = () => {
  return (
    <Questions>
      <p>Правление Вечных</p>
      <p>Куда исчезли Потерянные?</p>
      <p>Верховный наместник Нового Короза</p>
      <p>Ситуация в Корозе</p>
      <p>Планы Академии и Накалимов</p>
    </Questions>
  );
};

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 1px 10px 1px;
  margin-bottom: 70px;

  @media screen and (max-width: 410px) {
    margin-right: 16px;
  }

  & p {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #cdd0d7;
    box-shadow: 0 2px 4px lightgray;
    border-radius: 8px;
    height: 45px;
    font-style: normal;
    font-size: 14px;
    line-height: 15px;
    color: blue;
    cursor: pointer;
  }
`;

export default QuestionPresets;
