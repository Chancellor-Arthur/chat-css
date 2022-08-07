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
  gap: 8px;
  padding: 9px 1px 9px 1px;
  margin-bottom: 72px;

  @media screen and (max-width: 410px) {
    margin-right: 16px;
  }

  & p {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dee3e9;
    box-shadow: 0 2px 4px rgba(44, 48, 52, 0.15);
    border-radius: 8px;
    height: 43px;
    font-style: normal;
    font-size: 14px;
    line-height: 15px;
    color: #0848c0;
    cursor: pointer;
  }
`;

export default QuestionPresets;
