import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { createPortal } from "react-dom";
import PropsTypes from "prop-types";

const Modal = ({
  isOpen,
  setIsOpen,
  title,
  danger = false,
  confirm = null,
}) => {
  const onConfirm = () => {
    if (confirm) confirm(true);
    setIsOpen(false);
  };

  if (isOpen) {
    return createPortal(
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-800">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold text-gray-700 dark:text-gray-300"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-3">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Press 'Yes' to confirm.
                    </p>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      type="button"
                      className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium transition-all duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        danger
                          ? "bg-red-100 text-red-900 hover:bg-red-200 dark:bg-red-500 dark:text-red-100 dark:hover:bg-red-600"
                          : "bg-blue-100 text-blue-900 hover:bg-blue-200"
                      }`}
                      onClick={onConfirm}
                    >
                      Yes
                    </button>
                    {danger ? (
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-100 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
                        onClick={() => setIsOpen(false)}
                      >
                        Cancel
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

Modal.propTypes = {
  isOpen: PropsTypes.bool.isRequired,
  setIsOpen: PropsTypes.func.isRequired,
  title: PropsTypes.string.isRequired,
  danger: PropsTypes.bool,
  confirm: PropsTypes.oneOfType([PropsTypes.func, PropsTypes.bool]),
};

export default Modal;
