import React, { FC, useMemo, useState } from 'react'
import {
  CollapsableItem, Input, Select, DatePicker, TimePicker, Button,
} from '@dragonlorde/sapfiron-ui-kit'
import { Styled } from './styles/CarGo.styled'
import { config } from './config'

const {
  CarGoContainer,
  InputContainer,
} = Styled

const CarGo:FC = () => {
  const [car, setCar] = useState('')
  const [carType, setCarType] = useState('')
  const [carName, setCarName] = useState('')
  const [carRegNumber, setRegNumber] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const onCar = (value: string) => {
    setCar(value)
    console.log(value)
  }

  const itemType = useMemo(() => {
    if (car) {
      return config.carsType[car]
    }
    return null
  }, [car])

  const onType = (value: string) => {
    setCarType(`${car}/${value}`)
    const result = config.carsTypeTech[car][value]
    setCarName(result.value)
    setRegNumber(result.label)
  }

  const contentSelect = useMemo(() => (
    <Select
      defaultValue="Выберите харкатеритиску"
      placeholder="Харкатеритиска ТС" width={270} items={itemType}
      onChange={onType}
    />
  ), [itemType, onType])

  return (
    <CarGoContainer>
      <CollapsableItem titleContent="Данные ТС">
        <InputContainer>
          <Select
            placeholder="Тип ТС" width={270} items={config.cars}
            onChange={onCar}
            defaultValue="Выберите тип ТС"
          />
          {contentSelect}
          <Input disabled placeholder="carName" value={carName} />
          <Input disabled value={carRegNumber} />
        </InputContainer>
      </CollapsableItem>
      {carName && carRegNumber && (
        <CollapsableItem titleContent="Выбор даты">
          <InputContainer>
            <DatePicker onChange={(dateString: string) => { setDate(dateString) }} />
            <TimePicker onChange={(dateString: string) => { setTime(dateString) }} />
          </InputContainer>
        </CollapsableItem>
      )}
      {date && time && (
        <CollapsableItem titleContent="Доп данные">
          <InputContainer>
            <Input placeholder="Название заявки" />
            <Input placeholder="Комаенатрий" />
          </InputContainer>
        </CollapsableItem>
      )}
      <InputContainer>
        {carName && carRegNumber && date && time && (
          <Button
            onClick={() => { // @ts-ignore
              window.location = '/carGoList'
            }}
            width={266}
          >
            К карте
          </Button>
        )}
      </InputContainer>
    </CarGoContainer>
  )
}

export default CarGo
