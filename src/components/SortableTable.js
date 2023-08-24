import React from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import LabeledInput from './LabeledInput';

export default function SortableTable ({ data }) {
  const columns = React.useMemo(() => {
    if (data.length === 0) {
      return [];
    }

    return Object.keys(data[0]).map(key => ({
      Header: key,
      accessor: key,
    }));
  }, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageIndex, pageSize },
    gotoPage,
    setPageSize,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageCount,
    pageOptions,
    setGlobalFilter,
    state,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter, // Placez useGlobalFilter avant usePagination
    useSortBy,
    usePagination
  );
  
  
  const { globalFilter } = state;

  return (
    <div>
      <div className='tableSearchInput'>
        <LabeledInput
          label={'Rechercher dans toutes les colonnes'}
          value={globalFilter || ''}
          onChange={value => setGlobalFilter(value.target.value || undefined)}
          name={'Rechercher dans toutes les colonnes...'}
          required
        />
      </div>
      <div className='tableFrame'>
        <table className='table' {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr className='tableFixedRow' {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='tableControls'>
          <div className='arrowControls'>
            <button className='controlButton hover-shine' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </button>
            <button className='controlButton hover-shine' onClick={() => previousPage()} disabled={!canPreviousPage}>
              {'<'}
            </button>
            <button className='controlButton hover-shine' onClick={() => nextPage()} disabled={!canNextPage}>
              {'>'}
            </button>
            <button className='controlButton hover-shine' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              {'>>'}
            </button>
          </div>
          <div>
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} on {pageOptions.length}
              </strong>{' '}
            </span>
            <span>
              | Go to page :{' '}
              <input className='controlButton'
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                style={{ width: '50px' }}
              />
            </span>
          </div>
          <select className='controlButton hover-shine'
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 25, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  