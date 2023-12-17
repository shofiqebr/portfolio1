

const Education = () => {
    return (
        <div>
             <h1 className="flex justify-center items-center text-5xl font-bold p-10">Education</h1>

             <div className="flex justify-evenly">
                <div>
                    <h2 className="text-xl font-semibold">Higher Secondary</h2>
                    <p className="text-lg font-medium">Cambrian College </p>
                    <p>Group science</p>
                    <p>GPA 5 out of 5</p>

                </div>
                <div>
                <h2 className="text-xl font-semibold">Bsc in Leather Engineering</h2>
                    <p className="text-lg font-medium">Institute of Leather Engineering and Technology (University of Dhaka) </p>
                    <p>Subject Leather Engineering</p>
                    <p>GPA 3 out of 4</p>
                </div>
             </div>
        </div>
    );
};

export default Education;