import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "../Columns/index.js";

const delegates = [
	{
		id: 1,
		name: "خلود العلايمي - Khalod Alalaaiamai",
		gender: "Female",
		totalOffers: 10,
		assembledPlastic: 100,
		rating: "3.0",
	},
	{
		id: 2,
		name: "بتول السقا - Btol Alsqa",
		gender: "Female",
		totalOffers: 10,
		assembledPlastic: 100,
		rating: "3.0",
	},
	{
		id: 3,
		name: "نوف بن عمر - Nof Bn Omar",
		gender: "Male",
		totalOffers: 10,
		assembledPlastic: 100,
		rating: "3.0",
	},
	{
		id: 4,
		name: "دكتور عنود النقاش - Dktoar Anod AlnqIsh",
		gender: "Male",
		totalOffers: 10,
		assembledPlastic: 100,
		rating: "3.0",
	},
	{
		id: 5,
		name: "خلود العواني - Khalod Alawanei",
		gender: "Female",
		totalOffers: 10,
		assembledPlastic: 100,
		rating: "3.0",
	},
];

export const Table = () => {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => delegates, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		prepareRow,
	} = useTable(
		{
			columns,
			data,
		},
		usePagination
	);

	return (
		<div>
			<table className="w-full shadow-md text-md text-left" {...getTableProps()}>
				<thead className="text-xl border-b-2 border-green-800">
					{headerGroups.map((headerGroup) => {
						return (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => {
									return (
										<th
											scope="col"
											className="px-6 py-3"
											{...column.getHeaderProps()}
										>
											{column.render("Header")}
										</th>
									);
								})}
							</tr>
						);
					})}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<tr className="border-b" {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td
											className="px-6 py-4 font-medium whitespace-nowrap"
											{...cell.getCellProps()}
										>
											{cell.render("Cell")}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="flex items-center justify-center">
				<button
					className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold m-4 py-2 px-4 rounded-lg"
					onClick={() => previousPage()}
				>
					Previous
				</button>
				<button
					className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold m-4 py-2 px-4 rounded-lg"
					onClick={() => nextPage()}
				>
					Next
				</button>
			</div>
		</div>
	);
};
