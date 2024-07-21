// // import React, { useState, useEffect, useMemo, useCallback } from 'react';
// // import { TextField } from '@fluentui/react/lib/TextField';
// // import { Toggle } from '@fluentui/react/lib/Toggle';
// // import { Announced } from '@fluentui/react/lib/Announced';
// // import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
// // import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode } from '@fluentui/react/lib/DetailsList';
// // import { mergeStyleSets } from '@fluentui/react/lib/Styling';
// // import userData from '/public/DATA.js';
// // import { initializeIcons } from '@fluentui/react';
// // // import Pagination from './Pagination'; 
// // import Pagination from "@mui/material/Pagination";
// // import Pagination2 from './Pagination2';

// // initializeIcons();

// // const classNames = mergeStyleSets({
// //     controlWrapper: {
// //         display: 'flex',
// //         flexWrap: 'wrap',
// //     },
// //     selectionDetails: {
// //         marginBottom: '20px',
// //     },
// // });

// // const controlStyles = {
// //     root: {
// //         margin: '0 30px 20px 0',
// //         maxWidth: '300px',
// //     },
// // };

// // function ListPaged(props) {
// //     const ColumnClick = (ev, column) => {

// //         const newColumns = columns.slice(0);
// //         const clickedColumn = newColumns.find(col => col.key === column.key);

// //         if (clickedColumn) {
// //             // Toggle sorting properties for the clicked column
// //             clickedColumn.isSortedDescending = !clickedColumn.isSortedDescending;
// //             clickedColumn.isSorted = true;
// //             setmessage(`${column.name} is sorted ${column.isSortedDescending ? 'descending' : 'ascending'
// //                 }`)
// //             // Reset sorting properties for other columns
// //             newColumns.forEach(col => {
// //                 if (col !== clickedColumn) {
// //                     col.isSorted = false;
// //                     col.isSortedDescending = true;
// //                 }
// //             });

// //             // Sort items based on the clicked column
// //             // console.log("Hello");
// //             // console.log(items);
// //             const newItems = copyAndSort(items, clickedColumn.fieldName, clickedColumn.isSortedDescending);


// //             setColumns(newColumns);
// //             setItems(newItems);

// //         }
// //     };
// //     const copyAndSort = (items, columnKey, isSortedDescending) => {
// //         const key = columnKey;
// //         return items.slice(0).sort((a, b) => {
// //             if (a[key] < b[key]) {
// //                 return isSortedDescending ? 1 : -1;
// //             }
// //             if (a[key] > b[key]) {
// //                 return isSortedDescending ? -1 : 1;
// //             }
// //             return 0;
// //         });
// //     };
// //     const [columns, setColumns] = useState([{
// //         key: 'column1',
// //         name: 'ID',
// //         fieldName: 'id',
// //         minWidth: 50,
// //         maxWidth: 70,
// //         isResizable: true,
// //         isSorted: true,
// //         isSortedDescending: false,
// //         data: 'number',
// //         isPadded: true,
// //         onColumnClick: ColumnClick
// //     },
// //     {
// //         key: 'column2',
// //         name: 'First Name',
// //         fieldName: 'first_name',
// //         minWidth: 100,
// //         maxWidth: 150,
// //         isResizable: true,
// //         data: 'string',
// //         isPadded: true,
// //         onColumnClick: ColumnClick
// //     },
// //     {
// //         key: 'column3',
// //         name: 'Email',
// //         fieldName: 'email',
// //         minWidth: 150,
// //         maxWidth: 250,
// //         isResizable: true,
// //         data: 'string',
// //         isPadded: true,
// //         onColumnClick: ColumnClick
// //     },
// //     {
// //         key: 'column4',
// //         name: 'Gender',
// //         fieldName: 'gender',
// //         minWidth: 70,
// //         maxWidth: 90,
// //         isResizable: true,
// //         data: 'string',
// //         isPadded: true,
// //         onColumnClick: ColumnClick
// //     },
// //     {
// //         key: 'column5',
// //         name: 'Country',
// //         fieldName: 'country',
// //         minWidth: 100,
// //         maxWidth: 150,
// //         isResizable: true,
// //         data: 'string',
// //         isPadded: true,
// //         onColumnClick: ColumnClick
// //     },
// //     ])
// //     const [items, setItems] = useState([userData]);
// //     const [selectionDetails, setSelectionDetails] = useState('');
// //     const [isModalSelection, setIsModalSelection] = useState(true);
// //     const [isCompactMode, setIsCompactMode] = useState(false);
// //     const [announcedMessage, setmessage] = useState("");
// //     const [renderKey, setRenderKey] = useState(0); // State to force re-render

// //     const [pageSize , setPageSize] = useState(50);
// //     const [pageNumber ,setPageNumber] = useState(1);
// //     const [indexOfFirstItem , setIndexOfFirstItem] = useState(pageNumber*pageSize - pageSize )
// //     const [indexOfLastItem ,setIndexOfLastItem] = useState(pageNumber*pageSize);
// //     // const indexOfLastItem = pageNumber*pageSize ;
// //     // const indexOfFirstItem = indexOfLastItem - pageSize ;
// //     const [pageItems , setPageItems] = useState([items.slice(indexOfFirstItem  , indexOfLastItem)]);


// //     const selection = useMemo(() => new Selection({
// //         onSelectionChanged: () => {
// //             setSelectionDetails(getSelectionDetails());
// //         },
// //         getKey: (item) => item.id,
// //     }), [items]);

// //     useEffect(() => {
// //         // Update render key when selection changes
// //         setRenderKey(prevKey => prevKey + 1);
// //     }, [selectionDetails]);

// //     const getSelectionDetails = useCallback(() => {
// //         const selectionCount = selection.getSelectedCount();
// //         console.log('something changes')
// //         switch (selectionCount) {
// //             case 0:
// //                 return 'No items selected';
// //             case 1:
// //                 return '1 item selected: ' + selection.getSelection()[0].first_name;
// //             default:
// //                 return `${selectionCount} items selected`;
// //         }
// //     }, [selection]);

// //     const onChangeText = (ev, text) => {

// //         const filteredItems = text ? userData.filter(i => i.first_name.toLowerCase().includes(text.toLowerCase()) || i.gender.toLowerCase().includes(text.toLowerCase())|| i.email.toLowerCase().includes(text.toLowerCase())|| i.country.toLowerCase().includes(text.toLowerCase())) : userData;

// //         // Update the items state with the filtered data.
// //         setItems(filteredItems);
// //     };

// //     const onChangeCompactMode = (ev, checked) => {
// //         setIsCompactMode(checked);
// //     };
// //     const onChangeModalSelection = (ev, checked) => {
// //         setIsModalSelection(checked);
// //     };
// //     const ItemInvoked = (item) => {
// //         alert(`Item invoked: ${item.id} ${item.first_name}`);
// //     };
// //     const onPageChange=(currentPage , PageSize)=>{
// //         setPageItems([items.slice(currentPage*PageSize - PageSize),currentPage*PageSize ]);
// //     }
// //     useEffect(() => {
// //         setItems(userData)
// //     }, [])



// //     return <>
// //         <div>

// //             <div className={classNames.controlWrapper}>
// //                 {/* <Toggle
// //                     label="Enable compact mode"
// //                     checked={isCompactMode}
// //                     onChange={onChangeCompactMode}
// //                     onText="Compact"
// //                     offText="Normal"
// //                     styles={controlStyles}
// //                 />
// //                 <Toggle
// //                     label="Enable modal selection"
// //                     checked={isModalSelection}
// //                     onChange={onChangeModalSelection}
// //                     onText="Modal"
// //                     offText="Normal"
// //                     styles={controlStyles}
// //                 /> */}
// //                 <TextField label="Filter by first name:" onChange={onChangeText} styles={controlStyles } />
// //                 <Announced message={`Number of items after filter applied: ${items.length}.`} />
// //             </div>
// //             <Pagination2 items ={items} onPageChange = {onPageChange}></Pagination2>
// //             {/* <Pagination count={10} showFirstButton showLastButton /> */}

// //             <div className={classNames.selectionDetails}>
// //                 {selectionDetails}</div>
// //             <Announced message={selectionDetails} />
// //             {/* {announcedMessage ? <Announced message={announcedMessage} />:undefined} */}

// //             {isModalSelection ? (<>

// //                 <MarqueeSelection selection={selection}>
// //                     <DetailsList
// //                         key={renderKey}
// //                         items={items}
// //                         compact={isCompactMode}
// //                         columns={columns}
// //                         selectionMode={SelectionMode.multiple}
// //                         setKey="set"
// //                         layoutMode={DetailsListLayoutMode.justified}
// //                         // isHeaderVisible={true}
// //                         selection={selection}
// //                         // onColumnHeaderClick={}
// //                         selectionPreservedOnEmptyClick={true}
// //                         // enterModalSelectionOnTouch={true}
// //                         ariaLabelForSelectionColumn="Toggle selection"
// //                         ariaLabelForSelectAllCheckbox="Toggle selection for all items"
// //                         checkButtonAriaLabel="select row"
// //                         onItemInvoked={ItemInvoked}

// //                     />
// //                 </MarqueeSelection>
// //             </>
// //             ) : (
// //                 <DetailsList
// //                     items={items}
// //                     compact={isCompactMode}
// //                     columns={columns}
// //                     selectionMode={SelectionMode.none}
// //                     setKey="none"
// //                     // getKey={getKey}
// //                     layoutMode={DetailsListLayoutMode.justified}
// //                     isHeaderVisible={true}
// //                     onItemInvoked={ItemInvoked}
// //                 />
// //             )}
// //         </div>
// //     </>
// // }

// // export default ListPaged;







import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Announced } from '@fluentui/react/lib/Announced';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode } from '@fluentui/react/lib/DetailsList';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import userData from '/public/DATA.js';
import { initializeIcons } from '@fluentui/react';
// import Pagination from './Pagination'; 
import Pagination from "@mui/material/Pagination";
import Pagination2 from './Pagination2';
// import Product from '../backend/model.js';
// import connectDB from '../backend/connect.js';
import axios from 'axios' ;
initializeIcons();

const classNames = mergeStyleSets({
    controlWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
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

function ListPaged(props) {
    const ColumnClick = (ev, column) => {

        const newColumns = columns.slice(0);
        const clickedColumn = newColumns.find(col => col.key === column.key);

        if (clickedColumn) {
            // Toggle sorting properties for the clicked column
            clickedColumn.isSortedDescending = !clickedColumn.isSortedDescending;
            clickedColumn.isSorted = true;
            setmessage(`${column.name} is sorted ${column.isSortedDescending ? 'descending' : 'ascending'
                }`)
            // Reset sorting properties for other columns
            newColumns.forEach(col => {
                if (col !== clickedColumn) {
                    col.isSorted = false;
                    col.isSortedDescending = true;
                }
            });

            const newItems = copyAndSort(items, clickedColumn.fieldName, clickedColumn.isSortedDescending);
            setColumns(newColumns);
            setItems(newItems);

        }
    };
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
    const [columns, setColumns] = useState([{
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
        onColumnClick: ColumnClick
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
        onColumnClick: ColumnClick
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
        onColumnClick: ColumnClick
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
        onColumnClick: ColumnClick
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
        onColumnClick: ColumnClick
    },
    ])
    const [items, setItems] = useState(userData);
    const [selectionDetails, setSelectionDetails] = useState('');
    const [isModalSelection, setIsModalSelection] = useState(true);
    const [isCompactMode, setIsCompactMode] = useState(false);
    const [announcedMessage, setmessage] = useState("");
    const [renderKey, setRenderKey] = useState(0); // State to force re-render

    const [pageSize, setPageSize] = useState(20);
    const [pageNumber, setPageNumber] = useState(1);
    const [indexOfFirstItem, setIndexOfFirstItem] = useState(1)
    const [indexOfLastItem, setIndexOfLastItem] = useState(20);
    // const indexOfLastItem = pageNumber*pageSize ;
    // const indexOfFirstItem = indexOfLastItem - pageSize ;
    const [pageItems, setPageItems] = useState(items.slice(indexOfFirstItem - 1, indexOfLastItem + 1));


    const selection = useMemo(() => new Selection({
        onSelectionChanged: () => {
            setSelectionDetails(getSelectionDetails());
        },
        getKey: (item) => item.id,
    }), [items]);

    useEffect(() => {
        // Update render key when selection changes
        setRenderKey(prevKey => prevKey + 1);
    }, [selectionDetails]);

    const getSelectionDetails = useCallback(() => {
        const selectionCount = selection.getSelectedCount();
        console.log('something changes')
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

        const filteredItems = text ? userData.filter(i => i.first_name.toLowerCase().includes(text.toLowerCase()) || i.gender.toLowerCase().includes(text.toLowerCase()) || i.email.toLowerCase().includes(text.toLowerCase()) || i.country.toLowerCase().includes(text.toLowerCase())) : userData;

        // Update the items state with the filtered data.
        setItems(filteredItems);
    };

    const onChangeCompactMode = (ev, checked) => {
        setIsCompactMode(checked);
    };
    const onChangeModalSelection = (ev, checked) => {
        setIsModalSelection(checked);
    };
    const ItemInvoked = (item) => {
        alert(`Item invoked: ${item.id} ${item.first_name}`);
    };
    const onPageChange = (currentPage, PageSize) => {
        console.log("page attribute changed");
        setPageNumber(currentPage);
        setPageSize(PageSize);
        // setPageItems([items.slice(indexOfFirstItem ,indexOfLastItem) ]);
    }

    useEffect(()=>{
        setIndexOfLastItem(pageNumber * pageSize);
        setIndexOfFirstItem(pageNumber * pageSize - pageSize + 1);
        // setPageItems(items.slice(indexOfFirstItem-1 , indexOfLastItem))
    },[pageNumber ,pageSize ])

    useEffect(() => {
        setItems(userData);
    }, [])

    // useEffect(() => {
    //     setPageItems(items.slice(indexOfFirstItem - 1, indexOfLastItem));
    //     // console.log(pageItems);
    // }, [items])

    useEffect(() => {
        // console.log(pageNumber);
        // console.log(pageSize);
        // console.log(indexOfFirstItem);
        // console.log(indexOfLastItem);
        console.log("Check page attribute changes");
        setPageItems(items.slice(indexOfFirstItem - 1, indexOfLastItem));
    }, [indexOfLastItem, indexOfFirstItem])
    
    useEffect(()=>{
        // console.log(items);   
        setPageItems(items.slice(indexOfFirstItem-1 , indexOfLastItem));     
    },[items,pageSize ,pageNumber])


    

    return <>
        <div>

            <div className={classNames.controlWrapper}>
                {/* <Toggle
                    label="Enable compact mode"
                    checked={isCompactMode}
                    onChange={onChangeCompactMode}
                    onText="Compact"
                    offText="Normal"
                    styles={controlStyles}
                />
                <Toggle
                    label="Enable modal selection"
                    checked={isModalSelection}
                    onChange={onChangeModalSelection}
                    onText="Modal"
                    offText="Normal"
                    styles={controlStyles}
                /> */}
                <TextField label="Filter by first name:" onChange={onChangeText} styles={controlStyles} />
                <Announced message={`Number of items after filter applied: ${items.length}.`} />
            </div>
            <Pagination2 items={items} onPageChange={onPageChange} ></Pagination2>
            {/* <Pagination count={10} showFirstButton showLastButton /> */}

            <div className={classNames.selectionDetails}>
                {selectionDetails}</div>
            <Announced message={selectionDetails} />
            {/* {announcedMessage ? <Announced message={announcedMessage} />:undefined} */}

            {isModalSelection ? (<>

                <MarqueeSelection selection={selection}>
                    <DetailsList
                        key={renderKey}
                        items={pageItems}
                        compact={isCompactMode}
                        columns={columns}
                        selectionMode={SelectionMode.multiple}
                        setKey="set"
                        layoutMode={DetailsListLayoutMode.justified}
                        // isHeaderVisible={true}
                        selection={selection}
                        // onColumnHeaderClick={}
                        selectionPreservedOnEmptyClick={true}
                        // enterModalSelectionOnTouch={true}
                        ariaLabelForSelectionColumn="Toggle selection"
                        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                        checkButtonAriaLabel="select row"
                        onItemInvoked={ItemInvoked}

                    />
                </MarqueeSelection>
            </>
            ) : (
                <DetailsList
                    items={items}
                    compact={isCompactMode}
                    columns={columns}
                    selectionMode={SelectionMode.none}
                    setKey="none"
                    // getKey={getKey}
                    layoutMode={DetailsListLayoutMode.justified}
                    isHeaderVisible={true}
                    onItemInvoked={ItemInvoked}
                />
            )}
        </div>
    </>
}

export default ListPaged;