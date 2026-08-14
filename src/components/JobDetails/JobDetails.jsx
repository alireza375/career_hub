import { useLoaderData, useParams } from "react-router";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();

    const job = jobs.find(job => job.id == id);

    console.log(job);

    return (
        <div>
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
                    <button className="btn btm-praimary w-full">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;