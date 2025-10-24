import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProjectDetailState {
  likes: Record<string, number>;
  comments: Record<string, string[]>;
}

const initialState: ProjectDetailState = {
  likes: {},
  comments: {},
};

const projectDetailSlice = createSlice({
  name: "projectDetail",
  initialState,
  reducers: {
    likeProject: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.likes[id] = (state.likes[id] || 0) + 1;
    },
    addComment: (state, action: PayloadAction<{ id: string; comment: string }>) => {
      const { id, comment } = action.payload;
      if (!state.comments[id]) state.comments[id] = [];
      state.comments[id].push(comment);
    },
  },
});

export const { likeProject, addComment } = projectDetailSlice.actions;
export default projectDetailSlice.reducer;
