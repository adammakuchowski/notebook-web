import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Box, Button, Modal, Select, TextInput, Textarea} from '@mantine/core'
import classes from './CreateTaskModal.module.css'
import {CreateTaskModalProps} from './types'

export const CreateTaskModal = ({
  close,
  opened,
}: CreateTaskModalProps): JSX.Element => {
  const {t} = useTranslation()

  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: '',
  })

  const prioritySelectOptions = [
    {label: t('priority.low'), value: 'low'},
    {label: t('priority.medium'), value: 'medium'},
    {label: t('priority.high'), value: 'high'},
    {label: t('priority.highest'), value: 'highest'},
  ]

  const handleClose = (): void => {
    setTask({
      title: '',
      description: '',
      priority: '',
    })

    close()
  }

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title={t('tasks.createTaskModal.modalTitle')}
      size={'lg'}
    >
      <TextInput
        data-autofocus
        withAsterisk
        label={t('tasks.createTaskModal.title')}
        placeholder={t('tasks.createTaskModal.titlePlaceholder')}
        value={task.title}
        onChange={(event) =>
          setTask({...task, title: event.currentTarget.value})
        }
      />
      <Textarea
        withAsterisk
        label={t('tasks.createTaskModal.description')}
        placeholder={t('tasks.createTaskModal.descriptionPlaceholder')}
        mt="md"
        value={task.description}
        onChange={(event) =>
          setTask({...task, description: event.currentTarget.value})
        }
        autosize
        minRows={4}
        maxRows={12}
      />
      <Select
        withAsterisk
        label={t('tasks.createTaskModal.priority')}
        description={t('tasks.createTaskModal.priorityPlaceholder')}
        onChange={(_value, option) =>
          setTask({...task, priority: option.value})
        }
        data={prioritySelectOptions}
        mt="md"
      />
      <Box className={classes.createButtonContainer}>
        <Button
          variant="filled"
          onClick={() => console.log(123)}
          disabled={false}
          mt="lg"
        >
          {t('general.create')}
        </Button>
      </Box>
    </Modal>
  )
}
