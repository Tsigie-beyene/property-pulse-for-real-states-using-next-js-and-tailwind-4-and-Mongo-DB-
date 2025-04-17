import properties from '@/properties.json';
import PropertyCard  from './PropertyCard.jsx';
import Link from 'next/link';

const HomeProperties = () => {
    const recentProperties = properties.slice(0, 3); // Get the first 3 properties
    return (
    <>
    <section className='px-4 py-6'>
    <div className='container-xl lg:container m-auto m-auto px-4 py-6' >
        {properties.length ===0? (<p>No properties found</p>):(
            <div className='gird grid-cols-1 md:grid-cols-3 gap-6'> 
            <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
                Recent Properties
            </h2>
            {recentProperties.map((property) => (
                <PropertyCard
                    key={property._id}
                    property={property}/> // Pass the entire property object as a prop
                    // onClick={() => handlePropertyClick(property._id)} // If you want to handle clicks on the card
                    // or you can use the Link component to navigate to the details page
            )
             

            )}
            
            </div>
        )}
    </div>
    </section>
    <section className='m-auto max-w-lg my-6 px-6'>

        <Link href="/properties" className='block bg-black text-white text-center py-4 rounded-xl hover:bg-gray-700'>
        View All Properties 
        </Link>
       
    </section>
    </>
    );
}
 
export default HomeProperties;