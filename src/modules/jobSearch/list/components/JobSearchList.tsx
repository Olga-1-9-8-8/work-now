interface WorkerSearchListProps {
  jobs: any;
}

export const JobSearchList = ({ jobs }: WorkerSearchListProps) => {
  return jobs.map((job: any) => <p key={job.id}>{job.title}</p>);
};
