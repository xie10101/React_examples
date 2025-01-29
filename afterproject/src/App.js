import React from "react";
import StudentList from "./Student";
import useFetch from "./Fetch";
function App() {
  const { data: stuData, loading, error, fetchData } = useFetch();
  useFetch();
  return (
    <>
      <div>
        <StudentList></StudentList>
      </div>
    </>
  );
}

export default App;
