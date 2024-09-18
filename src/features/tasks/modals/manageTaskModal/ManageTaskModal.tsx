import {useEffect} from 'react'
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
import {useKanbanTaskContext} from 'contexts'
import {useCreateTask, useUpdateTask} from 'hooks'
import classes from './ManageTaskModal.module.css'
import {InitialManageTaskModalFormValues} from './types'
import {initialValues} from './constants'
import {ModalMode} from 'types'

export const ManageTaskModal = (): JSX.Element => {
  const {t} = useTranslation()

  const {closeManageTaskModal, manageTaskModalOpened, column, task, setTask} =
    useKanbanTaskContext()

  const mode = task?._id ? ModalMode.EDIT : ModalMode.CREATE

  const {mutate, isPending} =
    mode === ModalMode.CREATE ? useCreateTask() : useUpdateTask()

  const form = useForm<InitialManageTaskModalFormValues>({
    initialValues,
    validate: {
      title: (value: string) => !value,
      description: (value: string) => !value,
      priority: (value: string) => !value,
    },
  })

  useEffect(() => {
    form.setValues({
      title: task?.title ?? '',
      description: task?.description ?? '',
      priority: task?.priority ?? '',
      eventDate: task?.eventDate ? new Date(task?.eventDate) : undefined,
    })
  }, [task])

  const prioritySelectOptions = [
    {label: t('priority.low'), value: 'low'},
    {label: t('priority.medium'), value: 'medium'},
    {label: t('priority.high'), value: 'high'},
    {label: t('priority.highest'), value: 'highest'},
  ]

  const handleClose = (): void => {
    form.reset()
    closeManageTaskModal()
    setTask()
  }

  return (
    <Modal
      opened={manageTaskModalOpened}
      onClose={handleClose}
      title={
        <Title order={5}>
          {mode === ModalMode.CREATE
            ? t('tasks.manageTaskModal.createTaskModalTitle')
            : t('tasks.manageTaskModal.editTaskModalTitle')}
        </Title>
      }
      size={'lg'}
      closeOnClickOutside={false}
    >
      <form
        onSubmit={form.onSubmit((values) =>
          mutate(
            {task: {...values, _id: task?._id}, columnId: column?.id},
            {onSuccess: handleClose},
          ),
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
        <Box className={classes.buttonsContainer}>
          <Button onClick={handleClose}>{t('general.cancel')}</Button>
          <Button
            variant="filled"
            type="submit"
            disabled={!form.isValid()}
            loading={isPending}
          >
            {mode === ModalMode.CREATE
              ? t('general.create')
              : t('general.save')}
          </Button>
        </Box>
      </form>
    </Modal>
  )
}
