import {PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface Row {
    title: string;
    description: string;
    owner: string;
}

interface LightRow {
    title: string;
    description: string;
}

interface TableState {
    items: Row[];
    lightItems: LightRow[]
}

const initialState: TableState = {
    items: [],

    lightItems: []
};

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        setItems: (state) => {
            state.items = [
                {title: 'Row 1', description: 'Description 1', owner: 'Owner 1'},
                {title: 'Row 2', description: 'Description 2', owner: 'Owner 2'}
            ];
        },
        setLightItems: (state) => {
            state.lightItems = [
                {title: 'LightRow 1', description: 'Description 1'},
                {title: 'LightRow 2', description: 'Description 2'}
            ];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setItemsAsync.pending, () => {
                console.log("setItemsAsync.pending");
            })
            .addCase(
                setItemsAsync.fulfilled,
                (state, action: PayloadAction<Row[]>) => {
                    state.items = action.payload;
                }
            );
    },
});

export const setItemsAsync = createAsyncThunk(
    "table/setItemsAsync",
    async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return [
            {title: 'Row 1', description: 'Description 1', owner: 'Owner 1'},
            {title: 'Row 2', description: 'Description 2', owner: 'Owner 2'}
        ];
    }
);

export const {setItems, setLightItems,} = tableSlice.actions;
export default tableSlice.reducer;