import React from "react";
import { TextInput, Select, SelectItem } from '@tremor/react';

const stateOptions = [
  { value: 'in-process', label: 'In Process', color: 'bg-yellow-200 text-yellow-800' },
  { value: 'start', label: 'Start', color: 'bg-green-200 text-green-800' },
  { value: 'finish', label: 'Finish', color: 'bg-blue-200 text-blue-800' },
];

// Custom input component without icon
const CustomInput = React.forwardRef((props, ref) => (
  <input
    {...props}
    ref={ref}
    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  />
));

export default function FormProject() {
  return (
    <div className="mt-6 bg-white rounded-lg p-4 max-w-3xl mx-auto">
      <h3 className="text-lg font-semibold text-gray-900">
        Register to workspace
      </h3>
      <p className="mt-1 text-sm text-gray-600">
        Take a few moments to register for your company's workspace
      </p>
      <form action="#" method="post" className="mt-4">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2">
          <div className="col-span-full">
            <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
              Project Name<span className="text-red-500">*</span>
            </label>
            <CustomInput
              type="text"
              id="project-name"
              name="project-name"
              placeholder="Project name"
              required
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State
            </label>
            <Select className="mt-1 text-sm" enableClear={false}>
              {stateOptions.map((option) => (
                <SelectItem key={option.value} value={option.value} >
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${option.color} leading-none`}>
                    {option.label}
                  </span>
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <label htmlFor="value" className="block text-sm font-medium text-gray-700">
              Value
            </label>
            <CustomInput
              type="number"
              id="value"
              name="value"
              placeholder="Value"
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={2}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Project description"
            ></textarea>
          </div>
          <div>
            <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <CustomInput
              type="date"
              id="start-date"
              name="start-date"
            />
          </div>
          <div>
            <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <CustomInput
              type="date"
              id="end-date"
              name="end-date"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-3 mt-4">
          <button
            type="button"
            className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
