interface WorkerSearchListProps {
  workers: any;
}

export const WorkerSearchList = ({ workers }: WorkerSearchListProps) => {
  return workers.map((worker: any) => <p key={worker.id}>{worker.name}</p>);
};
