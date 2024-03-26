// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { apiUrl, filterData } from "./data";
// import Navbar from './components/Navbar';
// import Filter from './components/Filter';
// import Cards from './components/Cards';
// import  Spinner  from './components/Spinner';
// import { toast } from "react-toastify";

// const App = () => {
//   const [courses, setCourses] = useState(null);
//   const [loading,setLoading] = useState(true);

//     async function fetchData() {
//       setLoading(true);
//       try {
//         let response = await fetch(apiUrl);
//         const output = await response.json();
//         setCourses(output.data);
//       } catch (error) {
//         toast.error("Something went wrong");
//       }
//       setLoading(false);
//     }
//     useEffect(() => {
//         fetchData();
//     },[])

//   return (
//     <div>
//       <div>
//       <Navbar />
//       </div>
//       <div>
//       <Filter filterData={filterData} />
//       </div>
//      <div>
//      {
//        loading ? (<Spinner/>):(<Cards courses={courses}/>)
//      }
//      </div>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import './App.css';
import { filterData } from "./data";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch('https://cors-anywhere.herokuapp.com/https://codhelp-apis.vercel.app/api/get-top-courses');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const output = await response.json();
      setCourses(output.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <div>
        {loading ? <Spinner /> : <Cards courses={courses} />}
      </div>
    </div>
  );
}

export default App;


