import React from 'react';
import mockData from '../utils/mockData';
import { Record } from '../utils/types';
import { Group, Stack } from '@mantine/core';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';

const Rows: React.FC<{
  open: boolean[];
  setOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
}> = ({ open, setOpen }) => {
  return (
    <>
      {mockData.map(
        (el: Record, index: number): JSX.Element => (
          <tr key={el.id}>
            <td>${el.salary.toLocaleString()}</td>
            <td>
              <button
                className={styles.expandCollapseButton}
                onClick={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  e.stopPropagation();
                  setOpen((prev): boolean[] => {
                    const currentStatus: boolean = prev[index];
                    const wantedStates: boolean[] = [];
                    wantedStates[index] = !currentStatus;
                    return wantedStates;
                  });
                }}
              >
                Documents{' '}
                <FontAwesomeIcon
                  style={{ marginLeft: '5px' }}
                  icon={open[index] ? faChevronUp : faChevronDown}
                />
              </button>
              <Group noWrap={false} className={styles.group}>
                {el.documents.map((el) => (
                  <div className={styles.document} key={el.id}>
                    <FontAwesomeIcon
                      style={{
                        borderRadius: 5,
                        marginRight: '5px',
                        color: 'rgb(190, 186, 186)',
                        height: '30px',
                        width: '30px',
                        border: '3px solid',
                      }}
                      icon={faFilePdf}
                    />
                    {el.name}
                  </div>
                ))}
              </Group>
              {open[index] && (
                <Stack
                  style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    border: '1px solid rgb(190, 186, 186)',
                    padding: '10px',
                    maxHeight: '200px',
                    overflow: 'auto',
                  }}
                  className={styles.stack}
                >
                  {el.documents.map((el) => (
                    <div className={styles.menuItem} key={el.id}>
                      <FontAwesomeIcon
                        style={{
                          marginRight: '5px',
                          color: 'rgb(190, 186, 186)',
                        }}
                        icon={faFilePdf}
                      />
                      {el.name}
                    </div>
                  ))}
                </Stack>
              )}
            </td>
          </tr>
        )
      )}
    </>
  );
};

export default Rows;
