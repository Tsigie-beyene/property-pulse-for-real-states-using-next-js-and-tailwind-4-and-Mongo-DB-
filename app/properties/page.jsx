import PropertyCard from '@/components/PropertyCard';
import Property from '@/models/Property';
import connectDB from '@/config/database';

export default async function PropertiesPage () {
    await connectDB(); // Connect to the database
    const properties = await Property.find({}).lean(); // Fetch properties from the database
    return ( 
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto m-auto px-4 py-6' >
                {properties.length ===0? (<p>No properties found</p>):(
                    <div className='gird grid-cols-1 md:grid-cols-3 gap-6'> 
                    {properties.map((property) => (
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



    );
}
 
 