import { Dialog } from "@headlessui/react";
type receiverProps = {
    gmail: string,
    from: boolean

}

export const EmailDraft: React.FC<receiverProps> = ({gmail, from}) => {
  return (
    <div className=' mb-1 flex items-center justify-between w-full'>
      <Dialog.Title
        as='h3'
        className='w-3/12 mr-2 text-lg font-medium leading-6 text-gray-900 font-bold'
      >
        {from?'From :':'To :'}
      </Dialog.Title>
      <Dialog.Title
        as='h3'
        className=' text-right w-9/12 pt-0.5  text-sm font-medium leading-6 text-gray-500 overflow-ellipsis overflow-hidden'
      >
        {gmail}
      </Dialog.Title>
    </div>
  );
};
