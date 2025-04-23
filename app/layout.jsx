import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
export const metadata = {
    title: 'Property Pulse',
    description: 'Find the perfect rental property',
    keywords: 'rental,property,real state,'
};
const MainLayout = ({children}) => {
    return (
    
    <AuthProvider>
       <html>
        <body>
            <Navbar />
               <main> {children}</main>
            <Footer />
        </body>
         </html>  
      </AuthProvider>
    );
}
 
export default MainLayout;