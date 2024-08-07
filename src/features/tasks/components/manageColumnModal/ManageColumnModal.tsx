import {useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {Box, Button, Modal, TextInput, Title} from '@mantine/core'
import {useForm} from '@mantine/form'
import {ModalMode} from 'types'
import {useManageColumnContext} from 'contexts'
import {useCreateColumn, useEditColumn} from 'hooks'
import classes from './ManageColumnModal.module.css'

export const ManageColumnModal = (): JSX.Element => {
  const {t} = useTranslation()
  const {column, setColumn, manageColumnModalOpened, closeManageColumnModal} =
    useManageColumnContext()

  const mode = column?.id ? ModalMode.EDIT : ModalMode.CREATE

  const {mutate, isPending} =
    mode === ModalMode.EDIT ? useEditColumn() : useCreateColumn()

  useEffect(() => {
    form.setValues({title: column?.title ?? ''})
  }, [column?.title])

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
    setColumn()
    closeManageColumnModal()
  }

  return (
    <Modal
      opened={manageColumnModalOpened}
      onClose={handleClose}
      title={
        <Title order={5}>
          {t(
            `tasks.manageColumnModal.${mode === ModalMode.EDIT ? 'editColumn' : 'createColumn'}`,
          )}
        </Title>
      }
      size={'lg'}
    >
      <form
        onSubmit={form.onSubmit((values) =>
          mutate(
            {title: values.title, columnId: column?.id},
            {onSuccess: handleClose},
          ),
        )}
      >
        <TextInput
          data-autofocus
          withAsterisk
          label={t('tasks.manageColumnModal.title')}
          placeholder={t('tasks.manageColumnModal.titlePlaceholder')}
          {...form.getInputProps('title')}
        />
        <Box className={classes.buttonsContainer}>
          <Button onClick={closeManageColumnModal}>
            {t('general.cancel')}
          </Button>
          <Button type="submit" loading={isPending} disabled={!form.isValid()}>
            {t(`general.${mode === ModalMode.EDIT ? 'edit' : 'create'}`)}
          </Button>
        </Box>
      </form>
    </Modal>
  )
}
