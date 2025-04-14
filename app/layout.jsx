import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
    title: 'Property Pulse',
    description: 'Find the perfect rental property',
    keywords: 'rental,property,real state,'
};
const MainLayout = ({children}) => {
    return (<html>

        <body>
            <Navbar />
            <main> {children}</main>
            <Footer />
        </body>
    </html>  );
}
 
export default MainLayout;