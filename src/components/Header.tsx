export function Header() {
    return (
        <>
            <header className=" flex flex-col justify-between items-center pt-3 pl-14 border-b-[1px] border-white p-3 md:flex-row my-2">
                <span className="flex items-center gap-4">
                    <img src="src/assets/images/valdir logo.jpg" 
                    alt="homem com cara de paisagem, logo do programa" 
                    className="rounded-full w-20"
                    />
                    <h1 className="text-5xl font-bold font-ubuntu">valdir</h1>
                </span>

                <nav className="flex flex-row justify-around w-[537px] font-questrial text-3xl leading-[30.9px]">
                        <a href="./App.tsx">página inicial</a>
                        <a href="../pages/Ouvir.tsx">ouvir</a>
                        <a href="../pages/Sobre.tsx">sobre</a>
                </nav>
            </header>
        </>
    )
}