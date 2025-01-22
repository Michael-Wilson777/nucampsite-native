import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchCampsites = createAsynkThunk(
    'campsites/fetchCampsites',
    async () => {
        const response = await fetch(baseUrl + 'campsites');
        if(!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await respoonse.json();
        return data;
    }
);

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState: { isLoading: true, errMess: null, campsitesArray: []},
    reducers: {},
    extraReducers: (builder) => {

        builder

            .addCase(fetchCampsites.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(fetchCampsites.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.campsitesArray = action.payload;
            })

            .addCase(fetchCampsites.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ?   action.errror.message
                    :   'Fetch Failed';
            });
    }
});

export const campsitesReducer = campsitesSlice.reducer;