import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import { CancelButton, SubmitButton } from "./Button";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "./base/Headless-ui-wrapper";
// import { XMarkIcon } from '@heroicons/react/24/outline'
export const PANEL_SIZE = {
  LARGE: "w-large-panel",
  SMALL: "w-small-panel",
} as const;
interface IPanelProps {
  isOpen: boolean;
  dismissPanel: () => void;
  title: string;
  children: ReactElement;
  panelSize: (typeof PANEL_SIZE)[keyof typeof PANEL_SIZE];
}
type Panel = (prosp: IPanelProps) => React.ReactElement;
export const DefaultPanel: Panel = ({
  title,
  isOpen,
  dismissPanel,
  children,
  panelSize = PANEL_SIZE.SMALL,
}: IPanelProps) => {
  return (
    <Dialog open={isOpen} onClose={dismissPanel} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className={twMerge(
                panelSize,
                "h-full pointer-events-auto relative transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700 "
              )}
            >
              {/* <TransitionChild>
                <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => dismissPanel()}
                    className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>x
                  </button>
                </div>
              </TransitionChild> */}
              <div className="flex h-full flex-col overflow-y-scroll bg-white p-panel-title shadow-xl">
                <DialogTitle className="flex  font-medium text-xl text-gray-900 h-panel-title items-center">
                  <span>{title}</span>
                  <button
                    type="button"
                    onClick={() => dismissPanel()}
                    title="close"
                    className="relative ml-auto rounded-md  focus:ring-2 focus:ring-white focus:outline-hidden"
                  >
                    X
                  </button>
                </DialogTitle>

                <div className="relative  flex-1">
                  {/* Your content */}
                  {children}
                </div>

                <div
                  className={twMerge("flex w-full h-panel-title items-center")}
                >
                  {true && (
                    <div className="">
                      <CancelButton onClick={() => null} />
                    </div>
                  )}
                  {true && (
                    <div className="ml-auto">
                      <SubmitButton onClick={() => null}>Submit</SubmitButton>
                    </div>
                  )}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
