import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { getStoredJobApplication } from "../../utility/localstorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect( () => {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            const jobApplied = jobs.filter(job => job.id === storedJobIds.id)
        }
    }, [])
    return (
        <div>
            <h2>This is my Applied Jobs</h2>
        </div>
    );
};

export default AppliedJobs;