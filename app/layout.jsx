import "./global.css";
import Navbar from "@/components/Navbar";

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
        </body>
    </html>  );
}
 
export default MainLayout;