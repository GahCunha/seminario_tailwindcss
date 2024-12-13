export function CardSkill({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <>
            <div className={`flex aspect-square w-40 lg:w-[186px] flex-col items-center justify-center space-y-4 rounded-md border-2 border-foreground bg-background transition-colors hover:bg-foreground hover:text-background hover:animate-pulse ${className}`}>
                {children}
            </div>
        </>
    );
}
