import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from 'react-toastify'; 
// import 'react-toastify/dist/ReactTostify.css';
import Banner from "../Banner/Banner";
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(id);
        toast('You have applied successfully');
    }

    return (
        
        <div>
            <Banner />
            <div className="grid md:grid-cols-4 gap-4">
                <div className="p-2 border md:col-span-3">
                    <h2>Job Details of: {job.job_title}</h2>
                    <div className=""> 
                        <h2 className="text-4xl">Job Description</h2>
                        <p>{job.job_description}</p>
                    </div>
                    <div className="mt-4"> 
                        <h2 className="text-4xl">Job Responsibilities</h2>
                        <p>{job.job_responsibility}</p>
                    </div>
                    <div className="mt-4"> 
                        <h2 className="text-4xl">Job Education</h2>
                        <p>{job.educational_requirements}</p>
                    </div>
                    <div className="mt-4"> 
                        <h2 className="text-4xl">Job Experience</h2>
                        <p>{job.experiences}</p>
                    </div>
                    
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side things</h2>
                    <button onClick={handleApplyJob} className="btn btm-praimary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;