import {useTranslation} from 'react-i18next'
import {useForm} from '@mantine/form'
import {DateTimePicker} from '@mantine/dates'
import {Box, Button, Modal, Select, TextInput, Textarea} from '@mantine/core'
import classes from './CreateTaskModal.module.css'
import {CreateTaskModalProps} from './types'
import {useCreateTask} from 'hooks'

export const CreateTaskModal = ({
  close,
  opened,
}: CreateTaskModalProps): JSX.Element => {
  const {t} = useTranslation()
  const {mutate} = useCreateTask()

  const form = useForm({
    initialValues: {
      title: '',
      description: '',
      priority: null,
      eventDate: null,
    },

    validate: {
      title: (value) => !value,
      description: (value) => !value,
      priority: (value) => !value,
      eventDate: (value) => !value,
    },
  })

  const prioritySelectOptions = [
    {label: t('priority.low'), value: 'low'},
    {label: t('priority.medium'), value: 'medium'},
    {label: t('priority.high'), value: 'high'},
    {label: t('priority.highest'), value: 'highest'},
  ]

  const handleClose = (): void => {
    form.reset()
    close()
  }

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title={t('tasks.createTaskModal.modalTitle')}
      size={'lg'}
    >
      <form onSubmit={form.onSubmit((values) => mutate({task: values}))}>
        <TextInput
          data-autofocus
          withAsterisk
          label={t('tasks.createTaskModal.title')}
          placeholder={t('tasks.createTaskModal.titlePlaceholder')}
          {...form.getInputProps('title')}
        />
        <Textarea
          withAsterisk
          label={t('tasks.createTaskModal.description')}
          placeholder={t('tasks.createTaskModal.descriptionPlaceholder')}
          mt='md'
          {...form.getInputProps('description')}
          autosize
          minRows={4}
          maxRows={12}
        />
        <Select
          withAsterisk
          label={t('tasks.createTaskModal.priority')}
          description={t('tasks.createTaskModal.priorityDescription')}
          {...form.getInputProps('priority')}
          data={prioritySelectOptions}
          mt='md'
        />
        <DateTimePicker
          withAsterisk
          label={t('tasks.createTaskModal.eventDate')}
          placeholder={t('tasks.createTaskModal.eventDatePlaceholder')}
          {...form.getInputProps('eventDate')}
          mt='md'
        />
        <Box className={classes.createButtonContainer}>
          <Button
            variant='filled'
            type='submit'
            disabled={!form.isValid()}
            mt='lg'
          >
            {t('general.create')}
          </Button>
        </Box>
      </form>
    </Modal>
  )
}
