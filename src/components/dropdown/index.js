import React, { useState, useEffect } from 'react'
import classname from 'classnames'

const Items = ({ items, handleSelectItem }) => {
  return (
    <div className="items">
      {
        items.map((item, index) =>
          <span 
            key={index} 
            className="item"
            onClick={
              () => handleSelectItem(item.value, item.label)
            }
          >
            {item.label}
          </span>
        )
      }
    </div>
  )
}

const Dropdown = ({ placeHolder, items, onChange, variant, initialSelected, reset, setReset }) => {
  const [isActive, setIsActive] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState('')

  const handleClose = () => {
    setIsActive(false)
  }

  const handleSelectItem = (value, label) => {
    handleClose()
    setSelectedLabel(label)
    onChange(value)
  }

  useEffect(() => {
    document.addEventListener('click', handleClose)
    return () => {
      document.removeEventListener('click', handleClose)
    }
  }, [])

  useEffect(() => {
    const {label} = initialSelected
    setSelectedLabel(label)
  }, [])

  useEffect(() => {
    const {label} = initialSelected
    if(reset) {
      setSelectedLabel(label)
      setReset(false)
    }
  }, [reset])

  return (
    <div
      className={
        classname(
          'dropdown', 
          variant, {
            '-active': isActive
          }
        )
      }
    >
      <label 
        onClick={e => {
          e.nativeEvent.stopImmediatePropagation();
          setIsActive(true)
        }}
        className={
          classname(
            "selected",
            {'-placeholder': placeHolder && !selectedLabel}
          )
        }
      >
        {selectedLabel || placeHolder}
        <i className={'icon-chevron-down'}></i>
      </label>
      <Items items={items} handleSelectItem={handleSelectItem} />
    </div>
  )
}

Dropdown.defaultProps = {
  placeHolder: '',
  variant: '',
  items: [],
  onChange: () => false,
  initialSelected: null,
  reset: false
}

export default Dropdown