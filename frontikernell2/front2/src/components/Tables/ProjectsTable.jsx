import { RiArrowDownSLine, RiArrowUpSLine } from '@remixicon/react';
import React from 'react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

// This example requires @tanstack/react-table

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const workspaces = [
  // Agrega tus datos aquí
];

const workspacesColumns = [
  {
    header: 'Name',
    accessorKey: 'Name',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Workers',
    accessorKey: 'Workers',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Status',
    accessorKey: 'status',
    enableSorting: false,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Activity',
    accessorKey: 'Activity',
    enableSorting: false,
    meta: {
      align: 'text-right',
    },
  },
  {
    header: 'Bugs',
    accessorKey: 'Bugs',
    enableSorting: false,
    meta: {
      align: 'text-right',
    },
  },
  {
    header: 'Last edited',
    accessorKey: 'lastEdited',
    enableSorting: false,
    meta: {
      align: 'text-right',
    },
  },
  {
    header: 'Actions',
    accessorKey: 'actions',
    enableSorting: false,
    meta: {
      align: 'text-right',
    },
    cell: ({ row }) => (
      <div className="flex justify-end gap-2">
        <button className="text-blue-500 hover:text-blue-700">Edit</button>
        <button className="text-red-500 hover:text-red-700">Delete</button>
      </div>
    ),
  },
];

export default function Example() {
  const table = useReactTable({
    data: workspaces,
    columns: workspacesColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [
        {
          id: 'Name',
          desc: false,
        },
      ],
    },
  });

  return (
    <div className="w-full p-4">
      {/* Botón de Registrar Project */}
      <div className="mb-4 flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Registrar Project
        </button>
      </div>

      <div className="w-full overflow-x-auto">
        <Table className="w-full">
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-b border-tremor-border dark:border-dark-tremor-border"
              >
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        header.column.getToggleSortingHandler()(event);
                      }
                    }}
                    className={classNames(
                      header.column.getCanSort()
                        ? 'cursor-pointer select-none'
                        : '',
                      'px-0.5 py-1.5',
                    )}
                    tabIndex={header.column.getCanSort() ? 0 : -1}
                    aria-sort={header.column.getIsSorted()}
                  >
                    <div
                      className={classNames(
                        header.column.columnDef.enableSorting === true
                          ? 'flex items-center justify-between gap-2 hover:bg-tremor-background-muted hover:dark:bg-dark-tremor-background-muted'
                          : header.column.columnDef.meta.align,
                        'rounded-tremor-default px-3 py-1.5',
                      )}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {header.column.getCanSort() ? (
                        <div className="-space-y-2">
                          <RiArrowUpSLine
                            className={classNames(
                              'size-4 text-tremor-content-strong dark:text-dark-tremor-content-strong',
                              header.column.getIsSorted() === 'desc'
                                ? 'opacity-30'
                                : '',
                            )}
                            aria-hidden={true}
                          />
                          <RiArrowDownSLine
                            className={classNames(
                              'size-4 text-tremor-content-strong dark:text-dark-tremor-content-strong',
                              header.column.getIsSorted() === 'asc'
                                ? 'opacity-30'
                                : '',
                            )}
                            aria-hidden={true}
                          />
                        </div>
                      ) : null}
                    </div>
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={classNames(cell.column.columnDef.meta.align)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
