import heroImage from '@/assets/hero-solar-panels.jpg';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface PathProps {
    page: string,
    link: string
}

const HeroSecondary = ({paths, title} : {paths: PathProps [] ; title: string}) => {
    return (
        <>
            <section className="relative h-64 bg-gradient-to-r from-slate-900 to-slate-700 flex items-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                        <Breadcrumb>
                            <BreadcrumbList className="text-xl opacity-90 text-solar-300">
                                {paths.map((path, index) => (
                                    <>
                                        {index < paths.length - 1 ? (
                                            <BreadcrumbItem key={index}>
                                                    <BreadcrumbLink href={path.link}>
                                                        {path.page}
                                                    </BreadcrumbLink>
                                            </BreadcrumbItem>
                                        ) : (
                                            <BreadcrumbItem key={index}>
                                                <BreadcrumbPage  className=' text-white'>{path.page}</BreadcrumbPage>
                                            </BreadcrumbItem>
                                        )}
                                        {index < paths.length - 1 && (
                                            <BreadcrumbSeparator>
                                                /
                                            </BreadcrumbSeparator>
                                        )}
                                    </>

                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSecondary