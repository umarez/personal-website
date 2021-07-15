import { Dialog, Transition } from "@headlessui/react";
import { useSession } from "next-auth/client";
import { useEffect } from "react";
import { Fragment, useState } from "react";
import { EmailDraft } from "./EmailDraft";

export const SendMail = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [val, setVal] = useState<string>("");
  let [email, setEmail] = useState<any>("");
  const [session, loading] = useSession();

  const to: string = "izzuddinumar13@gmail.com";

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    setEmail(session?.user?.email);
  }, [session]);

  let data = {
    to,
    val,
    email,
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (val.trim().length > 0) {
      fetch("/api/sendmail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("tidak boleh kosong");
    }
  };

  return (
    <>
      {
        <>
          <div className='inset-0 flex items-center justify-center '>
            <button
              type='button'
              onClick={() => {
                setTimeout(() => {
                  openModal();
                }, 300);
              }}
              className='w-32 h-8 lg:w-48 lg:h-10 bg-button text-[#F2ECEC] ml-2 shadow-shad md:mb-0 hover:bg-buttonHover'
            >
              Say Hi!
            </button>
          </div>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as='div'
              className='fixed inset-0 z-10 overflow-y-auto'
              onClose={closeModal}
            >
              <div className='min-h-screen px-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Dialog.Overlay className='fixed inset-0' />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className='inline-block h-screen align-middle'
                  aria-hidden='true'
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                    <EmailDraft gmail={`${session?.user?.email}`} from={true} />
                    <div
                      style={{
                        height: "0.5px",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                      }}
                      className='mb-1 w-full'
                    />
                    <EmailDraft
                      gmail={"izzuddinumar13@gmail.com"}
                      from={false}
                    />
                    <div className='mt-2'>
                      <form onSubmit={(e) => handleSubmit(e)}>
                        <textarea
                          className='w-full border min-h-[10rem] p-2'
                          value={val}
                          onChange={(e) => {
                            setVal(e.target.value);
                          }}
                        />
                        <p className='text-sm text-gray-500'>
                          The Email won&apos;t be recorded in your gmail sent
                          box but still sended to me 😄
                        </p>
                        <div className='mt-4 flex justify-end'>
                          <button
                            type='submit'
                            className='bg-red-700 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                            onClick={() => {
                              if (val.trim().length > 0) {
                                closeModal();
                              }
                            }}
                          >
                            Send!
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      }
    </>
  );
};
