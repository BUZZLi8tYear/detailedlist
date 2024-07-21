

// import React, { useState, useEffect, useMemo, useCallback,useRef } from 'react';
// import { TextField } from '@fluentui/react/lib/TextField';
// import { Toggle } from '@fluentui/react/lib/Toggle';
// import { Announced } from '@fluentui/react/lib/Announced';
// import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
// import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode } from '@fluentui/react/lib/DetailsList';
// import { mergeStyleSets } from '@fluentui/react/lib/Styling';
// // import userData from '/public/DATA.js';
// import { initializeIcons } from '@fluentui/react';
// // import Pagination from './Pagination'; 
// import Pagination from "@mui/material/Pagination";
// import Pagination2 from './Pagination2';
// // import Product from '../backend/model.js';
// // import connectDB from '../backend/connect.js';
// import axios from 'axios' ;
// initializeIcons();

// const classNames = mergeStyleSets({
//     controlWrapper: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     selectionDetails: {
//         marginBottom: '20px',
//     },
// });

// const controlStyles = {
//     root: {
//         margin: '0 30px 20px 0',
//         maxWidth: '300px',
//     },
// };

// function ListDB(props) {
//     const [items, setItems] = useState([]);
//     // const[fetchedData ,setFetchedData] = useState([]);
//     const userData = useRef([]);
//     useEffect(()=>{
//         const fetchData = async()=>{
//             try{

//                 const response = await axios.get("http://localhost:3000/app/products");
//                 // setFetchedData(response.data.myData);
//                 userData.current = response.data.myData;
//                 setItems(response.data.myData);
//             }catch(error){
//                 console.error("Error fetching data",error);
//             }
//         };
//         fetchData(); 
//     },[]);

//     useEffect(()=>{
//         // console.log(typeof(items));
//         setItems(userData.current);
//     },[userData.current]);
//     const ColumnClick = (ev, column) => {

//         const newColumns = columns.slice(0);
//         const clickedColumn = newColumns.find(col => col.key === column.key);

//         if (clickedColumn) {
//             // Toggle sorting properties for the clicked column
//             clickedColumn.isSortedDescending = !clickedColumn.isSortedDescending;
//             clickedColumn.isSorted = true;
//             setmessage(`${column.name} is sorted ${column.isSortedDescending ? 'descending' : 'ascending'
//                 }`)
//             // Reset sorting properties for other columns
//             newColumns.forEach(col => {
//                 if (col !== clickedColumn) {
//                     col.isSorted = false;
//                     col.isSortedDescending = true;
//                 }
//             });

//             const newItems = copyAndSort(items, clickedColumn.fieldName, clickedColumn.isSortedDescending);
//             setColumns(newColumns);
//             setItems(newItems);

//         }
//     };
//     const copyAndSort = (items, columnKey, isSortedDescending) => {
//         // console.log("sorting.....")
//         const key = columnKey;
//         return items.slice(0).sort((a, b) => {
//             if (a[key] < b[key]) {
//                 return isSortedDescending ? 1 : -1;
//             }
//             if (a[key] > b[key]) {
//                 return isSortedDescending ? -1 : 1;
//             }
//             return 0;
//         });
//     };
//     const [columns, setColumns] = useState([{
//         key: 'column1',
//         name: 'ID',
//         fieldName: 'id',
//         minWidth: 50,
//         maxWidth: 70,
//         isResizable: true,
//         isSorted: true,
//         isSortedDescending: false,
//         data: 'number',
//         isPadded: true,
//         onColumnClick: ColumnClick
//     },
//     {
//         key: 'column2',
//         name: 'First Name',
//         fieldName: 'first_name',
//         minWidth: 100,
//         maxWidth: 150,
//         isResizable: true,
//         data: 'string',
//         isPadded: true,
//         onColumnClick: ColumnClick
//     },
//     {
//         key: 'column3',
//         name: 'Email',
//         fieldName: 'email',
//         minWidth: 150,
//         maxWidth: 250,
//         isResizable: true,
//         data: 'string',
//         isPadded: true,
//         onColumnClick: ColumnClick
//     },
//     {
//         key: 'column4',
//         name: 'Gender',
//         fieldName: 'gender',
//         minWidth: 70,
//         maxWidth: 90,
//         isResizable: true,
//         data: 'string',
//         isPadded: true,
//         onColumnClick: ColumnClick
//     },
//     {
//         key: 'column5',
//         name: 'Country',
//         fieldName: 'country',
//         minWidth: 100,
//         maxWidth: 150,
//         isResizable: true,
//         data: 'string',
//         isPadded: true,
//         onColumnClick: ColumnClick
//     },
//     ])

//     const [selectionDetails, setSelectionDetails] = useState('');
//     const [isModalSelection, setIsModalSelection] = useState(true);
//     const [isCompactMode, setIsCompactMode] = useState(false);
//     const [announcedMessage, setmessage] = useState("");
//     const [renderKey, setRenderKey] = useState(0); // State to force re-render

//     const [pageSize, setPageSize] = useState(50);
//     const [pageNumber, setPageNumber] = useState(1);
//     const [indexOfFirstItem, setIndexOfFirstItem] = useState(1)
//     const [indexOfLastItem, setIndexOfLastItem] = useState(50);
//     // const indexOfLastItem = pageNumber*pageSize ;
//     // const indexOfFirstItem = indexOfLastItem - pageSize ;
//     const [pageItems, setPageItems] = useState(items.slice(indexOfFirstItem - 1, indexOfLastItem + 1));


//     const selection = useMemo(() => new Selection({
//         onSelectionChanged: () => {
//             setSelectionDetails(getSelectionDetails());
//         },
//         getKey: (item) => item.id,
//     }), [items]);

//     useEffect(() => {
//         // Update render key when selection changes
//         setRenderKey(prevKey => prevKey + 1);
//     }, [selectionDetails,pageNumber,pageSize]);

//     const getSelectionDetails = useCallback(() => {
//         const selectionCount = selection.getSelectedCount();
//         // console.log('something changes')
//         switch (selectionCount) {
//             case 0:
//                 return 'No items selected';
//             case 1:
//                 return '1 item selected: ' + selection.getSelection()[0].first_name;
//             default:
//                 return `${selectionCount} items selected`;
//         }
//     }, [selection]);

//     const onChangeText = (ev, text) => {

//         const filteredItems = text ? userData.current.filter(i => i.first_name.toLowerCase().includes(text.toLowerCase()) || i.gender.toLowerCase().includes(text.toLowerCase()) || i.email.toLowerCase().includes(text.toLowerCase()) || i.country.toLowerCase().includes(text.toLowerCase())) : userData.current;

//         // Update the items state with the filtered data.
//         setItems(filteredItems);
//     };

//     const onChangeCompactMode = (ev, checked) => {
//         setIsCompactMode(checked);
//     };
//     const onChangeModalSelection = (ev, checked) => {
//         setIsModalSelection(checked);
//     };
//     const ItemInvoked = (item) => {
//         alert(`Item invoked: ${item.id} ${item.first_name}`);
//     };
//     const onPageChange = (currentPage, PageSize) => {
//         // console.log("page attribute changed");
//         setPageNumber(currentPage);
//         setPageSize(PageSize);
//         // setPageItems([items.slice(indexOfFirstItem ,indexOfLastItem) ]);
//     }

//     useEffect(()=>{
//         setIndexOfLastItem(pageNumber * pageSize);
//         setIndexOfFirstItem(pageNumber * pageSize - pageSize + 1);
//         // setPageItems(items.slice(indexOfFirstItem-1 , indexOfLastItem))
//     },[pageNumber ,pageSize ])

//     useEffect(() => {
//         setItems(userData.current);
//     }, [])

//     useEffect(() => {
//         setPageItems(items.slice(indexOfFirstItem - 1, indexOfLastItem));
//         // console.log(pageItems);
//     }, [items])

//     useEffect(() => {
//         // console.log("Check page attribute changes");
//         setPageItems(items.slice(indexOfFirstItem - 1, indexOfLastItem));
//     }, [items,indexOfLastItem, indexOfFirstItem])

//     useEffect(()=>{
//         // console.log(items); 
//         // console.log("this one also changes")  
//         setPageItems(items.slice(indexOfFirstItem-1 , indexOfLastItem));     
//     },[items,pageSize ,pageNumber])

//     useEffect(()=>{
//         // console.log("items changed");
//         // console.log(items);
//     },[items]);


//     return <>
//         <div>

//             <div className={classNames.controlWrapper}>
//                 {/* <Toggle
//                     label="Enable compact mode"
//                     checked={isCompactMode}
//                     onChange={onChangeCompactMode}
//                     onText="Compact"
//                     offText="Normal"
//                     styles={controlStyles}
//                 />
//                 <Toggle
//                     label="Enable modal selection"
//                     checked={isModalSelection}
//                     onChange={onChangeModalSelection}
//                     onText="Modal"
//                     offText="Normal"
//                     styles={controlStyles}
//                 /> */}
//                 <TextField label="Filter by first :" onChange={onChangeText} styles={controlStyles} />

//                 <Announced message={`Number of items after filter applied: ${items.length}.`} />
//             </div>


//             <div className={classNames.selectionDetails}>
//                 {selectionDetails}</div>
//             <Announced message={selectionDetails} />
//             {/* {announcedMessage ? <Announced message={announcedMessage} />:undefined} */}

//             {isModalSelection ? (<>

//                 <MarqueeSelection selection={selection}>
//                     <DetailsList
//                         key={renderKey}
//                         items={pageItems}
//                         compact={isCompactMode}
//                         columns={columns}
//                         selectionMode={SelectionMode.multiple}
//                         setKey="set"
//                         layoutMode={DetailsListLayoutMode.justified}
//                         // isHeaderVisible={true}
//                         selection={selection}
//                         // onColumnHeaderClick={}
//                         selectionPreservedOnEmptyClick={true}
//                         // enterModalSelectionOnTouch={true}
//                         ariaLabelForSelectionColumn="Toggle selection"
//                         ariaLabelForSelectAllCheckbox="Toggle selection for all items"
//                         checkButtonAriaLabel="select row"
//                         onItemInvoked={ItemInvoked}

//                     />
//                 </MarqueeSelection>
//             </>
//             ) : (
//                 <DetailsList
//                 items={items}
//                 compact={isCompactMode}
//                 columns={columns}
//                 selectionMode={SelectionMode.none}
//                 setKey="none"
//                 // getKey={getKey}
//                 layoutMode={DetailsListLayoutMode.justified}
//                 isHeaderVisible={true}
//                 onItemInvoked={ItemInvoked}
//                 />
//                 )}
//         </div>
//         <Pagination2 items={items} onPageChange={onPageChange} ></Pagination2>
//     </>
// }

// export default ListDB;


import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Announced } from '@fluentui/react/lib/Announced';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode } from '@fluentui/react/lib/DetailsList';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import axios from 'axios';
import Pagination2 from './Pagination2';
import { initializeIcons } from '@fluentui/react';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

initializeIcons();

const classNames = mergeStyleSets({
    controlWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:"space-evenly"
    },
    selectionDetails: {
        marginBottom: '20px',
    },
});

const controlStyles = {
    root: {
        margin: '0 30px 20px 0',
        maxWidth: '300px',
    },
};

function ListDB(props) {
    const userData = useRef([]);
    const [items, setItems] = useState([]);
    const [renderKey, setRenderKey] = useState(1);
    const [selectionDetails, setSelectionDetails] = useState('');
    const [isCompactMode, setIsCompactMode] = useState(false);
    const [pageSize, setPageSize] = useState(50);
    const [pageNumber, setPageNumber] = useState(1);
    const [filterText, setFilterText] = useState("");
    const [itemsafterfilter, setItemsAfterFilter] = useState(userData.current);
    const indexOfLastItem = pageNumber * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    const pageItems = itemsafterfilter.slice(indexOfFirstItem, indexOfLastItem);
    const [gender, setGender] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/app/products");
                userData.current = response.data.myData;
                setItems(response.data.myData);
                setItemsAfterFilter(response.data.myData);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);
    const copyAndSort = (items, columnKey, isSortedDescending) => {
        const key = columnKey;
        return items.slice(0).sort((a, b) => {
            if (a[key] < b[key]) {
                return isSortedDescending ? 1 : -1;
            }
            if (a[key] > b[key]) {
                return isSortedDescending ? -1 : 1;
            }
            return 0;
        });
    };
    const ColumnClick = (ev, column) => {
        console.log("Column clicked");
        const newColumns = columns.slice(0);
        const clickedColumn = newColumns.find(col => col.key === column.key);

        if (clickedColumn) {
            clickedColumn.isSortedDescending = !clickedColumn.isSortedDescending;
            clickedColumn.isSorted = true;
            newColumns.forEach(col => {
                if (col !== clickedColumn) {
                    col.isSorted = false;
                    col.isSortedDescending = true;
                }
            });
            // console.log("items before", {userData});
            console.log("filterText", filterText);
            const newItems = copyAndSort(userData.current, clickedColumn.fieldName, clickedColumn.isSortedDescending);
            // const newfiltereditems = copyAndSort(itemsafterfilter ,clickedColumn.fieldName , clickedColumn.isSortedDescending )
            setColumns(newColumns);
            setItems(newItems);
            // setFilterText('');
            console.log("filterText", filterText);
            const filteredItems = filterText ? newItems.filter(i =>
                i.first_name.toLowerCase().includes(filterText.toLowerCase()) ||
                i.email.toLowerCase().includes(filterText.toLowerCase())
            ) : newItems;
            console.log("filteredItems in sorting", filteredItems);
            setItemsAfterFilter(filteredItems);
            const pageItemsAfterFilter = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
            pageItems.current = pageItemsAfterFilter
        }
    };




    const [columns, setColumns] = useState([
        {
            key: 'column1',
            name: 'ID',
            fieldName: 'id',
            minWidth: 50,
            maxWidth: 70,
            isResizable: true,
            isSorted: true,
            isSortedDescending: false,
            data: 'number',
            isPadded: true,
            onColumnClick: ColumnClick,
        },
        {
            key: 'column2',
            name: 'First Name',
            fieldName: 'first_name',
            minWidth: 100,
            maxWidth: 150,
            isResizable: true,
            data: 'string',
            isPadded: true,
            onColumnClick: ColumnClick,
        },
        {
            key: 'column3',
            name: 'Email',
            fieldName: 'email',
            minWidth: 150,
            maxWidth: 250,
            isResizable: true,
            data: 'string',
            isPadded: true,
            onColumnClick: ColumnClick,
        },
        {
            key: 'column4',
            name: 'Gender',
            fieldName: 'gender',
            minWidth: 70,
            maxWidth: 90,
            isResizable: true,
            data: 'string',
            isPadded: true,
            onColumnClick: ColumnClick,
        },
        {
            key: 'column5',
            name: 'Country',
            fieldName: 'country',
            minWidth: 100,
            maxWidth: 150,
            isResizable: true,
            data: 'string',
            isPadded: true,
            onColumnClick: ColumnClick,
        },
        {
            key: 'column6',
            name: 'ShowDetail',
            fieldName: 'showdetail',
            minWidth: 100,
            maxWidth: 150,
            isResizable: true,
            data: 'string',
            isPadded: true,
            // onColumnClick: ColumnClick,
            onRender :(item)=>(
                <Button variant='contained' onClick={()=>
                    handleShowDetail(item)} style={{fontSize:10}}>Show Detail</Button>
                
                )
        },
    ]);

    const handleShowDetail=(item)=>{
        alert(`Details of ${item.first_name}:\n\nID: ${item.id}\nFirst Name: ${item.first_name}\nEmail: ${item.email}\nGender: ${item.gender}\nCountry: ${item.country}`)
    }

    const selection = useMemo(() => new Selection({
        onSelectionChanged: () => {
            setSelectionDetails(getSelectionDetails());
        },
        getKey: (item) => item.id,
    }), [items]);

    const getSelectionDetails = useCallback(() => {
        const selectionCount = selection.getSelectedCount();
        switch (selectionCount) {
            case 0:
                return 'No items selected';
            case 1:
                return '1 item selected: ' + selection.getSelection()[0].first_name;
            default:
                return `${selectionCount} items selected`;
        }
    }, [selection]);

    const onChangeText = (ev, text) => {
        const filteredItems = text ? items.filter(i =>
            i.first_name.toLowerCase().includes(text.toLowerCase()) ||
            i.email.toLowerCase().includes(text.toLowerCase())
        ) : items;
        setFilterText(text);
        // filtering(text,gender);
        setItemsAfterFilter(filteredItems);
        // setItems(filteredItems);
        setGender('');
        setPageNumber(1);
    };


    useEffect(() => {
        console.log(userData.current);
        console.log(items);
        console.log(itemsafterfilter);
        console.log(pageItems);
        console.log(indexOfFirstItem);
        console.log(indexOfLastItem);
        console.log(pageNumber);
        console.log(pageSize);
        console.log(filterText);
        console.log(gender);
        // console.log(gender);
    })

    const onPageChange = (currentPage, PageSize) => {
        console.log("onpageChange called ");
        setPageSize(PageSize);
        setPageNumber(currentPage);
    };


    const handleGenderChange = useCallback((event) => {
        onChangeText(event, filterText);
        setGender(event.target.value);
        const filteredItems = event.target.value ? items.filter(i => i.gender === event.target.value) : items;
        // setItems(filteredItems);
        setItemsAfterFilter(filteredItems);
        // filtering(filterText,event.target.value);
    }, [itemsafterfilter]);

    const filtering = useCallback(() => {
        console.log("filterText or gender changed");
    }, [filterText, gender])


    useEffect(() => {
        console.log("page size changed and effect called")
        pageItems.current = itemsafterfilter.slice(pageNumber * pageSize - pageSize, pageNumber * pageSize);
        setRenderKey(renderKey => renderKey + 1);

    }, [pageSize])

    useEffect(() => {
        setItemsAfterFilter(userData.current);
    }, [])

    return (
        <div style={{alignItems:'space-between'}}>
            <div className={classNames.controlWrapper}>
                <TextField label="Search :" onChange={onChangeText} styles={controlStyles} value={filterText} />
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                <FormControl sx={{ width: 180 }}>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        label="Age"
                        onChange={handleGenderChange}
                    >
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                        <MenuItem value={""}>All</MenuItem>
                    </Select>
                </FormControl>
                <Announced message={`Number of items after filter applied: ${items.length}.`} />
            </div>
            <Pagination2 items={itemsafterfilter} onPageChange={onPageChange} />
            <div className={classNames.selectionDetails}>{selectionDetails}</div>
            <Announced message={selectionDetails} />
            <MarqueeSelection selection={selection}>
                <DetailsList
                    items={pageItems}
                    compact={isCompactMode}
                    columns={columns}
                    selectionMode={SelectionMode.multiple}
                    setKey="set"
                    layoutMode={DetailsListLayoutMode.justified}
                    selection={selection}
                    selectionPreservedOnEmptyClick={true}
                    ariaLabelForSelectionColumn="Toggle selection"
                    ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                    checkButtonAriaLabel="select row"
                    // onItemInvoked={(item) => alert(`Item invoked: ${item.id} ${item.first_name}`)}
                    onItemInvoked={handleShowDetail}
                />
            </MarqueeSelection>
        </div>
    );
}

export default ListDB;
