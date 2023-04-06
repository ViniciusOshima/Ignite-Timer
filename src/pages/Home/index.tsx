import {
  HomeContainer,
  FormContainer,
  CountDownContainer,
  Separator,
  StartCountDouwnButton,
  TaskInput,
  // eslint-disable-next-line prettier/prettier
  MinutesAmountInput
} from './styles'

import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle(data) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="projeto uim" />
            <option value="haahaha" />
            <option value="simsalabim" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDouwnButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountDouwnButton>
      </form>
    </HomeContainer>
  )
}
