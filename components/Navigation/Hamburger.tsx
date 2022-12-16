import React from 'react'

interface Props {
    openMenu: boolean,
    onClick: any
}

export const Hamburger: React.FC<Props> = ({ openMenu, onClick }) => {
    return (
        <div className="relative mt-[-1rem] z-50 md:hidden" onClick={onClick}>
            <span
                className={
                    openMenu
                        ? `rotate-[-135deg] bg-white rounded-[10px] w-[2rem] h-[3px] absolute top-[3px] mt-[0.5rem] right-0 transition-[all 1s ease-in-out] md:hidden sm:block `
                        : ` w-[2rem] h-[3px] bg-exxDark rounded-[10px] absolute mt-[0.5rem] right-0 transition-[all 1s ease-in-out] md:hidden sm:block `
                }
            />

            <span
                className={
                    openMenu
                        ? `w-[2rem] h-[3px] bg-none absolute  right-0 transition-[all 1s ease-in-out] md:hidden sm:block `
                        : ` w-[2rem] h-[3px] bg-exxDark rounded-[10px] absolute right-0 transition-[all 1s ease-in-out] md:hidden sm:block `
                }
            />

            <span
                className={
                    openMenu
                        ? `rotate-[135deg] bg-white rounded-[10px] w-[2rem] h-[3px] absolute mt-[1rem] top-[-5px] right-0 transition-[all 1s ease-in-out] md:hidden sm:block `
                        : ` w-[2rem] h-[3px] bg-exxDark rounded-[10px] absolute mt-[1rem] right-0 transition-[all 1s ease-in-out] md:hidden sm:block `
                }
            />
        </div>
    );
}