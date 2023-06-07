import React from 'react';

interface MyComponentProps {
  data: any; // Adjust the type according to your JSON structure
}

const MyComponent: React.FC<MyComponentProps> = ({ data }) => {
  const lists = data.lists;
  const cards = data.cards;

  return (
    <div>
      {lists.map((list: any, index: number) => {
        if(!list.closed){
            return(
                <div key={index}>
                <p>Name: {list.name}</p>
                </div>
            );
      }
        })}
    </div>

)};

export default MyComponent;
