// // import React from "react";
// import Hen from "./Hen";

// const App = () => {
//   const need = "Nutrition"; // Data to be passed down

//   return (
//     <div>
//       <h1>Props Drilling Example</h1>
//       <Hen need={need} />
//     </div>
//   );
// };
import React from "react";

import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

import Updateuser from "./Update";
import User from "./User";
import Createuser from "./Create";


const App = () => {
    return (
        <div>
            {/* <h1>hello apps</h1> */}
            <Router>
                <Routes>
                    <Route path="/" element={<User/>} />
                    <Route path="/create" element={<Createuser/>} />  
                    <Route path="/update" element={<Updateuser/>} />
                </Routes>
            </Router>    
        </div>
    );
};

export default App;