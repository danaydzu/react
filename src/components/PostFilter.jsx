import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div style={{flexDirection:'column', display: 'flex'}}>
            <MyInput
                style={{width: '150px'}}
                value={filter.query}
                placeholder={'Поиск'}
                onChange={e => setFilter({...filter , query: e.target.value})}
            />
            <MySelect
                style={{width: '150px'}}
                value={filter.sort}
                onChange={se => setFilter({...filter, sort: se})}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
    );
};

export default PostFilter;