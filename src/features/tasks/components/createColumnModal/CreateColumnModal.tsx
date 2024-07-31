import {useTranslation} from 'react-i18next'
import {Box, Button, Modal, TextInput, Title} from '@mantine/core'
import {useCreateColumnContext} from 'contexts'
import {useCreateColumn} from 'hooks'
import classes from './CreateColumnModal.module.css'
import {useForm} from '@mantine/form'

export const CreateColumnModal = (): JSX.Element => {
  const {t} = useTranslation()
  const {mutate, isPending} = useCreateColumn()

  const {createColumnModalOpened, closeCreateColumnModal} =
    useCreateColumnContext()

  const form = useForm({
    initialValues: {
      title: '',
    },
    
    validate: {
      title: (value) => !value,
    },
  })

  const handleClose = (): void => {
    form.reset()
    closeCreateColumnModal()
  }

  return (
    <Modal
      opened={createColumnModalOpened}
      onClose={handleClose}
      title={<Title order={5}>{t('tasks.createColumnModal.modalTitle')}</Title>}
      size={'lg'}
    >
      <form
        onSubmit={form.onSubmit((values) =>
          mutate({title: values.title}, {onSuccess: handleClose}),
        )}
      >
        <TextInput
          data-autofocus
          withAsterisk
          label={t('tasks.createColumnModal.title')}
          placeholder={t('tasks.createColumnModal.titlePlaceholder')}
          {...form.getInputProps('title')}
        />
        <Box className={classes.buttonsContainer}>
          <Button onClick={closeCreateColumnModal}>
            {t('general.cancel')}
          </Button>
          <Button type='submit' loading={isPending} disabled={!form.isValid()}>
            {t('general.create')}
          </Button>
        </Box>
      </form>
    </Modal>
  )
}
