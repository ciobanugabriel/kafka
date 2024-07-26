import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface FormState {
    title: string;
    description: string;
    owner: string;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: FormState = {
    title: '',
    description: '',
    owner: '',
    status: 'idle',
    error: null,
};

export const submitForm = createAsyncThunk<
    { title: string; description: string; owner: string }, // Return type of the payload creator
    { title: string; description: string; owner: string }  // First argument to the payload creator
>(
    "form/submitForm",
    async (formData) => {
        console.log("Submit the form!");

        // Make the API call to submit the form data
        const response = await fetch('http://localhost:8085/documents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Failed to submit the form');
        }

        const data = await response.json();
        console.log("Submitted!", data);
        return formData;
    }
);


const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        setOwner: (state, action: PayloadAction<string>) => {
            state.owner = action.payload;
        },
        resetForm: (state) => {
            state.title = '';
            state.description = '';
            state.owner = '';
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitForm.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(submitForm.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(submitForm.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || null;
            });
    },
});

export const { setTitle, setDescription, setOwner, resetForm } = formSlice.actions;
export default formSlice.reducer;