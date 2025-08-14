import HeroSecondary from "@/components/HeroSecondary"
import Navigation from "@/components/Navigation"
import PdfViewer from "@/components/PdfViewer"
import { DocsPath } from '@/data/paths';
import TradeLicensePdf from '@/assets/Trade_License_2024-25.pdf';
import CertificateOfIncorporationPdf from '@/assets/Certificate_of_Incorporation.pdf';
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";


const Documents = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            {/* Hero Section */}
            <HeroSecondary paths={DocsPath} title='Documents' />
            {/* Trade License Section */}
            <PdfViewer pdf={TradeLicensePdf} title="Trade License" />
            {/* Certificate of IncorporationPdf Section*/}
            <PdfViewer pdf={CertificateOfIncorporationPdf} title="Certificate of Incorporation" />

            {/* Partners Section */}
            <Partners />

            {/* CTA Section */}
            <CTA />

            {/* Footer Section  */}
            <Footer />
        </div>
    )
}

export default Documents