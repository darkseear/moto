import React, { useEffect } from 'react'

const SelectSortProduct = ({ stateArr, setStateArr }) => {

    const [ selectValue, setSelectValue ] = React.useState('name');

    const onPressSort = (sort) => {
        setSelectValue(sort)
        console.log(sort)
        setStateArr([...stateArr].sort((a, b)=> a[selectValue].localeCompare(b[selectValue])))
    }

    const onChangeSelectOptions = (e) => {
        onPressSort(e.target.value);
    }

    return (
        <select value={selectValue} style={{ width:'450px', height:'50px', fontSize:'30px' }} onChange={ onChangeSelectOptions } name="select_sort_product" id="select_sort_product">
            <option value="name" >Сортировать по названию</option>
            <option value="category_name" >Сортировать по категории</option>
        </select>
    )
}

export default SelectSortProduct
