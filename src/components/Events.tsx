const Events = () => {

    return (
        <div id="events" className="w-full bg-gray-50 py-16 text-center">
            <div className="container mx-auto space-y-10 lg:p-16 ">
                {/* Section Header */}
                <h2 className="text-4xl font-extrabold text-center text-secondary-dark font-montserrat ">
                    Events
                </h2>
                
                {/* Content Wrapper */}
                <div className="flex justify-center gap-12">
                    <iframe src="https://calendar.google.com/calendar/embed?height=780&wkst=1&ctz=Africa%2FNairobi&showPrint=0&showTitle=0&showCalendars=0&src=MWM3ZGVjNzNmMWExYmYzMmRkMzcxNWExMDJhOGM0M2NlNDZiMzZjY2Y2ZThmZGM5YWE5M2RmZTQzYWM5MWRiNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161" style={{border:"solid 1px #777", borderRadius:'10px'}} width="1040" height="780" frameBorder="0" scrolling="no"></iframe>
                </div>
            </div>
 
        </div>



    );
};

export default Events;
