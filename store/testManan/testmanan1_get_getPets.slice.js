import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const testmanan1_get_Pet_id_read = createAsyncThunk(
  "testmanan1_get_getPets/testmanan1_get_Pet_id_read",
  async payload => {
    const response = await apiService.testmanan1_get_Pet_id_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const testmanan1_get_getPetsSlice = createSlice({
  name: "testmanan1_get_getPets",
  initialState,
  reducers: {},
  extraReducers: {
    [testmanan1_get_Pet_id_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [testmanan1_get_Pet_id_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [testmanan1_get_Pet_id_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  testmanan1_get_Pet_id_read,
  slice: testmanan1_get_getPetsSlice
}
