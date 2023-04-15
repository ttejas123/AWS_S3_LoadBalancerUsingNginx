import DataTable from 'react-data-table-component';
import axios from 'axios'
import { useEffect } from 'react';
export default function Home() {

  const columns = [
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Age',
        selector: row => row.age,
    },
    {
        name: "Gender",
        selector: row => row.gender
    }
  ];

  const fetchData = async() => {
    const res = axios.get("https://5000-ttejas123-awss3loadbala-q08w0sjb34p.ws-us94.gitpod.io/data");
    console.log(res.data);
  }

  useEffect(()=> {
      fetchData()
  }, [])
  return (
    <>
      Hii
    </>
  )
}
