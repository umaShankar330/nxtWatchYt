import React from 'react'

const SavedContext = React.createContext({
  savedList: [],
  addVideos: () => {},
  deleteVideo: () => {},
  isDark: false,
  toggleTheme: () => {},
})

export default SavedContext
