"use client";

import { Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ConsultationButton } from "./PrimaryButton";
import ContactButtons from "./ContactButtons";

interface University {
  name: string;
  location: string;
  ranking: string;
}

interface DestinationModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  flag: string;
  description: string;
  features: string[];
  requirements: string[];
  topUniversities: University[];
}

export default function DestinationModal({
  isOpen,
  onClose,
  name,
  flag,
  description,
  features,
  requirements,
  topUniversities,
}: Readonly<DestinationModalProps>) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-y-0 right-0 z-10 overflow-hidden m-1 md:m-5 sm:rounded-3xl text-[var(--color-primary)]">
          <div className="flex min-h-screen">
            <TransitionChild
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <DialogPanel className="relative w-full max-w-xl transform overflow-hidden bg-gradient-to-br from-white/95 via-white/85 to-white/75 shadow-xl transition-all rounded-3xl flex flex-col h-[calc(100vh-2.5rem-env(safe-area-inset-bottom))]">
                <div className="flex flex-col h-full">
                  <div className="px-6 py-4 relative border-b border-dashed">
                    <div className="relative z-10 flex flex-col">
                      <div className="text-right w-full flex justify-end">
                        <button
                          type="button"
                          className="cursor-pointer flex items-center text-xs gap-0.5 pb-3 hover:opacity-60"
                          onClick={onClose}
                        >
                          <span className="">Close</span>
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex justify-between -mt-4">
                        <div className="flex space-x-4 justify-center">
                          <DialogTitle as="h3" className="text-lg font-bold">
                            Study in {name}
                          </DialogTitle>
                          <span className="text-lg">{flag}</span>
                        </div>
                      </div>
                      <p className="max-w-3xl text-xs">{description}</p>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto bg-white pb-[calc(5rem+env(safe-area-inset-bottom))]">
                    <div className="p-4 px-6">
                      <div className="max-w-5xl mx-auto">
                        {/* Features Section */}
                        <div className="divide-y divide-gray-200">
                          <section className="pb-6 pt-2">
                            <h2 className="text-base font-bold mb-3 text-[var(--color-primary)]">
                              Why Study in {name}?
                            </h2>
                            <div className="flex gap-3 flex-wrap">
                              {features.map((feature) => (
                                <div
                                  key={feature}
                                  className="px-6 justify-center bg-[var(--color-primary)]/5 font- py-3 rounded-2xl flex items-start"
                                >
                                  <p className="text-[var(--color-primary)] text-xs">
                                    {feature}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </section>

                          {/* Requirements Section */}
                          <section className="py-6">
                            <div className="mb-4">
                              <h2 className="text-base font-bold text-[var(--color-primary)]">
                                Visa Requirements
                              </h2>
                              <p className="text-red-600 text-xs">
                                {`Don't wait to contact us - we'll guide you through
                                obtaining these requirements!`}
                              </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {requirements?.map((requirement, index) => (
                                <div
                                  key={requirement}
                                  className="flex items-center rounded-2xl transition-all duration-300 text-[var(--color-primary)] text-xs"
                                >
                                  <div className="w-8 h-8 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mr-4">
                                    <span className=" font-bold">
                                      {index + 1}
                                    </span>
                                  </div>
                                  <p className="flex-1">{requirement}</p>
                                </div>
                              ))}
                            </div>
                          </section>

                          {/* Universities Section */}
                          <section className="py-6">
                            <h2 className="text-base font-bold mb-3 text-[var(--color-primary)]">
                              Top Universities
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {topUniversities.map((uni) => (
                                <div
                                  key={uni.name}
                                  className="p-1 rounded-2xl transition-colors w-full"
                                >
                                  <h5 className="font-medium text-sm text-[var(--color-primary)]">
                                    {uni.name}
                                  </h5>
                                  <span className="flex">
                                    <p className="text-xs text-[var(--color-secondary)]">
                                      {uni.location}
                                    </p>
                                  </span>
                                </div>
                              ))}
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                    {/* CTA Section */}
                    <section className="fixed bottom-0 left-0 right-0 bg-white py-6 px-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
                      <div className="flex justify-between items-center gap-4 max-w-2xl mx-auto">
                        <ContactButtons />
                        <ConsultationButton country={name} />
                      </div>
                    </section>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
