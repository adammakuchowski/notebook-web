import {useTranslation} from 'react-i18next'
import {useForm} from '@mantine/form'
import {DateTimePicker} from '@mantine/dates'
import {
  Box,
  Button,
  Modal,
  Select,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core'
import {useManageTaskContext} from 'contexts'
import {useCreateTask} from 'hooks'
import classes from './CreateTaskModal.module.css'

export const CreateTaskModal = (): JSX.Element => {
  const {t} = useTranslation()
  const {mutate, isPending} = useCreateTask()
  const {closeManageTaskModal, manageTaskModalOpened, column} =
    useManageTaskContext()

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
    closeManageTaskModal()
  }

  return (
    <Modal
      opened={manageTaskModalOpened}
      onClose={handleClose}
      title={<Title order={5}>{t('tasks.createTaskModal.modalTitle')}</Title>}
      size={'lg'}
      closeOnClickOutside={false}
    >
      <form
        onSubmit={form.onSubmit((values) =>
          mutate({task: values, columnId: column.id}, {onSuccess: handleClose}),
        )}
      >
        <TextInput
          data-autofocus
          withAsterisk
          label={t('tasks.taskModal.title')}
          placeholder={t('tasks.taskModal.titlePlaceholder')}
          {...form.getInputProps('title')}
        />
        <Textarea
          withAsterisk
          label={t('tasks.taskModal.description')}
          placeholder={t('tasks.taskModal.descriptionPlaceholder')}
          mt="md"
          {...form.getInputProps('description')}
          autosize
          minRows={4}
          maxRows={12}
        />
        <Select
          withAsterisk
          label={t('tasks.taskModal.priority')}
          description={t('tasks.taskModal.priorityDescription')}
          {...form.getInputProps('priority')}
          data={prioritySelectOptions}
          mt="md"
        />
        <DateTimePicker
          label={t('tasks.taskModal.eventDate')}
          placeholder={t('tasks.taskModal.eventDatePlaceholder')}
          {...form.getInputProps('eventDate')}
          mt="md"
        />
        <Box className={classes.createButtonContainer}>
          <Button onClick={handleClose}>{t('general.cancel')}</Button>
          <Button
            variant="filled"
            type="submit"
            disabled={!form.isValid()}
            loading={isPending}
          >
            {t('general.create')}
          </Button>
        </Box>
      </form>
    </Modal>
  )
}
