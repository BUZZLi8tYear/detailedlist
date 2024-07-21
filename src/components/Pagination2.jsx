import Pagination from "@mui/material/Pagination";
import React, { useCallback, useState } from "react";
import { FormControl, Input, InputLabel, FormHelperText } from "@mui/material";

// import React from 'react'

function Pagination2(props ) {
    const [PageSize, setPageSize] = useState(50);
    const [currentPage, setcurrentPage] = useState(1);

    const handlePageChange =useCallback( async(e,currentPage)=>{
        console.log("page changed");
        setcurrentPage(e.target.value) ;
        props.onPageChange(currentPage , PageSize);
    },[currentPage ,PageSize]);

    const handlePageSizeChange = useCallback(async(e)=>{
        console.log("page size changed");
        setPageSize(e.target.value);
        // console.log(currentPage);
        props.onPageChange(currentPage , e.target.value)
        // handlePageChange(e,1);
        // setcurrentPage(1);
    },[ PageSize]);
    return (<>

        <FormControl variant='outlined' margin='normal' error={!(PageSize>0)} sx={{ mb: 2 }}>
            <InputLabel htmlFor='pagesize' >PageSize</InputLabel>
            <Input
                id='pagesize'
                type='number'
                value={PageSize}
                // onChange={(e) => {setPageSize(e.target.value)
                //     console.log(PageSize);
                // }}
                onChange={handlePageSizeChange}
            ></Input>
            <FormHelperText >{!(PageSize>0) ? "Enter the PageSize " : ""}</FormHelperText>
        </FormControl>
        {/* <div>Pagination2</div> */}
        <Pagination count={Math.ceil(props.items.length /PageSize)}  onChange={handlePageChange} showFirstButton showLastButton  style={{margin:'50px', alignItems:'center'}}/>
      
    </>
    )
}

export default Pagination2;

