import React, { useState } from "react";
import { Divider, TextInput } from '@tremor/react';
import WorkerService from "../../service/WorkerService";

const Worker = () => {
    const [worker, setWorker] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        startDate: '',
        identification: '',
        profession: '',
        speciality: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorker((prevWorker) => ({
            ...prevWorker,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await WorkerService.createWorker(worker);
            alert('Worker created successfully!');
            // Optionally, reset form or navigate to another page
        } catch (error) {
            console.error('Error creating worker:', error);
        }
    };

    return (
        <div className="w-full max-w-4xl bg-white rounded-lg p-10 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 text-center">
                Register to workspace
            </h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
                Take a few moments to register for your company's workspace
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            First name<span className="text-red-500">*</span>
                        </label>
                        <TextInput
                            type="text"
                            id="first-name"
                            name="firstName"
                            value={worker.firstName}
                            onChange={handleChange}
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
                            name="lastName"
                            value={worker.lastName}
                            onChange={handleChange}
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
                            value={worker.email}
                            onChange={handleChange}
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
                            value={worker.address}
                            onChange={handleChange}
                            placeholder="Address"
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
                            Start Date
                        </label>
                        <input
                            type="date"
                            id="start-date"
                            name="startDate"
                            value={worker.startDate}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                            Identification
                        </label>
                        <TextInput
                            type="text"
                            id="state"
                            name="identification"
                            value={worker.identification}
                            onChange={handleChange}
                            placeholder="Identification"
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                            Profession
                        </label>
                        <TextInput
                            type="text"
                            id="postal-code"
                            name="profession"
                            value={worker.profession}
                            onChange={handleChange}
                            placeholder="Profession"
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="speciality" className="block text-sm font-medium text-gray-700">
                            Speciality Dev
                        </label>
                        <select
                            id="speciality"
                            name="speciality"
                            value={worker.speciality}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2"
                        >
                            <option value="">Select a speciality</option>
                            <option value="backend">Backend</option>
                            <option value="frontend">Frontend</option>
                            <option value="testing">Testing</option>
                            <option value="QA">QA</option>
                            <option value="architecture">Architecture</option>
                        </select>
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
};

export default Worker;
