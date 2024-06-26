import Image from "next/image"

export default function labs(){
    return (
        <div className="bg-orange-50 flex flex-col p-10 max-sm:p-4">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        LABS
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        COMPUTER SCIENCE ENGINEERING
                    </p>
                </div>
            </div>
            {/* Lab list */}

            <div className="mb-10 flex flex-col lg:flex-row">
                <div className="flex flex-col">
                    <p className="text-red-900 font-bold text-2xl max-sm:text-1xl mb-4">
                        Computing Lab-1:
                    </p>
                    <div className="lg:w-2/3">
                        <p className="text-justify font-semibold pl-6">
                        Operating System lab uses the Linux OS (Fedora 16.0) to implement the operating
                        system management process, memory function, UNIX and
                        shell programming related to OS system call functions. This lab also deals
                        with courses like Object- Oriented Programming (OOP),
                        Web Technology, Database Management (DBMS), Artificial Intelligence (AI),
                        and Software Engineering.    
                        </p>
                    </div>
                </div>
                <Image
                src={"https://web.nitp.ac.in/dept/cse/labs/DSC_0004.jpg"}
                alt="labs"
                width={300}
                height={500}
                className="mt-6 lg:mt-0 mr-6 pl-6 lg:pl-0"
                />
            </div>
            <div className="mb-10 flex flex-col lg:flex-row">
                <div className="flex flex-col">
                    <p className="text-red-900 font-bold text-2xl max-sm:text-1xl mb-4">
                        Computing Lab-2:
                    </p>
                    <div className="lg:w-2/3">
                        <p className="text-justify font-semibold pl-6">
                            Simulation lab uses the IBM Rational Rose software and other
                             software to design software modules. This lab also deals some
                              courses like Object-Oriented Programming (OOP), Web Technology, 
                              Database Management (DBMS), Artificial Intelligence (AI), and 
                              Software Engineering.
                        </p>
                    </div>
                </div>
                <Image
                src={"https://web.nitp.ac.in/dept/cse/labs/DSC_0001.jpg"}
                alt="labs"
                width={300}
                height={500}
                className="mt-6 lg:mt-0 mr-6 pl-6 lg:pl-0"
                />
            </div>
            <div className="mb-10 flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col">
                    <p className="text-red-900 font-bold text-2xl max-sm:text-1xl mb-4">
                        Network System Lab:
                    </p>
                    <div className="lg:w-2/3">
                        <p className="text-justify font-semibold pl-6">
                            The lab has well equipped system for research, which 
                            include the Network Training Kit. The lab deals with Cyber 
                            Security courses.
                        </p>
                    </div>
                </div>
                <Image
                src={"https://web.nitp.ac.in/dept/cse/labs/DSC_0002.jpg"}
                alt="labs"
                width={300}
                height={500}
                className="mt-6 lg:mt-0 pl-6 lg:pl-0 lg:mr-6  "
                />
            </div>
            <div className="mb-10 flex flex-col lg:flex-row">
                <div className="flex flex-col">
                    <p className="text-red-900 font-bold text-2xl max-sm:text-1xl mb-4">
                        Soft Computing Lab:
                    </p>
                    <div className="lg:w-2/3">
                        <p className="text-justify font-semibold pl-6">
                            Soft Computing lab use Statistica software for 
                            supervised learning analysis and data mining and also used 
                            the LAN Trainer kit for network topology. The lab is focusing 
                            on IOT related specific courses.

                        </p>
                    </div>
                </div>
                <Image
                src={"https://web.nitp.ac.in/dept/cse/labs/DSC_0008.jpg"}
                alt="labs"
                width={300}
                height={500}
                className="mt-6 lg:mt-0 mr-6 pl-6 lg:pl-0"
                />
            </div>
            <div className="mb-10 flex flex-col lg:flex-row">
                <div className="flex flex-col">
                    <p className="text-red-900 font-bold text-2xl max-sm:text-1xl mb-4">
                        Research Sholar Lab:
                    </p>
                    <div className="lg:w-2/3">
                        <p className="text-justify font-semibold pl-6">
                            The lab uses Statistica for supervised learning 
                            analysis and data mining work and Qualnet simulator 
                            for network simulation work.   
                        </p>
                    </div>
                </div>
                {/* <Image
                src={#}
                alt="labs"
                width={300}
                height={500}
                className="mt-6 lg:mt-0 mr-6 pl-6 lg:pl-0"
                /> */}
            </div>
            <div className="mb-10 flex flex-col lg:flex-row">
                <div className="flex flex-col">
                    <p className="text-red-900 font-bold text-2xl max-sm:text-1xl mb-4">
                        Image Processing Lab:
                    </p>
                    <div className="lg:w-2/3">
                        <p className="text-justify font-semibold pl-6">
                            Hardware: Image Capture Camera, Image Grabber Card 
                            along with PCs. The analysis and manipulation of a 
                            digital image, in order to get an enhanced image 
                            or to extract some useful information from it with 
                            the help of “Image Processing Software”.
                        </p>
                    </div>
                </div>
                {/* <Image
                src={"https://web.nitp.ac.in/dept/cse/labs/DSC_0004.jpg"}
                alt="labs"
                width={300}
                height={500}
                className="mt-6 lg:mt-0 mr-6 pl-6 lg:pl-0"
                /> */}
            </div>
            <div className="mb-10 flex flex-col lg:flex-row">
                <div className="flex flex-col">
                    <p className="text-red-900 font-bold text-2xl max-sm:text-1xl mb-4">
                        Computing Lab-3:
                    </p>
                    <div className="lg:w-2/3">
                        <p className="text-justify font-semibold pl-6">
                            This lab facilitates training, research, experiments in the domain of software testing, mobile application development, cloud computing, network security, Big Data analysis and Industrial Automation. This also deals some courses like Data Structure and Algorithms, Operating System, Compiler Design, and Computer Graphics.
                        </p>
                    </div>
                </div>
                {/* <Image
                src={"https://web.nitp.ac.in/dept/cse/labs/DSC_0004.jpg"}
                alt="labs"
                width={300}
                height={500}
                className="mt-6 lg:mt-0 mr-6 pl-6 lg:pl-0"
                /> */}
            </div>
            <div className="mb-10 flex flex-col lg:flex-row">
                <div className="flex flex-col">
                    <p className="text-red-900 font-bold text-2xl max-sm:text-1xl mb-4">
                        Computing Lab-4:
                    </p>
                    <div className="lg:w-2/3">
                        <p className="text-justify font-semibold pl-6">
                        This deals with some courses like Data Structure and Algorithms, Operating System, Compiler Design, and Computer Graphics.
                        </p>
                    </div>
                </div>
                {/* <Image
                src={"https://web.nitp.ac.in/dept/cse/labs/DSC_0004.jpg"}
                alt="labs"
                width={300}
                height={500}
                className="mt-6 lg:mt-0 mr-6 pl-6 lg:pl-0"
                /> */}
            </div>
            <div className="mb-10 flex flex-col lg:flex-row">
                <div className="flex flex-col">
                    <p className="text-red-900 font-bold text-2xl max-sm:text-1xl mb-4">
                        Network Security Lab:
                    </p>
                    <div className="lg:w-2/3">
                        <p className="text-justify font-semibold pl-6">
                            The lab has well equipped system for research, which include the Network Training Kit. The lab deals with Cyber Security courses.
                        </p>
                    </div>
                </div>
                {/* <Image
                src={"https://web.nitp.ac.in/dept/cse/labs/DSC_0004.jpg"}
                alt="labs"
                width={300}
                height={500}
                className="mt-6 lg:mt-0 mr-6 pl-6 lg:pl-0"
                /> */}
            </div>

                  
        </div>
    )
}