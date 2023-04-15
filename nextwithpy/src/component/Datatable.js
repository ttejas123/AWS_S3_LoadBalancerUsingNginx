import React, { useEffect } from 'react';


function DataTableCompo() {

    const fetchData = async() => {
        const res = axios.get("/data");
        console.log(res.data);
    }

    useEffect(()=> {
        fetchData()
    }, [])

    return (
        <DataTable
            columns={columns}
            data={[]}
        />
    );
};

export default DataTableCompo