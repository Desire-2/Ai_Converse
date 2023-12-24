import { MouseEventHandler, ReactElement } from 'react';

interface Props {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactElement;
}

const SidebarActionButton = ({ handleClick, children }: Props) => (
  <button
    className="min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100"
    onClick={handleClick}
  >
    {children}
  </button>
);
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2776294322568123"
     crossorigin="anonymous"></script>

export default SidebarActionButton;
