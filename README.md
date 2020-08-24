This app is created using create-react-app command. The zip file downloaded is used in this application
To run this App, open terminal and run `npm i` and `npm start` to view into the browser.

The CSS file which was included in zip is directly used here with some animations added

Component is divided into two sub-components namely: 
1. App.js
2. BatsmanForm.js

App.js is the main component which keeps track of the state.
useState, useEffect and useMemo hooks are being used here in this application.

BatsmanForm.js is the form which displays average and horizontal bar.

radio button changes test mode to server mode.
initially mode is test, so the data is fetched from the testData
testData is memoized by useMemo hook, so as to avoid the infinite loop
when the server mode is selected, data is fetched from the server in useEffect hook.

Average and horizontal bar is computed by onChange event of input box

Please Note: Test Data which was given in the zip file is not modified, it is used as it is.