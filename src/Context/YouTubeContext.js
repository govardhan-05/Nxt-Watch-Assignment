import React from 'react'

const YouTubeContext = React.createContext({
  cartList: [],
  isTheme: false,
  ThemeIsClicked: () => {},
  addSaveItems: () => {},
})

export default YouTubeContext
