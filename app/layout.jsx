import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer/>
        </body>
         </html>  
      </AuthProvider>
    );
}
 
export default MainLayout;