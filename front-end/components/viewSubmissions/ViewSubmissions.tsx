import React from "react";

interface Submission {
  studentName: string;
  content: string;
}

interface ViewSubmissionsProps {
  submissions: Submission[];
  onClose: () => void;
}

const ViewSubmissions: React.FC<ViewSubmissionsProps> = ({
  submissions,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-md font-bold mb-4">Submissions</h2>
      <button onClick={onClose} className="text-red-500 mb-4">
        Close
      </button>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        submissions.map((submission, index) => (
          <div key={index} className="p-2 border-b">
            <h3 className="text-sm font-bold">{submission.studentName}</h3>
            <p className="text-xs">{submission.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewSubmissions;
