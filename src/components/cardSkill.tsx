export function CardSkill({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className=" border-2 bg-background justify-center flex items-center  rounded-md border-foreground hover:bg-foreground hover:text-background transition-colors aspect-square w-[186px]">
                {children}
            </div>
        </>
    )
}
