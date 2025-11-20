// Table.js
import React from "react";
import Button from "./Button";

const Table = ({ columns, data, showActions = false, onEdit, onDelete, showAssign = false, onAssigned }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="px-4 py-2 text-center text-sm font-semibold text-gray-700"
              >
                {col.header}
              </th>
            ))}
            {showActions && (
              <th className="px-4 py-2 text-sm font-semibold text-gray-700 text-center">
                Actions
              </th>
            )}
            {showAssign && (
              <th className="px-4 py-2 text-sm font-semibold text-gray-700 text-center">
                Assign Task
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-2 text-center text-gray-500"
              >
                No data
              </td>
            </tr>
          ) : (
          data.map((row, idx) => (
            <tr key={idx} className="border-t hover:bg-gray-50">
              {columns.map((col) => (
                <td
                  key={col.accessor}
                  className="px-4 py-2 text-sm text-gray-600"
                >
                  {row[col.accessor]}
                </td>
              ))}
              {showActions && (
                  <td className="px-4 py-2 space-x-2 text-center">
                    <Button
                      onClick={() => onEdit(row)}
                      variant="outline"
                      size="sm"
                      label="Edit"
                    />

                    <Button
                      onClick={() => onDelete(row)}
                      label="Delete"
                      variant="delete"
                      size="sm"
                    />
                  </td>
              )}
              {showAssign && (
                  <td className="px-4 py-2 space-x-2 text-center">
                    <Button
                      onClick={() => onAssigned(row)}
                      variant="primary"
                      size="sm"
                      label="Select Technician"
                    />
                  </td>
              )}
            </tr>
          ))
        )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
