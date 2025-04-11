import "./global.css";
export const metadata = {
    title: 'Property Pulse',
    description: 'Find the perfect rental property',
    keywords: 'rental,property,real state,'
};
const MainLayout = ({children}) => {
    return (<html>

        <body>
            <main> {children}</main>
        </body>
    </html>  );
}
 
export default MainLayout;