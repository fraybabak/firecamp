import { useEffect, useState } from 'react';
import { _array } from '@firecamp/utils';
import equal from 'deep-equal';
import { within } from '@testing-library/react';

import Table from './Table';
import { defaultData, columnDataForDisplay } from './TableData';
import { VscMenu } from '@react-icons/all-files/vsc/VscMenu';
import SingleLineEditor from '../../editors/monaco-v2/SingleLineEditor';
export default {
  title: 'UI-Kit/Table',
  component: Table,
  argTypes: {
    name: { control: 'text' },
    resizable: { control: 'boolean' },
    width: { control: 'number' },
    columns: { control: 'object' },
    data: { control: 'object' },
    options: { control: 'object' },
  },
};

const SimpleTableTemplate = ({
  name,
  resizable,
  width,
  columns,
  data: _data,
  options,
  columnRenderer,
}) => {
  let [data, setData] = useState(_data);

  // useEffect(()=> {
  //   setTimeout(()=> {
  //     setData((s)=> [...s, { key: "auth", "value": "Token"}])
  //   }, 5000)
  // }, [])

  let updateTableData = (newRows: any[] = []) => {
    if (!equal(newRows, data)) {
      setData(newRows);
    }
  };

  return (
    <Table
      name={name}
      width={width}
      resizable={resizable}
      data={data}
      options={options}
      columns={columns}
      columnRenderer={columnRenderer}
      cellRenderer={(cell) => {
        // console.log(cell, 7777);
        const value = cell.getValue();
        if (cell.column.id == 'action') return <span>A</span>;
        if (cell.column.id == 'description')
          return (
            <input
              placeholder={`input text`}
              value={value}
              onChange={console.log}
              className="bg-transparent w-full text-base text-appForeground font-sans"
              readOnly
            />
          );

        // if (cell.column.id == 'value')
        return (
          <SingleLineEditor
            key={cell.id}  
            path={cell.id}
            value={value}
            disabled={false}
            type="text"
            language={'ife-header-key'}
            onChange={(e) => {
              console.log(e);
            }}
            height={21}
            loading={
              <input
                placeholder={`input text`}
                value={value}
                className="bg-transparent w-full text-base text-appForeground font-sans"
                readOnly
              />
            }
          />
        );
      }}
    />
  );
};
export const SimpleTable = SimpleTableTemplate.bind({});
SimpleTable.args = {
  name: 'test-table-2',
  resizable: true,
  width: 500,
  columns: columnDataForDisplay,
  data: defaultData,
  options: {
    containerClassName: 'container-wrapper',
    minColumnSize: 100,
  },
};

// SimpleTable.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   //table is rendered
//   const renderedTable = await canvas.getByRole('table');
// };
