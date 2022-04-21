import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

interface BaseDialogProps {
  open: boolean
  onClose: () => void
  title: string
  size: 'sm' | 'md' | 'lg' | 'xl'
}

const BaseDialog: React.FC<BaseDialogProps> = (props) => {
  const { open, onClose, title, size } = props
  let maxWidth = 'max-w-[430px]'
  switch (size) {
    case 'sm':
      maxWidth = 'max-w-[430px]'
      break
    case 'md':
      maxWidth = 'max-w-[430px]'
      break
    case 'lg':
      maxWidth = 'max-w-[430px]'
      break
    case 'xl':
      maxWidth = 'max-w-[810px]'
      break
  }
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        onClose={onClose}
        as="div"
        className={'fixed inset-0 z-[100] overflow-y-auto bg-black/[0.7]'}
      >
        <div className="min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full ${maxWidth} py-8 px-11 overflow-hidden text-left transition-all transform bg-white rounded-xl`}
            >
              <Dialog.Title as="h3" className="text-2xl text-gray-800">
                {title}
              </Dialog.Title>
              <div className="mt-2">{props.children}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default BaseDialog
