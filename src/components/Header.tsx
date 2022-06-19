export function Header() {
    return (
        <>
            <header className=" flex flex-row justify-between items-center pt-3 pl-14 border-b-[1px] border-white p-3">
                <span className="flex items-center gap-4">
                    <img src="src/assets/images/valdir logo.jpg" 
                    alt="homem com cara de paisagem, logo do programa" 
                    className="rounded-full w-20"
                    />
                    <h1 className="text-5xl font-bold font-ubuntu">valdir</h1>
                </span>

                <nav>
                    <ul className="flex justify-between w-80 font-questrial text-3xl leading-[30.9px]">
                        <li>página inicial</li>
                        <li>ouvir</li>
                        <li>sobre</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}