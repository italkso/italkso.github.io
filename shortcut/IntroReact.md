## Add React to a Website

1. Add a DOM Container to the HTML

   ```html
   <!-- ... existing HTML ... -->
   
   <div id="like_button_container"></div>
   <!-- ... existing HTML ... -->
   ```

2.  Add the Script Tags 

   ```html
     <!-- ... other HTML ... -->
   
     <!-- Load React. -->
     <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
     <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
     <!-- Load our React component. -->
     <script src="like_button.js"></script>
   </body>
   ```

   

3. Create a React Component 

   Create a file called `like_button.js` next to your HTML page.

   ```javascript
   // ... the starter code you pasted ...
   
   const domContainer = document.querySelector('#like_button_container');
   ReactDOM.render(e(LikeButton), domContainer);
   ```

   

