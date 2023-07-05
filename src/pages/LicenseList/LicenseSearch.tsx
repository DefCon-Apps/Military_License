import { useState } from "react";

const LicenseSearch = () => {
  const [text, setText] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value);
  const search = () => console.log(`search value : ${text}`);

  return (
    <div className="flex flex-row w-full bg-orange-100 rounded-lg drop-shadow mt-1 mb-2.5 pt-1 pr-2 pb-1 pl-2">
      <input className="grow bg-transparent text-sm" type="search" placeholder="자격증 검색" onChange={onChange} value={text}></input>
      <button onClick={search}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.796 12.9685L11.8749 10.0478C11.743 9.91602 11.5643 9.84279 11.3768 9.84279H10.8992C11.7079 8.80871 12.1884 7.50806 12.1884 6.09316C12.1884 2.72727 9.46065 0 6.0942 0C2.72774 0 0 2.72727 0 6.09316C0 9.45904 2.72774 12.1863 6.0942 12.1863C7.50934 12.1863 8.81021 11.7059 9.84447 10.8974V11.3749C9.84447 11.5623 9.91772 11.741 10.0496 11.8729L12.9707 14.7935C13.2461 15.0688 13.6914 15.0688 13.9639 14.7935L14.7931 13.9645C15.0685 13.6891 15.0685 13.2438 14.796 12.9685ZM6.0942 9.84279C4.02276 9.84279 2.34392 8.16717 2.34392 6.09316C2.34392 4.02207 4.01982 2.34352 6.0942 2.34352C8.16564 2.34352 9.84447 4.01914 9.84447 6.09316C9.84447 8.16424 8.16857 9.84279 6.0942 9.84279Z" fill="#41644A"/>
        </svg>
      </button>
    </div>
  );
}

export default LicenseSearch;