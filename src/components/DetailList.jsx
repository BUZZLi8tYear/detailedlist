


// import React, { useState, useEffect, useMemo } from 'react';
// import { TextField } from '@fluentui/react/lib/TextField';
// import { Toggle } from '@fluentui/react/lib/Toggle';
// import { Announced } from '@fluentui/react/lib/Announced';
// import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
// import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode } from '@fluentui/react/lib/DetailsList';
// import { mergeStyleSets } from '@fluentui/react/lib/Styling';
// import { initializeIcons } from '@fluentui/react/lib/Icons';
// import userData from '/public/DATA.js';

// // initializeIcons();

// const classNames = mergeStyleSets({
//   controlWrapper: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   selectionDetails: {
//     marginBottom: '20px',
//   },
// });

// const controlStyles = {
//   root: {
//     margin: '0 30px 20px 0',
//     maxWidth: '300px',
//   },
// };

// const DetailList = () => {
//   const [columns, setColumns] = useState([
//     {
//       key: 'column1',
//       name: 'ID',
//       fieldName: 'id',
//       minWidth: 50,
//       maxWidth: 70,
//       isResizable: true,
//       isSorted: true,
//       isSortedDescending: false,
//       data: 'number',
//       isPadded: true,
//     },
//     {
//       key: 'column2',
//       name: 'First Name',
//       fieldName: 'first_name',
//       minWidth: 100,
//       maxWidth: 150,
//       isResizable: true,
//       data: 'string',
//       isPadded: true,
//       // onColumnClick:onColumnClick 
//     },
//     {
//       key: 'column3',
//       name: 'Email',
//       fieldName: 'email',
//       minWidth: 150,
//       maxWidth: 250,
//       isResizable: true,
//       data: 'string',
//       isPadded: true,
//     },
//     {
//       key: 'column4',
//       name: 'Gender',
//       fieldName: 'gender',
//       minWidth: 70,
//       maxWidth: 90,
//       isResizable: true,
//       data: 'string',
//       isPadded: true,
//     },
//     {
//       key: 'column5',
//       name: 'Country',
//       fieldName: 'country',
//       minWidth: 100,
//       maxWidth: 150,
//       isResizable: true,
//       data: 'string',
//       isPadded: true,
//     },
//   ]);

//   const [items, setItems] = useState([]);
//   const [selectionDetails, setSelectionDetails] = useState('');
//   const [isModalSelection, setIsModalSelection] = useState(false);
//   const [isCompactMode, setIsCompactMode] = useState(false);
//   const [announcedMessage, setAnnouncedMessage] = useState('');

//   const selection = useMemo(() => new Selection({
//     onSelectionChanged: () => {
//       setSelectionDetails(getSelectionDetails());
//     },
//     getKey: (item) => item.id.toString(),
//   }), []);

//   useEffect(() => {
//     setItems(userData);
//   }, []);

//   const getSelectionDetails = () => {
//     const selectionCount = selection.getSelectedCount();
//     switch (selectionCount) {
//       case 0:
//         return 'No items selected';
//       case 1:
//         return '1 item selected: ' + selection.getSelection()[0].first_name;
//       default:
//         return `${selectionCount} items selected`;
//     }
//   };

//   const onColumnClick = (event, column) => {
//     const newColumns = columns.slice();
//     const currColumn = newColumns.filter(currCol => column.key === currCol.key)[0];
//     newColumns.forEach(newCol => {
//       if (newCol === currColumn) {
//         currColumn.isSortedDescending = !currColumn.isSortedDescending;
//         currColumn.isSorted = true;
//       } else {
//         newCol.isSorted = false;
//         newCol.isSortedDescending = true;
//       }
//     });
//     const newItems = copyAndSort(items, currColumn.fieldName, currColumn.isSortedDescending);
//     setColumns(newColumns);
//     setItems(newItems);
//     setAnnouncedMessage(`${currColumn.name} is sorted ${currColumn.isSortedDescending ? 'descending' : 'ascending'}`);
//   };

//   const copyAndSort = (items, columnKey, isSortedDescending) => {
//     const key = columnKey;
//     return items.slice(0).sort((a, b) => {
//       if (a[key] < b[key]) {
//         return isSortedDescending ? 1 : -1;
//       }
//       if (a[key] > b[key]) {
//         return isSortedDescending ? -1 : 1;
//       }
//       return 0;
//     });
//   };

//   const onChangeCompactMode = (ev, checked) => {
//     setIsCompactMode(checked);
//   };

//   const onChangeModalSelection = (ev, checked) => {
//     setIsModalSelection(checked);
//   };

//   const onChangeText = (ev, text) => {
//     setItems(text ? items.filter(i => i.first_name.toLowerCase().includes(text.toLowerCase())) : userData);
//   };

//   const onItemInvoked = (item) => {
//     alert(`Item invoked: ${item.id} ${item.first_name}`);
//   };
//   const getKey = (item, index) => {
//     return item.key;
//   };
//   return (
//     <div>
//       <div className={classNames.controlWrapper}>
//         <Toggle
//           label="Enable compact mode"
//           checked={isCompactMode}
//           onChange={onChangeCompactMode}
//           onText="Compact"
//           offText="Normal"
//           styles={controlStyles}
//         />
//         <Toggle
//           label="Enable modal selection"
//           checked={isModalSelection}
//           onChange={onChangeModalSelection}
//           onText="Modal"
//           offText="Normal"
//           styles={controlStyles}
//         />
//         <TextField label="Filter by first name:" onChange={onChangeText} styles={controlStyles} />
//         <Announced message={`Number of items after filter applied: ${items.length}.`} />
//       </div>
//       <div className={classNames.selectionDetails}>{selectionDetails}</div>
//       {isModalSelection ? (
//         <MarqueeSelection selection={selection}>
//           <DetailsList
//             items={items}
//             compact={isCompactMode}
//             columns={columns}
//             selectionMode={SelectionMode.multiple}
//             setKey="multiple"
//             layoutMode={DetailsListLayoutMode.justified}
//             isHeaderVisible={true}
//             selection={selection}
//             selectionPreservedOnEmptyClick={true}
//             onItemInvoked={onItemInvoked}
//             enterModalSelectionOnTouch={true}
//             ariaLabelForSelectionColumn="Toggle selection"
//             ariaLabelForSelectAllCheckbox="Toggle selection for all items"
//             checkButtonAriaLabel="select row"
//           />
//         </MarqueeSelection>
//       ) : (
//         <DetailsList
//           items={items}
//           compact={isCompactMode}
//           columns={columns}
//           selectionMode={SelectionMode.none}
//           setKey="none"
//           getKey ={getKey}
//           layoutMode={DetailsListLayoutMode.justified}
//           isHeaderVisible={true}
//           onItemInvoked={onItemInvoked}
//         />
//       )}
//     </div>
//   );
// };

// export default DetailList;



import React, { useState, useEffect, useMemo } from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Announced } from '@fluentui/react/lib/Announced';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode } from '@fluentui/react/lib/DetailsList';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import userData from '/public/DATA.js';
import { initializeIcons } from '@fluentui/react';


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

const DetailList = () => {
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
      // onColumnClick:onColumnClick
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
    },
  ]);

  const [items, setItems] = useState([]);
  const [selectionDetails, setSelectionDetails] = useState('');
  const [isModalSelection, setIsModalSelection] = useState(false);
  const [isCompactMode, setIsCompactMode] = useState(false);
  const [announcedMessage, setAnnouncedMessage] = useState('');

  const selection = useMemo(() => new Selection({
    onSelectionChanged: () => {
      setSelectionDetails(getSelectionDetails());
    },
    getKey: (item) => item.id.toString(),
  }), []);

  useEffect(() => {
    setItems(userData);
  }, []);

  const getSelectionDetails = () => {
    const selectionCount = selection.getSelectedCount();
    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + selection.getSelection()[0].first_name;
      default:
        return `${selectionCount} items selected`;
    }
  };

  const onColumnClick = (ev, column) => {
    const newColumns = columns.slice();
    const clickedColumn = newColumns.find(col => col.key === column.key);

    if (clickedColumn) {
      // Toggle sorting properties for the clicked column
      clickedColumn.isSortedDescending = !clickedColumn.isSortedDescending;
      clickedColumn.isSorted = true;

      // Reset sorting properties for other columns
      newColumns.forEach(col => {
        if (col !== clickedColumn) {
          col.isSorted = false;
          col.isSortedDescending = true;
        }
      });

      // Sort items based on the clicked column
      const newItems = copyAndSort(items, clickedColumn.fieldName, clickedColumn.isSortedDescending);

      // Update state with new columns, sorted items, and announcement message
      setColumns(newColumns);
      setItems(newItems);
      setAnnouncedMessage(`${clickedColumn.name} is sorted ${clickedColumn.isSortedDescending ? 'descending' : 'ascending'}`);
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

  const onChangeCompactMode = (ev, checked) => {
    setIsCompactMode(checked);
  };

  const onChangeModalSelection = (ev, checked) => {
    setIsModalSelection(checked);
  };

  const onChangeText = (ev, text) => {
    setItems(text ? items.filter(i => i.first_name.toLowerCase().includes(text.toLowerCase())) : userData);
  };

  const onItemInvoked = (item) => {
    alert(`Item invoked: ${item.id} ${item.first_name}`);
  };

  const getKey = (item, index) => {
    return item.key;
  };

  return (
    <div>
      <div className={classNames.controlWrapper}>
        <Toggle
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
        />
        <TextField label="Filter by first name:" onChange={onChangeText} styles={controlStyles} />
        <Announced message={`Number of items after filter applied: ${items.length}.`} />
      </div>
      <div className={classNames.selectionDetails}>{selectionDetails}</div>
      {isModalSelection ? (
        <MarqueeSelection selection={selection}>
          <DetailsList
            items={items}
            compact={isCompactMode}
            columns={columns}
            selectionMode={SelectionMode.multiple}
            setKey="multiple"
            layoutMode={DetailsListLayoutMode.justified}
            isHeaderVisible={true}
            selection={selection}
            selectionPreservedOnEmptyClick={true}
            onItemInvoked={onItemInvoked}
            enterModalSelectionOnTouch={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="select row"
          />
        </MarqueeSelection>
      ) : (
        <DetailsList
          items={items}
          compact={isCompactMode}
          columns={columns}
          selectionMode={SelectionMode.none}
          setKey="none"
          getKey ={getKey}
          layoutMode={DetailsListLayoutMode.justified}
          isHeaderVisible={true}
          onItemInvoked={onItemInvoked}
        />
      )}
    </div>
  );
};

export default DetailList;

