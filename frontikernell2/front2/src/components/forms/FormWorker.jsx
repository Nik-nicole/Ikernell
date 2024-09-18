import React from "react";
import { Divider, TextInput } from '@tremor/react';

export default function FormWorker() {
  return (
    <div className="mt-10 bg-white rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900">
        Register to workspace
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Take a few moments to register for your company's workspace
      </p>
      <form action="#" method="post" className="mt-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              First name<span className="text-red-500">*</span>
            </label>
            <TextInput
              type="text"
              id="first-name"
              name="first-name"
              autoComplete="given-name"
              placeholder="First name"
              className="mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Last name<span className="text-red-500">*</span>
            </label>
            <TextInput
              type="text"
              id="last-name"
              name="last-name"
              autoComplete="family-name"
              placeholder="Last name"
              className="mt-1"
              required
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email<span className="text-red-500">*</span>
            </label>
            <TextInput
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Email"
              className="mt-1"
              required
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <TextInput
              type="text"
              id="address"
              name="address"
              autoComplete="street-address"
              placeholder="Address"
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <TextInput
              type="text"
              id="city"
              name="city"
              autoComplete="address-level2"
              placeholder="City"
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State
            </label>
            <TextInput
              type="text"
              id="state"
              name="state"
              autoComplete="address-level1"
              placeholder="State"
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
              Postal code
            </label>
            <TextInput
              type="text"
              id="postal-code"
              name="postal-code"
              autoComplete="postal-code"
              placeholder="Postal code"
              className="mt-1"
            />
          </div>
        </div>
        <Divider className="my-6" />
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}