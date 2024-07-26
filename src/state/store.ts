import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./form/formSlice";
import tableReducer from "./form/tableSlice";

export const store = configureStore({
    reducer: {
        formData: formReducer,
        tableData: tableReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
