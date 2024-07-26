import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../state/store';
import {setTitle, setDescription, setOwner, submitForm, resetForm} from '../state/form/formSlice';
import {setItems, setLightItems, setItemsAsync} from "../state/form/tableSlice";

const Form = () => {
    const dispatch = useDispatch<AppDispatch>();
    const formState = useSelector((state: RootState) => state.formData);  // Use 'formData' to access the form state

    const handleSubmit = () => {
        // @ts-ignore
        dispatch(submitForm({
            title: formState.title,
            description: formState.description,
            owner: formState.owner
        }));

        dispatch(setItemsAsync());
        dispatch(setLightItems());
    };

    return (

        <div>
            <input type="text"
                   className="mb-5 bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   value={formState.title}
                   onChange={(e) => dispatch(setTitle(e.target.value))}
                   placeholder="Title"
            />
            <input type="text"
                   className="mb-5 bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   value={formState.description}
                   onChange={(e) => dispatch(setDescription(e.target.value))}
                   placeholder="Description"
            />

            <input
                type="text"
                className="mb-5 bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formState.owner}
                onChange={(e) => dispatch(setOwner(e.target.value))}
                placeholder="Owner"
            />
            <button className="mb-5 bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"
                    onClick={handleSubmit}>Submit
            </button>
            {formState.status === 'loading' && <p>Loading...</p>}
            {formState.status === 'succeeded' && <p>Form submitted successfully!</p>}
            {formState.status === 'failed' && <p>Error: {formState.error}</p>}
        </div>
    );
};

export default Form;
