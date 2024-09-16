import React from "react";
import { Divider, TextInput } from '@tremor/react';

export default function FormProject(){
    return(
        
        <div className=" mt-10 bg-white rounded-lg">
          <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong ">
            Register to workspace
          </h3>
          <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content ">
            Take a few moments to register for your company's workspace
          </p>
          <form action="#" method="post" className="mt-8">
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="Project-Name"
                  className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong bg"
                >
                  Project Name 
                  <span className="text-red-500">*</span>
                </label>
                <TextInput
                  type="text"
                  id="first-name"
                  name="first-name"
                  autoComplete="first-name"
                  placeholder="First name"
                  className="mt-2"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label
                  htmlFor="last-name"
                  className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                >
                  State
                  <span className="text-red-500">*</span>
                </label>
                <TextInput
                  type="text"
                  id="last-name"
                  
                  name="last-name"
                  autoComplete="last-name"
                  placeholder="Last name"
                  className="mt-2"
                  required
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="email"
                  className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                >
                  Email
                  <span className="text-red-500">*</span>
                </label>
                <TextInput
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="mt-2"
                  required
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="address"
                  className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                >
                  Address
                </label>
                <TextInput
                  type="text"
                  id="address"
                  name="address"
                  autoComplete="street-address"
                  placeholder="Address"
                  className="mt-2"
                />
              </div>
             
              
            </div>
            <Divider />
            <div className="flex items-center justify-end space-x-4">
              <button
                type="button"
                className="whitespace-nowrap rounded-tremor-small px-3 py-2.5 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong rounded-md border"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="whitespace-nowrap rounded-tremor-default bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

    );
}