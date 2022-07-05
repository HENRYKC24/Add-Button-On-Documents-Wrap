import React from 'react';
import mockData from '../utils/mockData';
import { Record } from '../utils/types';
import Row from './Row';

const Rows: React.FC<{
  open: boolean[];
  setOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
}> = ({ open, setOpen }) => {
  return (
    <>
      {mockData.map(
        (el: Record, index: number): JSX.Element => (
          <Row
            open={open}
            setOpen={setOpen}
            el={el}
            key={el.id}
            index={index}
          />
        )
      )}
    </>
  );
};

export default Rows;
