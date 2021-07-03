
export const COLUMNS = [
   
  {disableFilters: true,
    Header: 'First Name',
    accessor: 'firstName',
    
  },
  {disableFilters: true,
    Header: 'Last Name',
    accessor: 'lastName',
  
  },
  {disableFilters: true,
    Header: 'Email',
   accessor: 'email'
  },
  {disableFilters: true,
    Header: 'Phone',
    accessor: 'phone'
  },

  {
    Header: 'Address Line 1',
    accessor: 'addressLine1'
  },
  {
    Header: 'Address Line 2',
    accessor: 'addressLine2'
  },
  {
    Header: 'City',
    accessor: 'city'
  },
  {
    Header: 'State',
    accessor: 'state'
  },
  {
    Header: 'Country',
    accessor: 'country'
  },
  {
    Header: 'Message',
    accessor: 'message'
  },
  
  {
    Header: 'Date of Birth',
    accessor: 'date_of_birth',
  },
]

export const GROUPED_COLUMNS = [

  {disableFilters: true,
    Header: 'Name',
    columns: [
        {disableFilters: true,
            Header: 'First Name',
            accessor: 'firstName',
            
          },
          {disableFilters: true,
            Header: 'Last Name',
            accessor: 'lastName', 
          }
    ]
  },
  {
    Header: 'Contact Details',
    columns: [
        {disableFilters: true,
            Header: 'Email',
           accessor: 'email',
          
          },
          {disableFilters: true,
            Header: 'Phone',
            accessor: 'phone'
          },
    ]
  },
  {
    Header: 'Address Details',
    columns: [
        {disableFilters: true,
            Header: 'Address Line 1',
            accessor: 'addressLine1'
          },
          {disableFilters: true,
            Header: 'Address Line 2',
            accessor: 'addressLine2'
          },
          {disableFilters: true,
            Header: 'City',
            accessor: 'city'
          },
          {disableFilters: true,
            Header: 'State',
            accessor: 'state'
          },
          {disableFilters: true,
            Header: 'Country',
            accessor: 'country'
          }
    ]
  },
  {disableFilters: true,
    Header: 'Message',
    accessor: 'message'
  },
  
  {disableFilters: true,
    Header: 'Date',
    accessor: 'date',
  },
]