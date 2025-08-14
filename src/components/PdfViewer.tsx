
const PdfViewer = ({ pdf, title }: { pdf: string; title: string }) => {
    return (
        <section className="px-4 md:px-32 lg:px-32 py-16">

            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-foreground">{title}</h2>
                <div className="w-24 bg-gradient-solar mx-auto mb-12 "> </div>
                <div className="relative w-full" style={{ aspectRatio: '1 / 1.414' }}>
                    <iframe
                        src={pdf}
                        title={title}
                        className="w-full h-full border-none"
                        style={{ border: 'none' }}
                    />
                </div>
            </div>
        </section>
    )
}

export default PdfViewer