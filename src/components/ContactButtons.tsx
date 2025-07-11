"use client";

import { PrimaryButton } from "./PrimaryButton";

export default function ContactButtons() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2347068904268", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:airborneglobalconsult@gmail.com";
  };

  return (
    <div className="flex items-center space-x-4">
      <PrimaryButton
        onClick={handleWhatsAppClick}
        className="w-10 h-10 !p-0 rounded-full flex items-center justify-center"
      >
        <svg
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M19.44 4.552A10.413 10.413 0 0 0 12.044 1.5C6.281 1.5 1.59 6.168 1.588 11.906a10.341 10.341 0 0 0 1.396 5.203L1.5 22.5l5.543-1.447a10.483 10.483 0 0 0 4.997 1.266h.004c5.762 0 10.453-4.669 10.456-10.407a10.32 10.32 0 0 0-3.06-7.36Zm-7.396 16.01h-.004a8.706 8.706 0 0 1-4.423-1.205l-.317-.188-3.29.859.879-3.192-.207-.328a8.6 8.6 0 0 1-1.329-4.602c0-4.768 3.9-8.648 8.694-8.648a8.672 8.672 0 0 1 8.688 8.655c-.002 4.769-3.9 8.65-8.69 8.65Zm4.767-6.477c-.261-.13-1.547-.76-1.785-.847-.238-.086-.414-.13-.588.13-.174.261-.675.845-.827 1.02-.153.176-.305.195-.566.065-.261-.13-1.104-.404-2.102-1.29-.776-.69-1.3-1.541-1.453-1.801-.152-.26-.016-.402.115-.531.117-.117.26-.304.392-.456.13-.152.174-.26.26-.434.087-.173.044-.325-.02-.455-.066-.13-.589-1.41-.806-1.93-.213-.508-.428-.439-.588-.447-.152-.007-.328-.01-.501-.01a.962.962 0 0 0-.697.326c-.24.26-.914.89-.914 2.17 0 1.278.937 2.516 1.067 2.69.129.173 1.842 2.799 4.463 3.925.486.209.984.392 1.49.548.625.198 1.195.17 1.645.103.502-.075 1.546-.63 1.764-1.237.217-.607.217-1.127.152-1.236-.065-.108-.24-.174-.501-.303Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </PrimaryButton>
      <PrimaryButton
        onClick={handleEmailClick}
        className="w-10 h-10 !p-0 rounded-full flex items-center justify-center"
      >
        <svg
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.875 3.75H4.125A2.628 2.628 0 0 0 1.5 6.375v11.25a2.628 2.628 0 0 0 2.625 2.625h15.75a2.627 2.627 0 0 0 2.625-2.625V6.375a2.627 2.627 0 0 0-2.625-2.625Zm-.665 4.342-6.75 5.25a.75.75 0 0 1-.92 0l-6.75-5.25a.75.75 0 1 1 .92-1.184L12 11.8l6.29-4.892a.75.75 0 0 1 .92 1.184Z"></path>
        </svg>
      </PrimaryButton>
    </div>
  );
}
