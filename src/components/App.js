import React from 'react'

const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol id="relativeList" key="relativeList">
                <li id="relativeListItem1" key="relativeListItem1"></li>
                <li id="relativeListItem2" key="relativeListItem2"></li>
                <li id="relativeListItem3" key="relativeListItem3"></li>
                <li id="relativeListItem4" key="relativeListItem4"></li>
                <li id="relativeListItem5" key="relativeListItem5"></li>
               </ol>
    </div>
  )
}

export default App
