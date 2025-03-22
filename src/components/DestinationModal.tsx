"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PrimaryButton } from "./PrimaryButton";

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
}: DestinationModalProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl max-h-[90vh] overflow-y-auto">
                <div className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 px-6 py-8 relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-6xl">{flag}</span>
                        <Dialog.Title
                          as="h3"
                          className="text-3xl font-serif text-white font-bold"
                        >
                          Study in {name}
                        </Dialog.Title>
                      </div>
                      <button
                        type="button"
                        className="text-white/80 hover:text-white transition-colors"
                        onClick={onClose}
                      >
                        <span className="sr-only">Close</span>
                        <svg
                          className="h-8 w-8"
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
                    <p className="text-white/90 text-lg mt-4 max-w-3xl">
                      {description}
                    </p>
                  </div>
                </div>
                <div className="bg-white px-6 py-8">
                  <div className="max-w-5xl mx-auto">
                    {/* Key Features */}
                    <section className="mb-16">
                      <h4 className="text-3xl font-bold text-center mb-8 text-gray-800">
                        Why Study in {name}?
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-xl shadow-md flex items-start"
                          >
                            <span className="text-indigo-500 text-2xl mr-4">
                              ✓
                            </span>
                            <p className="text-gray-700">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Requirements */}
                    <section className="mb-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-inner">
                      <h4 className="text-3xl font-bold text-center mb-8 text-gray-800">
                        Visa Requirements
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {requirements?.map((requirement, index) => (
                          <div
                            key={index}
                            className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                          >
                            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                              <span className="text-indigo-600 font-bold">
                                {index + 1}
                              </span>
                            </div>
                            <p className="text-gray-700">{requirement}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Top Universities */}
                    <section className="mb-16">
                      <h4 className="text-3xl font-bold text-center mb-8 text-gray-800">
                        Top Universities
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {topUniversities.map((uni) => (
                          <div
                            key={uni.name}
                            className="bg-gray-50 p-6 rounded-xl text-center shadow-md"
                          >
                            <div className="text-indigo-600 font-bold text-lg mb-2">
                              {uni.ranking}
                            </div>
                            <h5 className="font-semibold text-gray-800 mb-2">
                              {uni.name}
                            </h5>
                            <p className="text-gray-600">{uni.location}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white rounded-2xl p-12 mb-8 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDU2IDAgTCAwIDEwMCBNIDI4IDAgTCAtMjggMTAwIE0gODQgMCBMIDI4IDEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
                      <div className="relative z-10">
                        <h4 className="text-4xl font-bold text-center mb-6">
                          Ready to Start Your Journey?
                        </h4>
                        <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto text-center leading-relaxed">
                          Get expert guidance on studying in {name}. Our team
                          will help you through every step of the process.
                        </p>
                        <div className="flex justify-center space-x-4">
                          <PrimaryButton
                            onClick={onClose}
                            className="bg-white text-indigo-600 hover:bg-gray-50 hover:text-indigo-700 shadow-lg transform hover:scale-105 transition-all duration-300"
                          >
                            Book Free Consultation
                          </PrimaryButton>
                          <button
                            type="button"
                            className="px-6 py-3 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 font-semibold"
                            onClick={onClose}
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
