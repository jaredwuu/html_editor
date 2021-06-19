import React,{useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompressAlt,faExpandAlt} from '@fortawesome/free-solid-svg-icons'

const Editor = (props) => {
    const {
        language,
        displayName,
        value,
        onChange
    } = props

    const [open, setOpen] =useState(true);


    function handleChange(editor, data, value){
        onChange(value)
    }
    return (
        <div className={`text-white w-1/3 px-2 rounded-md `}>
            <div className={`flex px-2 justify-between ${open ? '':'flex-none items-left w-1/3'} rounded-t-md bg-gray-700 h-8 items-center`}>
                <div>
                    {displayName}
                </div>
                <button 
                className='bg-gray-600 rounded-sm'
                onClick={()=>setOpen(prevOpen=>!prevOpen)}
                >
                    <FontAwesomeIcon icon={open? faCompressAlt:faExpandAlt} />
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className={`${open ? '':'flex-none items-left w-1/3'} rounded-t-md `}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </div>
    )
}

export default Editor
