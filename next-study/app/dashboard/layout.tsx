const DashboardLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <section>
            <nav className={"w-full bg-green-400 flex items-center justify-center"}>
                Next test project
            </nav>
            {children}
        </section>
    )
}

export default DashboardLayout;