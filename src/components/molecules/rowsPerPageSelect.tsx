import { Select } from '@mantine/core'
import React from 'react'
import CustomText from '../atoms/customText'


interface Props {
  handlerRowsPerPage: (value: number) => void
}
const RowsPerPageSelect = ({ handlerRowsPerPage }: Props) => {
  return (
    <div>
      <CustomText
        text='Rows per page:'
        className='mt-4'
      />
      <Select
        onChange={(value) => {
          handlerRowsPerPage(Number(value))
        }}
        placeholder="10"
        defaultValue={'10'}
        data={[
          { value: '10', label: '10' },
          { value: '20', label: '20' },
          { value: '30', label: '30' },
          { value: '40', label: '40' },
          { value: '50', label: '50' },
        ]}
      />
    </div>
  )
}

export default RowsPerPageSelect