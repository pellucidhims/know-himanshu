import React from 'react';

const INS_ARR = [
  {
    id: 1,
    header: 'Plugins incorporated',
    contentList: ['Eslint', 'Prettier', 'Husky'],
  },
];

const Instructions = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'yellow',
      }}
    >
      {INS_ARR.map((ins) => {
        return (
          <div key={ins.id}>
            <h3>{ins.header}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {ins.contentList.map((liItem) => {
                return <li>{liItem}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Instructions;
